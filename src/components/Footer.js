import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="copy">
          <div>
            Made with{" "}
            <span className="heart" role="img" aria-label="heart">
              ❤️{" "}
            </span>{" "}
            by{" "}
          </div>
          <a href="http://www.helloshivam.com/" target="_blank" rel="noopener noreferrer">
            Shivam Sinha
          </a>
        </div>
        <div className="links">
          <a href="#">About</a>
          <a href="mailto:shivam@newschool.edu?Subject=Good Vibes News Error Submission">Report Error</a>
          <a
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=E8765LUXLUCAS&currency_code=USD&source=url"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
