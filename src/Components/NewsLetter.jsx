
import StudentsImg from '../assets/studentsss.png'


const NewsLetter = () => {
  return (
    <>
    <div className='md:px-14 px-4 mx-auto max-w-screen-2xl my-5 mb-25 mt-20'>
        <div className='gradientBg rounded-xl rounded-br-[80px] px-4 md:p-9'>
              <div className='flex md:flex-row-reverse flex-col p-5 gap-9 justify-between items-center pt-10'>
                {/* Banner image */}
                <div className=''>
                   <img src={StudentsImg} alt="" className='md:w-lg rounded-2xl mt-12 rounded-br-[50px] '/>
                </div>
        
                {/* Banner content */}
                <div className="md:w-3/5">
                 <h2 className='md:text-6xl text-4xl font-bold text-white mb-6 leading-tight'>Each students can share discount codes for friends</h2>
                 <p className='text-white text-2xl mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus aperiam obcaecati prov, consectetur adipisicing elit.
                    </p>
                    <div className='space-x-5 space-y-5 mt-10 mb-2'>
                        <button className='bg-blue-600 text-white px-5 py-2 font-semibold rounded hover:bg-green-600 transition-all duration-300 cursor-pointer'>I have a code</button>
                    </div>
                </div>
            </div>
            </div>
    </div>
    </>
  )
}

export default NewsLetter