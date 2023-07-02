import Image from 'next/image'
import Background from '../images/bg.png'
import homeMainStyle from '../styles/homeMain.module.css'

const HomeMain = () => {
  return (
    <div className={homeMainStyle.homeContainer}>
        <div className={homeMainStyle.homeContainerInfo}>
          <h1>Music Sansar</h1>
          <p>Sansar for music lovers. Here, you can find all types of music. And also search by artist in search page. Feel free to try.</p>
        </div>
        <Image src={Background} alt='background'/>
      </div>
  )
}

export default HomeMain
