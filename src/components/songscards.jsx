import React from 'react'

function Songscards() {
  return (
    <div style={{backgroundColor:'#121212'}} className="p-5 my-2b h-[600px] w-full mr-3 rounded-2xl  mt-0 overflow-y-scroll songs-card-container">
    <h2 className="text-white text-2xl font-bold mb-6 pt-6">Browse all</h2>
    
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-3">
      
      <div className=" bg-pink-500 text-white p-4 rounded-lg flex align-baseline justify-between relative h-36 overflow-hidden">
        <h3 className="font-bold text-lg">Music</h3>
        <img
          src="https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?t=st=1738562652~exp=1738566252~hmac=893ad0df97de91d94689004a1bd69e735170f637ea8e4d5bc4769382f89fb7af&w=740" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-32 h-28 object-cover rounded-md absolute top-9 shadow-2xl"
        />
      </div>
      
      <div className="relative bg-teal-600 text-white p-4 rounded-lg flex align-baseline justify-between  h-36 overflow-hidden">
        <h3 className="font-bold text-lg">Podcasts</h3>
        <img
          src="https://img.freepik.com/free-photo/nobody-empty-desk-with-streaming-equipment-broadcast-live-conversation-social-media-no-people-space-with-podcast-station-microphone-headphones-sound-production_482257-42287.jpg?t=st=1738564476~exp=1738568076~hmac=7199053b8b7f2bcb0e5f4d642949b00b5a19a1c6e8404e60f334abc22e6b7753&w=900" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9 shadow-2xs"
        />
      </div>
     
      <div className=" bg-purple-500 text-white p-4 rounded-lg flex align-baseline justify-between relative h-36 overflow-hidden">
        <h3 className="font-bold text-lg">Live Events</h3>
        <img
          src="https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?t=st=1738564242~exp=1738567842~hmac=5a19fc55fad2b43171512ae2235c8d05d8a0ff8c889af9e598663f839e2b1a09&w=1380" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
     
      <div className="relative bg-blue-700 text-white p-4  rounded-lg flex align-baseline justify-between h-36 overflow-hidden">
        <h3 className="font-bold text-lg">Made For You</h3>
        <img
          src="https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?t=st=1738562652~exp=1738566252~hmac=893ad0df97de91d94689004a1bd69e735170f637ea8e4d5bc4769382f89fb7af&w=740" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
     
      <div className=" bg-green-500 text-white p-4   rounded-lg flex align-baseline justify-between relative h-36 overflow-hidden">
        <h3 className="font-bold text-lg">New Releases</h3>
        <img
          src="https://img.freepik.com/free-photo/portrait-man-working-as-musician_23-2151230042.jpg?t=st=1738564618~exp=1738568218~hmac=dafd8ac40398289e932aefc9f09c39ef280669104e4e3e866e92b287f84644b6&w=740" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
      <div className=" bg-pink-500 text-white p-4 rounded-lg flex align-baseline justify-between relative h-36 overflow-hidden">
        <h3 className="font-bold text-lg">Music</h3>
        <img
          src="https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?t=st=1738562652~exp=1738566252~hmac=893ad0df97de91d94689004a1bd69e735170f637ea8e4d5bc4769382f89fb7af&w=740" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
      <div className="relative bg-teal-600 text-white p-4 rounded-lg flex align-baseline justify-between  h-36 overflow-hidden">
        <h3 className="font-bold text-lg">Podcasts</h3>
        <img
          src="https://img.freepik.com/free-photo/nobody-empty-desk-with-streaming-equipment-broadcast-live-conversation-social-media-no-people-space-with-podcast-station-microphone-headphones-sound-production_482257-42287.jpg?t=st=1738564476~exp=1738568076~hmac=7199053b8b7f2bcb0e5f4d642949b00b5a19a1c6e8404e60f334abc22e6b7753&w=900" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
      <div className="relative bg-teal-600 text-white p-4 rounded-lg flex align-baseline justify-between  h-36 overflow-hidden">
        <h3 className="font-bold text-lg">Podcasts</h3>
        <img
          src="https://img.freepik.com/free-photo/nobody-empty-desk-with-streaming-equipment-broadcast-live-conversation-social-media-no-people-space-with-podcast-station-microphone-headphones-sound-production_482257-42287.jpg?t=st=1738564476~exp=1738568076~hmac=7199053b8b7f2bcb0e5f4d642949b00b5a19a1c6e8404e60f334abc22e6b7753&w=900" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
      <div className=" bg-purple-500 text-white p-4 rounded-lg flex align-baseline justify-between relative h-36 overflow-hidden">
        <h3 className="font-bold text-lg">Live Events</h3>
        <img
          src="https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?t=st=1738564242~exp=1738567842~hmac=5a19fc55fad2b43171512ae2235c8d05d8a0ff8c889af9e598663f839e2b1a09&w=1380" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
      <div className="relative bg-blue-700 text-white p-4  rounded-lg flex align-baseline justify-between h-36 overflow-hidden">
        <h3 className="font-bold text-lg">Made For You</h3>
        <img
          src="https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?t=st=1738562652~exp=1738566252~hmac=893ad0df97de91d94689004a1bd69e735170f637ea8e4d5bc4769382f89fb7af&w=740" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
      <div className=" bg-green-500 text-white p-4   rounded-lg flex align-baseline justify-between relative h-36 overflow-hidden">
        <h3 className="font-bold text-lg">New Releases</h3>
        <img
          src="https://img.freepik.com/free-photo/portrait-man-working-as-musician_23-2151230042.jpg?t=st=1738564618~exp=1738568218~hmac=dafd8ac40398289e932aefc9f09c39ef280669104e4e3e866e92b287f84644b6&w=740" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
      <div className=" bg-pink-500 text-white p-4 rounded-lg flex align-baseline justify-between relative h-36 overflow-hidden">
        <h3 className="font-bold text-lg">Music</h3>
        <img
          src="https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?t=st=1738562652~exp=1738566252~hmac=893ad0df97de91d94689004a1bd69e735170f637ea8e4d5bc4769382f89fb7af&w=740" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
      <div className=" bg-green-500 text-white p-4   rounded-lg flex align-baseline justify-between relative h-36 overflow-hidden">
        <h3 className="font-bold text-lg">New Releases</h3>
        <img
          src="https://img.freepik.com/free-photo/portrait-man-working-as-musician_23-2151230042.jpg?t=st=1738564618~exp=1738568218~hmac=dafd8ac40398289e932aefc9f09c39ef280669104e4e3e866e92b287f84644b6&w=740" 
          alt="Music" style={{transform:'rotate(16deg)', right:"-20px"}}
          className=" w-28 h-28 object-cover rounded-md absolute top-9"
        />
      </div>
    </div>
    
  </div>
  
  )
}

export default Songscards