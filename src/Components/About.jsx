
import Image1 from '../assets/about1.png'
import Image2 from '../assets/about2.png'

const About = () => {
  return (
    <>
    <div className='md:px-14 px-4 max-w-screen mx-auto' id='about'>
        <div className='flex md:flex-row flex-col justify-between items-center gap-10 pt-10'>
            <div className='md:w-1/2'>
               <img src={Image1} alt="" />
            </div>
            <div className='md:w-2/5'>
               <h2 className='md:text-5xl text-3xl font-bold leading-normal mb-5'>We have been improving our products <span className='text-violet-600'>for many years</span></h2>
               <p className='text-lg text-gray-600 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, consequatur. Lorem ipsum dolor sit amet.</p>
               <button className='bg-blue-500 rounded px-4 py-1
                cursor-pointer text-white
                transition-all duration-300 hover:bg-green-500'>Get Started</button>
            </div>
        </div>
        <div className='flex md:flex-row-reverse flex-col justify-between items-center gap-10'>
            <div className='md:w-1/2'>
               <img src={Image2} alt="" />
            </div>
            <div className='md:w-2/5'>
               <h2 className='md:text-5xl text-3xl font-bold leading-normal mb-5'>You can practice at your <span className='text-violet-600'>convenient time</span></h2>
               <p className='text-lg text-gray-600 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, consequatur. Lorem ipsum dolor sit amet.</p>
               <button className='bg-blue-500 rounded px-4 py-1
                cursor-pointer text-white
                transition-all duration-300 hover:bg-green-500'>Get Started</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default About