import React from 'react';

const ResumeDownload = () => {
  return (
    <div className="resume-download">
      <a
        href="http://127.0.0.1:3000/JuanCortes_Resume.pdf"
        download="JuanCortes_Resume.pdf" // This suggests the download filename
        className="download-button"
      >
        <img className="img-link w-56 rounded-lg" src="./src/img/resume.png" alt="" />
      </a>
    </div>
  );
};

export default ResumeDownload;
