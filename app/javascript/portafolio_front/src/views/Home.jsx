import ResumeDownload from "@/components/ResumeDownload"
import { Link } from "react-router-dom"
import html from "../img/HTML.gif"

const Home = () => {
  return (
    <div className='home w-screen h-screen m-0 p-0 flex justify-center items-center'>
      <div className="home-filter h-screen w-screen flex justify-center items-center">
      <div className='maincard w-5/12 h-5/6 rounded-lg flex flex-col justify-center items-center'>
        <div className="avatar"></div>
        <h1 className='text-white text-6xl m-10 font-sedgwick'>I am Jay Cortes</h1>
        <h2 className='text-white text-3xl'>Full_Stack Web_Developer</h2>
      </div>
      <div className='w-5/12 h-5/6 flex flex-col justify-center items-center'>
        <div className='presentation m-10 rounded-lg flex flex-col items-center'>

          <p className='text-presentation text-white text-left text-xl p-2'>Hey! You can call me Jay!
            I am a Web Developer with a strong foundation in full-stack development. Graduated from Le Wagon Bootcamp.
            With more than one year of experience.
          </p>
          <div className='languages grid grid-cols-4 gap-4 items-center m-2'>
            <img className='w-16' src={html} alt="" />
            <img className='w-16' src="/src/img/css.gif" alt="" />
            <img className='w-14' src="/src/img/tailwind.png" alt="" />
            <img  className="w-14" src="/src/img/bootstrap.png" alt="" />
            <img  className="w-14" src="/src/img/figma.gif" alt="" />
            <img className='w-14 ml-2' src="/src/img/jslogo.gif" alt="" />
            <img className='w-14' src="/src/img/react.gif" alt="" />
            <img className='w-12 ml-1' src="/src/img/stimulus.png" alt="" />
            <img  className="w-14" src="/src/img/ruby.png" alt="" />
            <img  className="w-14 ml-2" src="/src/img/rails.png" alt="" />
            <img  className="w-14" src="/src/img/github.gif" alt="" />
            <img  className="w-14" src="./src/img/postgresql.png" alt="" />
          </div>
        </div>
        <div className="links grid grid-cols-2 gap-4 items-center mt-6 mb-10 ml-12">
          <Link to="/projects"><img className="img-link w-62 rounded-lg" src="./src/img/projects.png" alt="" /></Link>
          <Link to="/blog"><img className="img-link w-44 rounded-lg" src="./src/img/blog.png" alt="" /></Link>
          <Link to="/contact"><img className="img-link w-62 rounded-lg" src="./src/img/contact.png" alt="" /></Link>
          <ResumeDownload/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
