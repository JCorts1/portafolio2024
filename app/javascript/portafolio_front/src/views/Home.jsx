import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='w-screen h-screen m-0 p-0'>
      <Navbar/>
      <div className='landing w-screen h-4/5 py-10 px-36'>
        <div className='avatar flex items-center'>
          <img className='w-16 rounded-full' src="src/img/avatar.jpg" alt="Avatar"/>
          <div className='mx-5 border-2 rounded-xl'><p className='px-2 py-1 text-white'>Available to work</p></div>
        </div>
        <div className='land-content my-5'>
          <h1 className='text-white text-3xl'>Hey! I am Jay Cortes</h1>
          <p className='text-white my-4 text-lg'>A Junior Web Developer with a year of experience.
            I recently graduated from Le Wagon Bootcamp,Eager to apply my knowledge to new challenges, I´m seeking opportunities to contribute to dynamic development teams.
            Let´s connect to discuss how my skills align with your project needs. </p>
        </div>
      </div>
      <div className='education w-screen h-screen'>

      </div>
    </div>
  )
}

export default Home
