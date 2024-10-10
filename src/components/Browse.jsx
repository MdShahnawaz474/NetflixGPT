import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/validate'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovie } from '../utils/movieSlice'
// import { data } from 'autoprefixer'
const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies= async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovie(json.results));
    
  };

  useEffect(()=>{
   getNowPlayingMovies();
  },[])
  return (
    <div className='flex justify-between'>
      <Header/>
      </div>

  )
}

export default Browse