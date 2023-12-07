import React from 'react'
import Sidebar from './Sidebar'
import Content from './DashContent'

const MainContainer = () => {
    return (
        <div className='flex  mt-16  overflow-y-auto fixed top-0 left-0 right-0 bottom-0 overflow-hidden'>
            <Sidebar />
            <Content />
        </div>
    )
}

export default MainContainer