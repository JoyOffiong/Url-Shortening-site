import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../../styleSheet/modal.css'
import { useState } from 'react';

const Modal = ({shortLink, showModal, setShowModal}) => {

const [copied, setCopied] = useState(false)

  const handleCloseModal = () => {
    setShowModal(!showModal);
    console.log('closed')
  };

  return (
    
    <section className='modal-show'>
        
      <div className='phone:bg-slate-700 p-5 text-gray-50 w-4/5 rounded-lg tablet:w-2/5'>
        <div className='flex flex-row  items-center justify-between px-30 pb-10' >
          <h4 className='text-2xl font-bold'>Short Link:</h4>
          <button 
        className=''
        onClick={handleCloseModal}><FaWindowClose/></button>
      </div>


       <input type="url"
       value={shortLink} 
       className='text-slate-700 rounded-ms'/>
        
        <CopyToClipboard text={shortLink}
        onCopy = {()=> setCopied(true)}
        ><div className='  font-bold mx-auto mt-5  w-3/5'>
          <button className=' ease-in-out duration-300 bg-slate-200 p-1 text-slate-700 rounded-md hover:bg-slate-700 hover:text-slate-100' 
         >Copy Link</button>
        </div>
          </CopyToClipboard>
        
        <div>
        {copied ? <span className='text-rose-600'>Copied</span> : null }
        </div>
         

      </div>
    </section>  
   
  );
};

export default Modal;
