import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">

      <div className="ctaBox">

        <div className="ctaBadge">
          ✦ Ready to get started?
        </div>

        <h2>
          START YOUR SMARTER
          <br />
          LEARNING JOURNEY TODAY.
        </h2>

        <p>
          Join thousands of students who are already learning
          smarter with मार्ग AI. No credit card required.
        </p>

        <div className="ctaButtons">

          <Link to="/login">
              <button className="loginBtn">
                  Login
              </button>
          </Link>

          <Link to="/signup">
            <button className="signupBtn">
              Sign Up Free →
            </button>
          </Link>

        </div>

        <span className="star star1">✦</span>
        <span className="star star2">✦</span>

      </div>

    </section>
  );
}

export default CTA;