
import HomeImage from '../assets/homepicture.png'

const Home = () => {
  return (
    <>
    <div className='md:px-12 px-7 pt-10 max-w-screen-2xl mx-auto mt-28  mb-20' id='home'>
      <div className='gradientBg rounded-xl rounded-br-[80px] px-4 md:p-9'>
        <div className='flex md:flex-row-reverse flex-col p-5 gap-9 justify-between items-center pt-10'>

          {/* Banner image */}

          <div className=''>
           <img src={HomeImage} alt="" className='md:w-xl mt-12 rounded-br-[50px] '/>
          </div>

          {/* Banner content */}

          <div className="md:w-3/5">
            <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-tight'>Build Your Skills. Shape Your Future.</h2>
            <p className='text-white text-2xl mb-5'>Welcome to our website. We provide our students fulfilled quality courses to make them skilled and achieve their goals. 
            </p>
            <div className='space-x-5 space-y-5 mt-10'>
                <button className='bg-blue-600 text-white px-5 py-2 font-semibold rounded transition-all duration-300 cursor-pointer hover:bg-green-500'>Get Started</button>
                <button className='bg-blue-600 text-white px-5 py-2 font-semibold rounded transition-all duration-300 cursor-pointer hover:bg-green-500'>Discount</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
