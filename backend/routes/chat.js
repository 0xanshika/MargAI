import express from "express";
import Thread from "../models/thread.js";
import getOpenAIAPIResponse from "../utils/openai.js";

const router = express.Router();

// Test route
router.post("/test", async (req, res) => {
  try {
    const thread = new Thread({
      threadId: "xyz",
      title: "testing new thread"
    });

    const response = await thread.save();
    res.json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to save in DB" });
  }
});

// Get all threads
router.get("/thread", async (req, res) => {
  try {
    const threads = await Thread.find({}).sort({ updatedAt: -1 });

    res.json(threads);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch threads" });
  }
});

// return one specific thread data
router.get("/thread/:threadId", async(req,res)=>{
  const {threadId} = req.params; // help on featching thraed id from paramters
  try{
    const thread = await Thread.findOne({threadId}); //ek id find on the basis of thraed id

    if(!thread){  // agr hume koi valid thraed  nhi milta hai toh hum error return karenge 
      res.status(404).json({ error: "thread not found" });
    }
    // otherwise we will reutn only messages as we only need messages

    res.json(thread.messages);
  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch threads" });
  }
});

//delete route

router.delete("/thread/:threadId", async(req, res) =>{
  const {threadId} = req.params; // help on featching thraed id from paramters
  try{
    const deletedThread = await Thread.findOneAndDelete({threadId}); //ek id find on the basis of thraed id

    if(!deletedThread){  // agr hume koi valid thraed  nhi milta hai toh hum error return karenge 
      res.status(404).json({ error: "thread not deleated" });
    }
    // otherwise we will reutn only messages as we only need messages

    res.status(200).json({ error: "thread deleated successfully" });

  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delet threads" });
  }
});

router.post("/chat", async(req, res)=>{
  const {threadId, message} = req.body;
  if (!threadId || !message) {
  return res.status(400).json({ error: "missing required fields" });
}
  try{
    let thread = await Thread.findOne({ threadId });
    if(!thread){
      thread = new Thread({
        threadId,
        title: message,
        messages: [{role: "user", content: message}]
      });
    }else{
      thread.messages.push({role: "user", content: message});
    }
    const assistantreply = await getOpenAIAPIResponse(message);
    thread.messages.push({role: "assistant", content: assistantreply});
    thread.updatedAt = new Date();

    await thread.save();
    res.json({reply: assistantreply});
  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "something went wrong" });
  }
});

export default router;