import { useState } from "react"
import Tick from '../assets/check.png'
import Cross from '../assets/cross.png'

const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false)

    const packages = [
        {name: "Basic", monthyPrice:499, yearlyPrice:4999, description: "This is our Basic plan with various advantages for students with low cost"},
        {name: "Intermediate", monthyPrice:799, yearlyPrice:8499, description: "Intermediate plan comes with many features to help students learn more in easier way"},
        {name: "Advanced", monthyPrice:999, yearlyPrice:10499, description: "This is our special plan includes additional features with value added services"},
    ]

  return (
    <>
    <div className='md:px-14 px-4 max-w-screen mx-auto py-5 mt-10' id="pricing">
        <div className='text-center'>
            <h2 className='md:text-5xl text-3xl font-extrabold mb-2'>Here are <span className="text-violet-600">all our plans</span></h2>
            <p className='md:w-1/3 mx-auto px-3 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magnam. Alias voluptates totam voluptas ab fugiat non. Libero sit impedit alias? Eveniet</p>

            {/* toggle pricing */}

            <div className='mt-15'>
                <label htmlFor="toggle" className='inline-flex'>
                    <span className="mr-8 text-2xl font-semibold">Monthly</span>
                      <div className="w-16 h-7 bg-gray-300 rounded-full transition duration-300 ease-in-out cursor-pointer">
                        <div className={`w-6 h-6 bg-black rounded-full mt-0.5 ml-0.5 ${isYearly ? "bg-black ml-9" : "bg-gray-600"}`}></div>
                      </div>
                    <span className="ml-8 text-2xl font-semibold">Yearly</span>
                </label>
                <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={()=>setIsYearly(!isYearly)} />
            </div>

         </div>
         {/* pricing cards */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:w-11/12 mt-10 mx-auto mb-5">
                {
                    packages.map((pkg, index) => <div key={index} className="shadow-2xl md:p-6 p-4 m-5 rounded-lg">
                        <h3 className="text-center text-2xl font-bold">{pkg.name}</h3>
                        <p className="text-center my-3">{pkg.description}</p>
                        <p className="text-3xl font-bold text-violet-600 text-center">
                            {isYearly ? `Rs.${pkg.yearlyPrice}` : `Rs.${pkg.monthyPrice}`}<span className="text-base text-black font-medium">/{isYearly ? "year" : "month"}</span>
                        </p>
                        <ul className="mt-6 space-y-3 ml-2 pb-3">
                            <li className="flex gap-4"><img src={Tick} alt="" className="size-6"/>Videos of lessons</li>
                            <li className="flex gap-4"><img src={Tick} alt="" className="size-6"/>Homework check</li>
                            <li className="flex gap-4"><img src={Tick} alt="" className="size-6"/>Additional practical task</li>
                            <li className="flex gap-4"><img src={Tick} alt="" className="size-6"/>Monthly conferences</li>
                            <li className="flex gap-4"><img src={isYearly ? Tick : Cross} alt="" className="size-6"/>Personal tips from trainers</li>
                        </ul>
                        <div className="items-center flex pb-10">
                            <button className="bg-blue-600 text-white py-3 rounded mt-8 px-7 mx-auto text-center cursor-pointer hover:bg-green-500 transition-all duration-300">Get Started</button>
                        </div>
                    </div> )
                }
            </div>
        </div>
    </>
  )
}

export default Pricing