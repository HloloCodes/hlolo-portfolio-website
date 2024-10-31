import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      
      <div className="flex flex-col items-center">
       <h1 className="heading lg:max-w-[45vw]">
        Ready to take <span className="text-pink-700">your</span> digital presence to the next level?
       </h1>
       <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me and and let&apos;s discuss how I can help you achieve your goals.</p>
      <a href="mailto:hlolocollection@gmail.com">
        <MagicButton 
        title="Let&apos;s get in touch"
        icon={FaLocationArrow />}
        position="right"
        />
      </a>
      </div>
      <div>
        <p>Copyright © 2024 Hlolo</p>
      </div>

      <div className="flex items-center md:gap-3 gap-6">
       {socialMedia.map((profile) => (
        <div key={profile.id} className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-pink-950 rounded-lg border border-pink-400">

        </div>
       ))}
      </div>
    </footer>
  )
}

export default Footer
