import React from 'react'

const EmployeeCard = () => {
    return (
        <div className='bg-white w-48 h-60 m-3 p-8 rounded-md text-[#64728c] flex-col shadow-md justify-items-center'>
            <p className='m-2'>name</p>
            <img className="w-24 h-24" src='https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg' alt=''></img>
            <p className='m-2'>Designation</p>
            <p className='m-2'>Emp ID:2022</p>
        </div >
    )
}

export default EmployeeCard