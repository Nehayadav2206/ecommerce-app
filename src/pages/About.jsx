import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16' >
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >
        <p>Welcome to Forever, your go-to destination for timeless fashion and effortless style. At Forever, we believe clothing is more than just fabric — it's a reflection of individuality, confidence, and creativity.</p>
        <p>Founded with a passion for quality and a commitment to trend-forward design, we offer a curated selection of clothing that fits every mood, moment, and lifestyle. Whether you're dressing for a casual day out or a special occasion, Forever is here to help you look and feel your best. Join us on this journey where fashion meets purpose — today, tomorrow, and forever.</p>
        <b className='text-gray-800' >Our Mission</b>
        <p>Welcome to Forever, your go-to destination for timeless fashion and effortless style. At Forever, we believe clothing is more than just fabric — it's a reflection of individuality, confidence, and creativity.</p>
        </div>
      </div>

      <div className='text-xl py-4' >
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20' >
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, we ensure every piece meets high standards of quality, comfort, and style. From fabric selection to final packaging, our products undergo strict checks to guarantee durability and customer satisfaction. Your trust is our priority.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Convenience:</b>
          <p className='text-gray-600'>Forever offers a seamless shopping experience with easy navigation, secure payments, and quick delivery—bringing fashion to your doorstep hassle-free.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Forever offers a seamless shopping experience with easy navigation, secure payments, and quick delivery—bringing fashion to your doorstep hassle-free.</p>
        </div>

      </div >
      <NewsletterBox/>
      
    </div>
  )
}

export default About
