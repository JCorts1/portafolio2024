import React from 'react';
import resumeimg from "../img/resume.png"

const ResumeDownload = () => {
  return (
    <div className="resume-download">
      <a
        href="http://13.51.37.112:3000/JuanCortes_Resume.pdf"
        download="JuanCortes_Resume.pdf" // This suggests the download filename
        className="download-button"
      >
        <img className="img-link img-linkresume rounded-lg" src={resumeimg} alt="" />
      </a>
    </div>
  );
};

export default ResumeDownload;
