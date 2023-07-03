import Image from 'next/image'
import React,{useEffect,useState} from 'react'
import musiclistStyle from '../styles/musiclist.module.css'


const SearchList = () => {
    const [searchInput,setSearchInput]= useState("");
    const [info,setInfo]= useState();
    const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1';


    useEffect(()=>{
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b43eb6eb00msh8ce335423753d9fp1f7990jsn9b9ffa68ad21',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
        };

        fetch(url,options).then(response=> response.json()).then(response=> {
            setInfo(response.hits);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    console.log(info);
  return (
    <div>
        <div className={musiclistStyle.searchBar}>
            <input type="text" onChange={event=> setSearchInput(event.target.value)} placeholder='eg Justin Bieber'/>
        </div>
        <div className={musiclistStyle.musicListContainer}>
        {info && info.map((data)=>(
                <div key={data.result.id} className={musiclistStyle.musicListDiv}>
                    <Image src={data.result.header_image_thumbnail_url} alt={data.result.artist_names} height={640} width={640} className={musiclistStyle.musicListDivImg}/>
                    <div className={musiclistStyle.musicListDivInfo}>
                        <h1 className={musiclistStyle.musicListDivInfoH1}>{data.result.title}</h1>
                        <h1>{data.result.artist_names}</h1>
                        <a href={data.result.url}>See Lyrics</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SearchList
