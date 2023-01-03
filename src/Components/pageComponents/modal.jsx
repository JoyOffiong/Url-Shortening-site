import React from "react";
// import { FaWindowClose } from 'react-icons/fa';
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../../styleSheet/modal.css";
import { useState } from "react";

const Modal = ({ links}) => {
  // const [copied, setCopied] = useState(false);

  const [copytext, setcopyText] = useState("copy Link");
  

  // const handleCloseModal = () => {
  //   setShowModal(!showModal);
  //   console.log('closed')
  // };

  const copy = () => {
    setcopyText("copied");

  };
  return (
    <section className=" mt-2 py-5 rounded-lg flex flex-col w-full">
      {links.map((link)=>{
          const {link1, link2} = link
          return(
            <div className="phone:bg-slate-200 mt-2 py-5 rounded-lg flex flex-col w-full  justify-between items-center laptop:flex-row">
    
            <div className="w-3/5">
                  <span className="text-slate-700 text-sm ">{link2}</span>
                </div>
                <div className="w-1/5 items-center">
                  <span className="text-cyan-400 text-sm">{link1}</span>
                </div>
        
                <div className="w-1/5">
                
                <CopyToClipboard text={link1} onCopy={() => copy()}>
        
                  <button className=" ease-in-out duration-300 bg-cyan-400 p-1 text-slate-200 rounded-md hover:bg-slate-200 hover:text-cyan-400 ">
                    {copytext}
                  </button>
                   </CopyToClipboard>
                </div>
            
              </div>
          )
        
      })}
     

    </section>
  );
};

export default Modal;
