import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className=''>
            <div className='max-w-[1200px] mx-auto py-[1px]'>
                <div className=' rounded text-[35px] text-[#FAA01B] py-4 px-4'>
                    Sumil Dholakiya
                </div>
                <hr className='mb-5 text-gray-400 w-[98%] m-auto'/>
                <div className="shadow-gray-700 shadow-md rounded-full justify-start">
                    <ul className="flex gap-5 items-center p-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-5 py-1 rounded-full cursor-pointer border border-[#FAA01B] shadow-xl hover:scale-[1.03] transition-transform duration-200 ${isActive ? 'bg-[#FAA01B] font-semibold border-none text-[#0E0E26]' : ''}`}>
                                All
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/frontend"
                                className={({ isActive }) =>
                                    `px-5 py-1 rounded-full cursor-pointer border border-[#FAA01B] shadow-xl hover:scale-[1.03] transition-transform duration-200 ${isActive ? 'bg-[#FAA01B] font-semibold border-none text-[#0E0E26]' : ''}`}>
                                Front end
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/backend"
                                className={({ isActive }) =>
                                    `px-5 py-1 rounded-full cursor-pointer border border-[#FAA01B] shadow-xl hover:scale-[1.03] transition-transform duration-200 ${isActive ? 'bg-[#FAA01B] font-semibold border-none text-[#0E0E26]' : ''}`}>
                                Back end
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/fullstack"
                                className={({ isActive }) =>
                                    `px-5 py-1 rounded-full cursor-pointer border border-[#FAA01B] shadow-xl hover:scale-[1.03] transition-transform duration-200 ${isActive ? 'bg-[#FAA01B] font-semibold border-none text-[#0E0E26]' : ''}`}>
                                Full Stack
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header
