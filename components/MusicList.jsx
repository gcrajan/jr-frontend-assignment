import Image from 'next/image'
import React,{useEffect,useState} from 'react'
import musiclistStyle from '../styles/musiclist.module.css'


const MusicList = () => {
    const [data,setData]= useState();
    const url = 'https://spotify23.p.rapidapi.com/artist_related/?id=2w9zwq3AktTeYYMuhMjju8';

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'b43eb6eb00msh8ce335423753d9fp1f7990jsn9b9ffa68ad21',
              'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
          };

        fetch(url,options).then(response=> response.json()).then(response=> {
            setData(response.artists);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    
    console.log(data);
  return (
    <div className={musiclistStyle.musicListContainer}>
      {data && data.map((data)=>(
            <div key={data.id} className={musiclistStyle.musicListDiv}>
                <Image src={data.images[0].url} alt={data.name} height={640} width={640}/>
                <div className={musiclistStyle.musicListDivInfo}>
                    <h1>{data.name}</h1>
                </div>
            </div>
        ))}
    </div>
  )
}

export default MusicList
