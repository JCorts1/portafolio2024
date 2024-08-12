import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='home w-screen h-screen m-0 p-0 flex justify-center items-center'>
      <div className='maincard w-5/12 h-5/6 border-2 rounded-lg flex flex-col justify-center items-center'>
        <img className='w-36 rounded-full' src="./src/img/avatar.jpg" alt="" />
        <h1 className='text-white text-6xl m-10'>I am Jay Cortes</h1>
        <h2 className='text-white text-3xl'>Full_Stack Web_Developer</h2>
      </div>
      <div className='w-5/12 h-5/6 flex flex-col justify-center items-center'>
        <div className='presentation m-10 rounded-lg flex flex-col items-center'>

          <p className='text-presentation text-white text-center text-xl p-2'>Hey! You can call me Jay!
            I am a Junior Web Developer with a strong foundation in full-stack development, With more than one year of experience.
          recently graduated from Le Wagon Bootcamp.
          </p>
          <div className='languages grid grid-cols-4 gap-4 items-center m-2'>
            <img className='w-20' src="./src/img/html.gif" alt="" />
            <img className='w-20' src="./src/img/css.gif" alt="" />
            <img className='w-16' src="./src/img/tailwind.png" alt="" />
            <img className='w-16' src="./src/img/jslogo.gif" alt="" />
            <img className='w-16' src="./src/img/react.gif" alt="" />
            <img className='w-14 ml-3' src="./src/img/stimulus.png" alt="" />
            <img  className="w-16" src="./src/img/ruby.png" alt="" />
            <img  className="w-16" src="./src/img/github.gif" alt="" />
            <img src="" alt="" />

          </div>

        </div>

      </div>
    </div>
  )
}

export default Home
