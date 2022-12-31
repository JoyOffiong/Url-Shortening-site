import React from 'react'

export default function AdvancedStats() {
  return (
    <div className='phone:pb-50 -mt-16 laptop:-mt-10' style={{backgroundColor:'#f0f1f6'}}>
        <div className='mb-10 phone:pt-20'>
            <h3 className='text-4xl font-bold pb-5 pt-20'>Advanced Statistics</h3>
            <p className='phone: w-4/5 pb-5 mx-auto '>Track how your links are performing across the web with our advanced statistics dashboard </p>
        </div>
        
        <div className='phone:mx-auto px-6 pb-10 flex flex-col laptop:flex-row justify-between laptop:px-20'>
            <div className=' phone: texts-left p-10 bg-white m-5 rounded-md'>
                <img src="" alt="" />
                <h3 className='font-bold pb-10'>Brand Recognition</h3>
                <p>Boast your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>

            </div>

            <div className='phone: texts-left p-10 bg-white m-5 laptop:mt-10 rounded-md' >
                <img src="" alt="" />
                <h3 className='font-bold pb-10'>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing where and when people engage with your content help make inform better decisions</p>
            </div>

            <div className='texts-left p-10 bg-white m-5 laptop:mt-16 rounded-md'>
                <img src="" alt="" />
                <h3 className='font-bold pb-10'>Fully Customizable</h3>
                <p>Imrove brand awareness and content discoverability through customizable links, superchanging audience engagement</p>
            </div>
        </div>
        
        </div>
  )
}
