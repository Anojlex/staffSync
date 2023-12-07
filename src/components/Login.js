import React from 'react'


const Login = () => {
    return (
        <div className='flex bg-[rgb(247,247,247)]' >
            <div className='w-[500px] bg-blue-800 h-[700px] '>
                <div className='w-[500px] bg-[#f7f7f7] h-[700px] rounded-tl-full ml-auto  pt-20'>
                    <div className='flex justify-center mt-24'><img className="pl-3 w-24" src="https://img.icons8.com/ios/100/connection-sync.png" alt=''></img></div>
                    <div className='pl-10 flex justify-center text-[#64728c]'><p className='p-2 text-[#64728c] text-6xl'>staffSync</p></div>
                </div>
            </div>
            <div className='flex-col  pt-12 bg-[#f7f7f7] h-[700px] w-full  ' >

                < div className=' w-[380px] h-[450px] bg-white mt-12 flex-col justify-center p-7 rounded-xl ml-auto mr-auto shadow-sm ' >
                    <div className='flex justify-center m-3'><img className=" w-8" src="https://img.icons8.com/ios/100/connection-sync.png" alt=''></img></div>
                    <div className='text-2xl flex justify-center '><p className=' text-[#64728c] font-semibold'>Login</p></div>
                    <div className='mt-5 text-sm text-[#64728c] font-medium'>Email</div>
                    <input className="w-full h-12 mt-1 text-sm pl-4 rounded-3xl border-2" type='email' placeholder='Enter your email ' ></input>
                    <div className='flex justify-between mt-5 text-sm text-[#64728c] font-medium'> <p >Password</p><p className='text-blue-800 cursor-pointer'>Forgot Password?</p></div>
                    <input className="w-full h-12 mt-1 text-sm pl-4 rounded-3xl border-2" type='password' placeholder='Enter your password ' ></input>
                    <button className="w-full h-12 mt-9 bg-blue-800 rounded-3xl text-white text-md hover:bg-blue-900" type='button'>Login</button>
                </div >
            </div >
        </div>
    )
}

export default Login