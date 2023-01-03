import React, { useState } from "react";
import Modal from "./modal";
import axios from "axios";
// import CopyToClipboard from "react-copy-to-clipboard";


export const Action = () => {
const [url, setUrl] = useState("");
// const [longLink, setLongLink] = useState('');


  // const [shortLink, setShortLink] = useState('');
  const [links , setLinks ] = useState(JSON.parse(localStorage.getItem ('res')) || [])
const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  
  async function sendURL() {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      console.log(response, "it worked");
      
      let res = response.data.result.full_short_link2;
     
    const twolinks = {
      'link1': res,
      'link2': url
    }
    const pushedLinks = links.push(twolinks)
    // setLinks( pushedLinks)
    
  localStorage.setItem('res', JSON.stringify(links)) 
  // localStorage.setItem('url', JSON.stringify(url))

  
      fetchLink()
     
    } catch (error) {
      console.log(error);
    }
  }

  const fetchLink=()=>{
    
  const fetchedLinks=JSON.parse(localStorage.getItem('res')) 
 setLinks(fetchedLinks)
 console.log(links)

    // const link1= localStorage.getItem('url')
    // const link2= localStorage.getItem('res')

// console.log(shortLink)
      setShowModal(true)
  }

  return (
    <div className="phone: w-4/5 mx-auto items-center z-[10] relative laptop:w-4/5" >
      <div className="phone:mx-auto flex flex-col p-5 justify-between
       rounded items-center laptop:flex-row "
      style={{backgroundColor:'#3a3053', gap:"15px"}}>
        <div className="border-solid rounded w-full tablet:mr-2">
          <input
            type="url"
            id="url"
            name="url"
            onChange={handleChange}
            placeholder="Shorten Your Link Here"
            className="border-solid rounded py-2 px-5 bg-sky-50 w-full"
          />
        </div>
        <div className="phone:rounded bg-cyan-400 mx-auto w-full laptop:w-1/5">
        <button
            className="phone: py-2 laptop:w-1.5/5"
            onClick={() => sendURL()}
          >
            Shorten It!
          </button>
        </div>
       
      </div>


{showModal ? ( <Modal 
links={links}
// longLink={longLink}
//  showModal ={showModal}
  setShowModal = {setShowModal}
 /> 
  ): null}


      <div>
      </div>
    </div>
  );
};
