"use client"
import React from 'react'
import searchStyle from '../../styles/search.module.css'
import Header from '../../components/Header'
import SearchList from '../../components/SearchList'
import Footer from '../../components/Footer'

const page = () => {
  return (
    <div className={searchStyle.searchContainer}>
      <Header/>
      <SearchList/>
      <Footer/>
    </div>
  )
}

export default page
