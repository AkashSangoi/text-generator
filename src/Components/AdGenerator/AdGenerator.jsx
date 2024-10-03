import React, { useEffect, useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import  {API_KEY} from './env.sample';

function AdGenerator() {
  const [text, setText] = useState("");
  const [out, setOut] = useState("");
  const [copy, setCopy] = useState(false);
console.log(API_KEY);
  const handleSubmit = async () => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(text);
    const data = result.response.text().trim().split('^[*]');
    console.log(data);

    setOut(data);
    setText("");
  };

  const textRef = useRef();
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(out);
    if (textRef.current !== null) out.current.select();
  };
  useEffect(() => {}, [text]);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center p-4">
        <div className="w-full flex justify-center mb-6">
          <div className="  lg:w-1/2 md:w-3/4 sm:w-full p-4 text-white text-justify max-h-96 h-96 overflow-auto -webkit-scrollbar:none" ref={textRef}>
            {out || "Hi 👋🏻 How are you ? "}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:w-1/2 md:w-3/4 sm:w-full mb-6">
  <input 
    onChange={(e) => setText(e.target.value)} 
    value={text} 
    className="text-sm sm:text-base md:text-lg lg:text-2xl lg:px-4 md:px-3 sm:px-2 px-1 lg:py-2 md:py-2 sm:py-1 py-1 text-gray-500 w-full lg:h-12 md:h-10 sm:h-8 h-6 rounded-l-full   outline-none focus:shadow-md focus:shadow-white focus:outline-2 focus:ring-2" 
    type="text" 
    placeholder="Enter the prompt" 
  />
  <button 
    onClick={handleSubmit} 
    className="text-sm sm:text-base  px-2 sm:px-3 md:px-4 lg:px-5  sm:h-8 md:h-10 lg:h-12 font-normal sm:font-semibold lg:font-bold border rounded-r-full   text-white bg-blue-700 hover:bg-black transition duration-300 ease-in-out"
  >
    Generate
  </button>
</div>

        <button onClick={copyToClipboard} className=" hover:shadow-lg hover:shadow-white rounded-full w-20 bg-blue-600 text-white px-3 py-2 font-semibold">
          copytext
        </button>
      </div>
    </>
  );
}

export default AdGenerator;
