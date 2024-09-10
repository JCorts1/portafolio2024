import React from 'react';
import resumeimg from "../img/resume.png"

const ResumeDownload = () => {
  return (
    <div className="resume-download">
      <a
        href="https://portafolio2024-production.up.railway.app/JuanCortes_Resume.pdf"
        download="JuanCortes_Resume.pdf" // This suggests the download filename
        className="download-button"
      >
        <img className="img-link img-linkresume rounded-lg" src={resumeimg} alt="" />
      </a>
    </div>
  );
};

export default ResumeDownload;
