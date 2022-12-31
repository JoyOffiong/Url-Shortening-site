import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {BsPinterest} from 'react-icons/bs'
// import {CgInstagran} from 'react-icons/cg'

export default function Footer() {
  return (
    <div className='bg-slate-900'>
      <div className='mx-auto pt-10 bg-violet-900 py-20'
      style={{backgroundColor:'#3a3053'}}>
        <h3 className="text-slate-100 text-4xl pb-10 font-bold">Boost Your Links Today</h3>
        <button className=' text-slate-100 bg-cyan-400 rounded-full  px-7 py-3 font-bold '>
           Get Started
            </button>
      </div>

      <div className='phone: pt-10 flex justify-between items-center w-4.5/5 mx-auto flex-col laptop:flex-row laptop:items-baseline '
      style={{backgroundColor:'#232027'}}>
      
          <h3 className=' phone:mx-auto font-bold text-3xl w-2/5 text-slate-100 pb-5 pt-5 laptop:pt-0' >Shortly</h3>
 

        <div className='phone: py-10 text-slate-100 flex justify-between w-4/5 px-20 mx-auto flex-col laptop:flex-row'>
        <div className='w-1.2/5 mb-10 '>
          <h3 className='pb-5 font-bold'>Features</h3>
          <p className='pb-3'>Link Shortening</p>
          <p className='pb-3'>Branded Links</p>
          <p className='pb-3'>Analytics</p>
        </div>

        <div className='w-1.2/5 mb-10 '>
          <h3 className='pb-5 font-bold'>Resources</h3>
          <p className='pb-3'>Blog</p>
          <p className='pb-3'>Developers</p>
          <p className='pb-3'>Support</p>
        </div>

        <div className='w-1.2/5 mb-10 '>
          <h3 className='pb-5 font-bold'>Company</h3>
          <p className='pb-3'>About</p>
          <p className='pb-3'>Our Team</p>
          <p className='pb-3'>Careers</p>
          <p>Contact</p>
        </div>
        
            {/* <CgInstagran/> */}
        <div className='phone: w-1.2/5 mb-10 flex justify-between flex-row' style={{gap:'15px'}}>
        <FaFacebookSquare style={{fontSize:"20px"}}/>
            <FaTwitter style={{fontSize:"20px"}}/>
            <BsPinterest style={{fontSize:"20px"}}/>
        </div>
        </div>
      </div>
    </div>
  )
}
