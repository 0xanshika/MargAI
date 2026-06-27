import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="heroContent">

        <div className="badge">
          ✦ AI-Powered Learning Platform
        </div>

        <h1>
          YOUR AI GUIDE
          <br />
          FOR <span>SMARTER</span>
          <br />
          LEARNING.
        </h1>

        <p>
          Ask questions, summarize notes, prepare for exams,
          generate ideas, and boost productivity with your
          AI-powered study companion.
        </p>

        <div className="heroButtons">

          <Link to="/workspace">
            <button className="primaryBtn">
              Start Learning
              <span className="arrow">→</span>
            </button>
          </Link>

        </div>

      </div>

      <div className="heroCard">

        <div className="chatBox">

          <div className="chatHeader">
            ✦ Ask me anything...
          </div>

          <p>
            I can help with study notes, coding,
            exams & more
          </p>

          <div className="promptButtons">
            <button>Explain recursion</button>
            <button>Summarize chapter</button>
            <button>Quiz me</button>
          </div>

        </div>

        <div className="featureGrid">

          <div><i class="fa-solid fa-note-sticky"></i>  Summarize notes</div>
          <div><i class="fa-solid fa-computer"></i>  Explain code</div>

          <div><i class="fa-solid fa-brain"></i>     Study plans</div>
          <div><i class="fa-solid fa-lightbulb"></i>  Generate ideas</div>

        </div>

      </div>

    </section>
  );
}

export default Hero;