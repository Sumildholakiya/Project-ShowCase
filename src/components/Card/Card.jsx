import React from 'react'


const Card = ({ project }) => {



    return (
        <>
            <div key={project.id} className="relative flex flex-col justify-between my-[20px] bg-[#0E0E26] shadow-lg shadow-black border border-slate-200 rounded-lg w-96 h-[470px] p-4">
                <div>
                    <div className="relative h-56 mb-4 overflow-hidden text-white rounded-md">
                        <img src={project.image} alt={project.title} className="w-full h-full object-fill" />
                    </div>
                    <h6 className="text-[#FAA01B] text-xl font-semibold mb-2">
                        {project.title}
                    </h6>
                    <p className="text-white leading-normal font-light">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto pt-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center"
                    >
                        <button
                            className="w-full rounded-md bg-slate-800 py-2 px-4 text-sm text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 active:bg-slate-700"
                            type="button"
                        >
                            View Project
                        </button>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Card
