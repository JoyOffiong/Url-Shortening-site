import React, { useState } from "react";
import Modal from "./modal";
import axios from "axios";



export const Action = () => {
  const [url, setUrl] = useState("");

  const [shortLink, setShortLink] = useState("");
  
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
      setShortLink(res);
      setUrl("");
      console.log(url)
      setShowModal(true)
      
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="phone: w-4/5 mx-auto items-center z-[10] relative laptop:w-3/5" >
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

    
  {showModal ? (<Modal shortLink={shortLink}
      showModal={showModal}
      setShowModal={setShowModal}/>): true}



      <div>
      </div>
    </div>
  );
};
