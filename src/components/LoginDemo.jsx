import React from 'react'

// 4:01 hour from the video to put firebase 


const LoginDemo = () => {

    const handleLogin = () => {
      console.log('login')
    }
    
  return (
    <div className='nt-5 p-5'>
      <button className='bg-primary px-4 text-white' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginDemo
