import "../styles/Projects.css"
import { CarouselOrientation } from "@/components/CarouselOrientation"


const Projects = () => {
  return (
    <div className='projects w-screen h-screen flex justify-center items-center'>
      <div className="projects-filter w-screen h-screen flex items-center">
        <div className="local-loop w-5/12 h-5/6 border-2 rounded-lg flex justify-between items-center">
          <h2 className="text-white">Local Loop</h2>
          <CarouselOrientation/>
        </div>

      </div>

    </div>
  )
}

export default Projects
