import "./HowItWorks.css";
import {
  FiHelpCircle,
  FiCpu,
  FiSend
} from "react-icons/fi";

const steps = [
  {
    icon: <FiHelpCircle />,
    title: "Ask Anything",
    desc: "Ask study questions, coding doubts, or productivity-related queries.",
  },
  {
    icon: <FiCpu />,
    title: "AI Understands",
    desc: "Marg AI analyzes your request and provides accurate responses.",
  },
  {
    icon: <FiSend />,
    title: "Learn Faster",
    desc: "Get summaries, explanations, and learning support instantly.",
  },
];

function HowItWorks() {
  return (
    <section id = "about" className="worksSection">

      <span className="sectionBadge">
        Simple Process
      </span>

      <h2>
        How मार्ग AI works
      </h2>

      <p>
        Getting started is as easy as 1-2-3.
      </p>

      <div className="stepsGrid">

        {steps.map((step, index) => (
          <div className="stepCard" key={index}>

            <span className="stepNumber">
              0{index + 1}
            </span>

            <div className="stepIcon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default HowItWorks;