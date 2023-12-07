import React from 'react'
import EmployeeCard from './EmployeeCard'

const Content = () => {
    return (
        <div className='flex-col ml-[256px] bg-gray-600 '>
            <div className='fixed bg-white flex  w-full  h-12 shadow-md '>
                <h4 className='ml-14 text-[#474d58] font-medium mt-2 text-md'>Directory</h4>
                <button className='bg-gray-200 shadow-md rounded-3xl  p-1 text-sm mt-1.5 h-8 w-20 ml-[895px]' >Add +</button>

            </div>
            <div className='bg-gray-200   rounded-sm w-full flex flex-wrap p-8 pt-16  '>

                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />

            </div>
        </div >
    )
}

export default Content