import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-sm-4">
          <h4 className="footer-heading">Services</h4>
          <div>
            <a href="#" className="footer-anchor">
              Home
            </a>
            <br />
            <a href="#" className="footer-anchor">
              Book Test
            </a>
            <br />
            <a href="#" className="footer-anchor">
              Upload Prescription
            </a>
            <br />
            <a href="#" className="footer-anchor">
              Download Report
            </a>
            <br />
          </div>
        </div>
        <div className="col-sm-4">
          <h4 className="footer-heading">Social Media Handles</h4>
          <div>
            <a href="#" className="footer-anchor">
              Instagram
            </a>
            <br />
            <a href="#" className="footer-anchor">
              Facebook
            </a>
            <br />
            <a href="#" className="footer-anchor">
              Twitter
            </a>
            <br />
          </div>
        </div>
        <div className="col-sm-4">
          <h4 className="footer-heading">Contact Details</h4>
          <div className="footer-contactDetails">
            <ul>
              <li>+91 7517913910</li>
              <li>+91 7775892578</li>
              <li>lifelinePathologylab01@gmail.com</li>
              <li>Pune, Maharashtra</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
