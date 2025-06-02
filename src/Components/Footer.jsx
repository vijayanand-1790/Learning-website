
import LogoNobg from '../assets/LogoNoBG.png'
import FB from '../assets/facebook.png'
import Insta from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import X from '../assets/twitter.png'



const Footer = () => {
  return (
    <>
    <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto'>
        <div className='my-12 flex md:flex-row flex-col gap-10'>
            
            <div className='flex flex-col md:w-1/2'>
                <div className='text-white space-y-2 p-2'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img className='w-10 inline-block items-center' src={LogoNobg} alt="" /><span className='text-white'>ABC</span>
                    </a>
                    <p className='md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam sapiente non id ab fugit hic ipsum eius dolores commodi.</p>
                </div>
                <div className='mt-8 flex'>
                    <input className='bg-white p-1 pl-2 rounded focus:outline-none focus:bg-white' type="email" name='email' id='email' placeholder='Your Email' />
                    <input type="submit" className='bg-violet-400 text-white hover:text-black hover:bg-amber-500 px-3 py-1 rounded -ml-12 cursor-pointer font-semibold transition duration-300' />
                </div>
            </div>

            {/* Footer navigations */}

            <div className='flex md:w-1/2 md:flex-row flex-col flex-wrap gap-8 justify-between items-start mt-10'>
               <div className='space-y-6 mt-5 text-white'>
                        <h3 className='text-xl font-bold'>Platform</h3>
                            <ul className='space-y-3'>
                                <a href="/" className='block'>Overview</a>
                                <a href="/" className='block'>Features</a>
                                <a href="/" className='block'>About</a>
                                <a href="/" className='block'>Pricing</a>
                            </ul>
                </div>

                <div className='text-white mt-5 space-y-4'>
                    <h3 className='text-xl font-bold'>Help</h3>
                    <ul className='space-y-3'>
                        <a href="/" className='block'>How does it works?</a>
                        <a href="/" className='block'>Where to ask questions?</a>
                        <a href="/" className='block'>How to play?</a>
                        <a href="/" className='block'>What is Needed for this?</a>
                    </ul>
                </div>

                <div className='text-white'>
                    <h3 className='text-xl font-bold mt-5'>Contact us</h3>
                    <address className='mt-5 leading-relaxed'>
                        <p>phone: 12345678 <br />No.123, ABC Street,<br /> Gokulam Colony, <br />Chennai, Pin-600030 </p>
                    </address>
                </div>

                
            </div>
        </div>

        <hr />

        <div className='flex md:flex-row flex-col justify-between my-2 mb-5 items-center'>
            <div className='mt-4 text-white'>
                <p>@ ABC -2025. All rights reserved.</p>
            </div>

            <div className='flex gap-10 items-center mt-3'>
                <img src={FB} className='size-8 cursor-pointer hover:translate-y-2 transition-all duration-200' alt="" />
                <img src={Insta} className='size-8 cursor-pointer hover:translate-y-2 transition-all duration-200' alt="" />
                <img src={LinkedIn} className='size-8 cursor-pointer hover:translate-y-2 transition-all duration-200' alt="" />
                <img src={X} className='size-8 cursor-pointer hover:translate-y-2 transition-all duration-200' alt="" />
            </div>
        </div>

    </div>
    </>
  )
}

export default Footer