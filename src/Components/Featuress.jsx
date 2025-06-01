
import FeatureCard from '../assets/card.png.png'

const Features = () => {
    
  return (
    <>
    <div className='md:px-14 px-4 my-15 mx-auto max-w-screen-2xl' id='features'>
        <div className='flex lg:flex-row flex-col justify-between items-start gap-10 pt-2'>
            <div className='lg:w-1/4'>
                <h3 className='text-2xl font-bold text-black lg:w-1/2 mb-3'>"Why we are better than others"</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, numquam. Lorem ipsum dolor sit amet.</p>
            </div>
            {/* featured cards */}
            <div className='w-full lg:w-3/4'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                    <div className='bg-[rgba(255,255,255,0.04)] flex p-4 shadow-2xl hover:translate-y-4 rounded-2xl justify-center items-center transition-all duration-300 cursor-pointer'>
                      <div>
                        <img src={FeatureCard} className='w-30' alt="" />
                        <h5 className='font-semibold'>Convenient study schedule</h5>
                      </div>
                    </div>
                    <div className='bg-[rgba(255,255,255,0.04)] flex p-4 shadow-2xl hover:translate-y-4 rounded-2xl justify-center items-center transition-all duration-300 cursor-pointer md:mt-15'>
                      <div>
                        <img src={FeatureCard} className='w-30' alt="" />
                        <h5 className='font-semibold'>Practical tasks everyday</h5>
                      </div>
                    </div>
                    <div className='bg-[rgba(255,255,255,0.04)] flex p-4 shadow-2xl hover:translate-y-4 rounded-2xl justify-center items-center transition-all duration-300 cursor-pointer'>
                      <div>
                        <img src={FeatureCard} className='w-30' alt="" />
                        <h5 className='font-semibold'>Interview tips</h5>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Features