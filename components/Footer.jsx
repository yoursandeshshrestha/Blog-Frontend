import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer__copyright">
        <small>Made with ❤️ by Sandesh Shrestha</small>
        <div className="social">
          <a href="https://github.com/yoursandeshshrestha" target="_blank">
            <img src="../public/github.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/sandesh-shrestha-b829572b0/"
            target="_blank"
          >
            <img src="../public/linkedin.png" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
