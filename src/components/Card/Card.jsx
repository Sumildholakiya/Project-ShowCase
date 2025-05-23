import React from 'react'


const Card = ({ project }) => {



    return (
        <>
            <div key={project.id} className="relative flex flex-col my-[20px] bg-[#0E0E26] shadow-lg shadow-black border border-slate-200 rounded-lg w-96">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img src={project.image} alt={project.title} className='w-full h-full' />
                </div>
                <div className="p-4">
                    <div className="flex items-center mb-2">
                        <h6 className="text-[#FAA01B] text-xl font-semibold">
                            {project.title}
                        </h6>
                    </div>
                    <p className="text-white leading-normal font-light">
                        {project.description}
                    </p>
                </div>

                <div className="px-4 pb-4 pt-0 mt-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <button className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            View Project
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Card
