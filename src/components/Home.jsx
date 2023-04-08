import React, { useState } from "react";
import Header from "./Header";
import "./Home.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import Row from "./Row";


const apikey = "c3956fa690502e690261cc0370078a3e";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
  const imgUrl = "https://image.tmdb.org/t/p/original";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";



const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setUpcomingMovies(results);
    };
    fetchUpcoming();

    const fetchNowPlayingMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`);
      setNowPlayingMovies(results);
    };
    fetchNowPlayingMovies();

    const fetchPopularmovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
      setPopularMovies(results);
    };
    fetchPopularmovies();

    const fetchTopMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`);
      setTopRatedMovies(results);
    };
    fetchTopMovies();

    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
      setGenre(genres);
    };
    getAllGenre();
  }, []);

  return (
    <>
     <Header />
      <section className="home">
        <div className="banner"  style={{
                    backgroundImage: popularMovies[0]
                        ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}>
               {popularMovies[0] &&  <h1>{popularMovies[0].original_title}</h1>}
               { popularMovies[0] &&  <p>{popularMovies[0].overview}</p>}
               <div>
       <button > <BiPlay /> Play</button>
       
       <button> MyList <AiOutlinePlus /> </button>
               </div>
      </div>
        <Row title={"Upcoming Movies "} arr={upcomingMovies} />
        <Row title={"Now Playing "} arr={nowPlayingMovies} />
        <Row title={"Popular"} arr={popularMovies} />
        <Row title={"Top Rated"} arr={topRatedMovies} />
        <div className="genreBox">
          {
            genre.map((item)=>(
            <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
