import React, { useEffect, useState } from 'react'
import { Route, Routes,useNavigate } from 'react-router-dom'
import "./App.css"
import Container from './components/Container'
import MoviesPage from "./components/MoviesPage"
export default function App() {
  let apiKey = "66744fff52a2b0b6cdc47cb0be4ffe35"
  let navigate = useNavigate();
  let items = []
    let [currItemList, setItemsList] = useState(items)
    let [currMovie,setCurrMovie]=useState(null)
    let [genres,setGenreDetails] = useState(null)
    let [url,setTrailerUrl] = useState(null)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                let res = Array.from(data["results"])
                setItemsList(res)
            }
            )
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`, {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
           setGenreDetails(data)
        }
        )
    }, [])
    useEffect(()=>{
      function getVideos(){
        fetch(`https://api.themoviedb.org/3/movie/${currMovie.id}/videos?api_key=${apiKey}`, {
              method: "GET"
          })
              .then(response => response.json())
              .then(data => {
                  data.results.forEach(ele=>{
                       if(ele.name==="Official Trailer"){
                      setTrailerUrl(`youtube.com/watch?v=${ele.key}`)
                    }
                  })
                  
              }
              )
      }  
        if(currMovie!==null){
          getVideos()
        }
    },[currMovie])
  function handleClick(movie){
    setCurrMovie(movie)
       navigate("/movies-page")
  }
  return (
    <Routes>
        <Route path='/' element={<Container handleClick = {handleClick} itemsList = {currItemList} />}/>
        <Route path="/movies-page" element= {<MoviesPage gen ={genres} movie = {currMovie} url = {url}/>}/>
    </Routes>

  )
}
