import React from 'react'

const ProjectTag = ({ name, onClick, active }) => {
    const buttonStyles = active 
        ? "text-white border-primary-500"
        : "text-[#ADB7BE] border-slate-600 hover:text-white hover:border-white";
    return (
        <button onClick={() => onClick(name)} className={`${buttonStyles} text-lg md:text-xl rounded-full border-2 px-6 py-3 cursor-pointer`}>
            {name}
        </button>
    )
}

export default ProjectTag
