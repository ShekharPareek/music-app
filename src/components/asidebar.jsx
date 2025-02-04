import React from 'react'

function Asidebar() {
  return (
    <div style={{backgroundColor:'#121212', width:'25%'}} className='playlist-section p-5 mx-3 my-2 h-[600px] rounded-2xl mt-0'>
        <div className='playlist-bar text-white flex justify-between items-center'>
            <div className='w-6 h-6 text-white'>
            <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE e-9541-icon fill-white" viewBox="0 0 24 24"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>

            </div>
            <div>Your library</div>
        </div>
    </div>
  )
}

export default Asidebar