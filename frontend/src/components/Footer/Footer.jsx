import "./Footer.css";
import {
  FiTwitter,
  FiGithub,
  FiMail
} from "react-icons/fi";

function Footer() {
  return (
    <footer id="footer" className="footer">

      <div className="footerTop">

        <div className="footerBrand">

          <div className="footerLogo">
            ✦ मार्ग AI
          </div>

          <p>
            Your AI-powered study companion for smarter
            learning and enhanced productivity.
          </p>

          <div className="socials">
            <FiTwitter />
            <FiGithub />
            <FiMail />
          </div>

        </div>

        <div>
          <h4>Product</h4>

          <p>Features</p>
          <p>How It Works</p>
          <p>Use Cases</p>
          <p>Workspace</p>
        </div>

        <div>
          <h4>Company</h4>

          <p>About</p>
          <p>Blog</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

      </div>

      <div className="footerBottom">
        Designed with care for those who never stop learning <i class="fa-solid fa-bullseye"></i>
      </div>

    </footer>
  );
}

export default Footer;