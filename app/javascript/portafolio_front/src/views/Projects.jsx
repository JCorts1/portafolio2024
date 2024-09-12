import "../styles/Projects.css";
import { CarouselOrientation } from "@/components/CarouselOrientation";
import Navbar from "@/components/Navbar";
import sprayer from "../img/sprayer.png"

const Projects = () => {
  return (
    <div className="projects w-screen h-screen">
      <div className="projects-filter w-screen h-screen">
        <Navbar />
        <div className="projects-content">
          <div className="local-loop rounded-lg">
            <div className="project-text">
              <h2 className="projects-header text-white text-5xl font-sedgwick">
                Local Loop
              </h2>
              <p className=" text-white font-montserrat text-xl">
                Final Project from Le Wagon Bootcamp. This phone application was
                made with Ruby on Rails using MVC. contains validations,
                Database created with Postgresql. In the front-end we can find
                pure HTML, pure CSS and Stimulus.
                <br />
                This is a social media where you can find and participate in
                events around your zipcode.
              </p>
              <a
                className="button mt-10 w-28"
                href="https://www.localloop.site/"
              >
                Check it out!
              </a>
            </div>

            <CarouselOrientation />
          </div>

          <div className="sprayer sprayer-bigscreen flex flex-col justify-center items-center">
            <img
              src={sprayer}
              className="w-7/12 rotate-45"
              alt="can-graffity"
            />
            <h2 className="text-white text-4xl text-center font-sedgwick">
              And there's more coming!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
