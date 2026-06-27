import "./UseCases.css";
import {
  FiBook,
  FiCode,
  FiClipboard,
  FiPenTool,
  FiBriefcase,
  FiTarget,
} from "react-icons/fi";

const useCases = [
  {
    icon: <FiBook />,
    title: "Exam Preparation",
    desc: "Get help studying for tests with practice questions and explanations.",
  },
  {
    icon: <FiClipboard />,
    title: "Quick Revision",
    desc: "Generate concise revision notes and flashcards.",
  },
  {
    icon: <FiTarget />,
    title: "Project Ideas",
    desc: "Brainstorm creative project ideas for assignments.",
  },
  {
    icon: <FiCode />,
    title: "DSA Practice",
    desc: "Learn data structures and algorithms step-by-step.",
  },
  {
    icon: <FiTarget />,
    title: "Productivity Planning",
    desc: "Create schedules, set goals and track learning progress.",
  },
  {
    icon: <FiBriefcase />,
    title: "Resume Help",
    desc: "Build and improve your resume using AI suggestions.",
  },
];

function UseCases() {
  return (
    <section id="usecases"className="useCases">

      <span className="sectionBadge">
        Use Cases
      </span>

      <h2>
        Perfect for every learning need
      </h2>

      <p>
        Whether you're preparing for exams or building projects,
        Marg AI has you covered.
      </p>

      <div className="useCaseGrid">

        {useCases.map((item, index) => (
          <div className="useCaseCard" key={index}>

            <div className="useCaseIcon">
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

export default UseCases;