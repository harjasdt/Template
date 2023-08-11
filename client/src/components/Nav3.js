import React from 'react'
import { useNavigate } from "react-router-dom";

function Nav3() {
    const navigate = useNavigate();
    const loginPage = () => {
        navigate("/login");
      };
  return (
    <div className='hidden lg:flex fixed bottom-[45%] flex-col left-[20px] transform -translate-x-1/2'>
  <a href='/quiz' className='bg-[#637373] hover:bg-[#4e5d5d] transition duration-300 rounded-lg shadow-md p-4 pb-0.5 text-white font-semibold text-lg transform -rotate-90 flex items-center justify-center'>
    Click here to take quiz
  </a>
</div>
  )
}

export default Nav3