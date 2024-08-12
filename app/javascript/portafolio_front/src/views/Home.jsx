import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='home w-screen h-screen m-0 p-0 flex justify-center items-center'>
      <div className='maincard w-5/12 h-5/6 border-14 rounded-xl flex flex-col justify-center items-center'>
        <img className='w-36 rounded-full' src="./src/img/avatar.jpg" alt="" />
        <h1 className='text-white text-6xl m-10'>I am Jay Cortes</h1>
        <h2 className='text-white text-3xl'>Full_Stack Web_Developer</h2>
      </div>
      <div className='w-5/12 h-5/6 flex flex-col'>
        <a className='rotate-12 hover:rotate-0 mt-16 ml-5' href="#"><img className='w-86' src="./src/img/blog.png" alt="blog-link"/></a>
        <a href="#"><img src="./src/img/contact.png" alt="" /></a>
        <a href="#"><img src="./src/img/projectshome.png" alt="" /></a>
      </div>
    </div>
  )
}

export default Home
