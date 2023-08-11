import React from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from '../assets/previous.png';
import Logo from '../assets/logo.png';
import Learning from '../assets/learning.png';
import Dashboard1 from '../assets/dashboard.png';
import Portfolio from '../assets/portfolio.png';
import { useState } from 'react';

export default function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', src: Dashboard1, link: '/dashboard' },
    { title: 'View Courses', src: Learning, gap: false, link: '/dashboard/courses' },
    { title: 'View Portfolio', src: Portfolio, gap: false, link: '/dashboard/portfolio' },
    { title: 'Leaderboard', src: Learning, gap: false, link: '/dashboard/leaderboard' },
  ];

  return (
    
      <div
        className={` ${
          open ? 'w-60' : 'w-[30px] '
        } bg-[#536162] h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={LeftArrow}
          alt="A"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#424642]
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            alt="MT"
            className={`cursor-pointer duration-500 h-10 w-10 ${
              open && 'rotate-[360deg] ' 
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Finesse360
          </h1>
        </div>
        <ul className={`pt-6 ${!open && 'w-10' }`}>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#424642] text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <Link to={Menu.link} className="flex items-center">
                <img src={Menu.src} className={`w-5 mr-2 ${
              !open && 'w-5 h-5'
            }`}  alt="" />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    
  );
}
