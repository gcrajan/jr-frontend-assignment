import React from 'react'
import aboutStyle from '../../styles/about.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const page = () => {
  return (
    <div className={aboutStyle.aboutContainer}>
      <Header/>
      <div className={aboutStyle.aboutDiv}>
        <h1>Music Sansar</h1>
        <p>
        Welcome to our music information site! We are your go-to destination for everything music-related. From artist biographies and album details to song lyrics, we've got you covered. Discover a vast collection of music artists from various genres and eras. Dive into the captivating stories behind albums, explore tracklists, and soak in the album artwork. Delve into the power of lyrics and connect with the emotions and messages within songs. Our dedicated team is committed to providing accurate and up-to-date information, ensuring you have a reliable resource at your fingertips. Join us on this musical journey and enjoy the magic of music!
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default page
