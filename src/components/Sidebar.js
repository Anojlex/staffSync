import React from 'react'

const Sidebar = () => {
    return (
        <div className='bg-blue-900 w-64 mt-2 rounded-tr-xl  text-white  fixed left-0  h-full'>
            <ul className='font-sans subpixel-antialiased'>
                <li className='text-4xl flex p-2 mt-4 mb-4'><img className="p-1 w-16" src="https://img.icons8.com/ios-filled/100/FFFFFF/connection-sync.png" alt=''></img><p className='p-2 text-[#f7444e]'>staffSync</p></li>
                <li className=" h-14 p-3">Employee Management</li>
                <li className=' h-14 p-3'>Leave Management</li>
                <li className=' h-14 p-3'>Attendance</li>
                <li className=' h-14 p-3'>Payroll</li>
                <li className=' h-14 p-3'>Connect</li>
            </ul>
        </div >
    )
}

export default Sidebar