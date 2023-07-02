"use client"
import pageStyle from '../styles/page.module.css'
import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
import MusicList from '../components/MusicList'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className={pageStyle.homeContainer}>
      <Header/>
      <HomeMain/>
      <div className={pageStyle.pageDiv}>
        <p>Artist List</p>
        <h1>Some of the list of artist are:</h1>
      </div>
      <MusicList/>
      <Footer/>
    </div>
  );
}
