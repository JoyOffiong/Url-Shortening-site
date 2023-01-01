import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr'

export function Header({showNavBar, navBar }) {

  return (
    <div className='flex items-center justify-between tablet:py-5 phone:pl-8 tablet:px-20 phone:py-3 fixed w-screen z-30 bg-white shadow-md'>
        <div className='flex items-center justify-between w-2/5'>

            <h3 className="text-3xl font-bold">Shortly</h3>
            <p className=' phone:hidden laptop:block text-gray-500 font-bold'>Features</p>
            <p className=' phone:hidden laptop:block text-gray-500 font-bold'>Pricing</p>
            <p className=' phone:hidden laptop:block text-gray-500 font-bold'>Resources</p>

        </div>

        <div className='flex items-center justify-between w-1/5'>
            
            <div className='laptop:hidden tablet:block'>
        {navBar?
            <BiMenuAltLeft className='text-4xl' onClick={()=>showNavBar()} /> :
            <GrFormClose className='text-4xl' onClick={()=>showNavBar()} />}
            </div>
             
            <div>
            <button className='px-5 py-1 font-bold phone:hidden laptop:block'>
            Login
            </button>
            </div>
           
            <div>
            <button className='bg-cyan-400 rounded-full text-slate-100 font-bold  px-5 py-1 phone:hidden laptop:block'>
            SignUp
            </button>
            </div>

            <div>
                
            </div>
           
        </div>

    </div>
  )
}
