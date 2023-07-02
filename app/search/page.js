"use client"
import React from 'react'
import searchStyle from '../../styles/search.module.css'
import Header from '../../components/Header'
// import MusicList from '../components/MusicList'
import Footer from '../../components/Footer'

const page = () => {
  return (
    <div className={searchStyle.searchContainer}>
      <Header/>
      <div className={searchStyle.searchBar}>

      </div>
      {/* <MusicList/> */}
      <Footer/>
    </div>
  )
}

export default page
