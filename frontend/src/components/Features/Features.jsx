import "./Features.css";
import {
  FiMessageSquare,
  FiFileText,
  FiCalendar,
  FiCode,
  FiZap,
  FiStar,
  FiAward,
  FiTarget,
} from "react-icons/fi";

const features = [
  {
    icon: <FiMessageSquare />,
    title: "AI Chat Assistant",
    desc: "Get instant answers to your study questions with our intelligent AI companion.",
  },
  {
    icon: <FiFileText />,
    title: "Notes Summarizer",
    desc: "Transform lengthy notes into concise, easy-to-review summaries.",
  },
  {
    icon: <FiCalendar />,
    title: "Study Planner",
    desc: "Create personalized study schedules and track your progress.",
  },
  {
    icon: <FiCode />,
    title: "Coding Help",
    desc: "Debug code, explain concepts, and learn programming.",
  },
  {
    icon: <FiZap />,
    title: "Productivity Assistant",
    desc: "Boost efficiency with AI-powered task management.",
  },
  {
  icon: <FiAward />,
  title: "Interview Preparation",
  desc: "Practice interview questions and receive feedback.",
},
{
  icon: <FiTarget />,
  title: "Idea Generator",
  desc: "Brainstorm creative ideas for projects and assignments.",
},
    {
  icon: <FiStar />,
  title: "Quick Revision Notes",
  desc: "Generate flashcards and revision materials for effective studying.",
},
];

function Features() {
  return (
    <section id="features" className="featuresSection">
      <span className="sectionBadge">
        Powerful Features
      </span>

      <h2>
        Everything you need to learn <span>smarter</span>
      </h2>

      <p>
        From note-taking to exam prep, our AI-powered tools
        help you study more efficiently.
      </p>

      <div className="featuresGrid">
        {features.map((item, index) => (
          <div className="featureCard" key={index}>

            <div className="featureIcon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;