import "./style.scss";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="title">CINÉRAMA</h1>
      <NavBar />
      <h2 className="text-center mt-5 mb-5 text-white">Vos films préférés sont sur Cinérama !</h2>
      <div className="container cardList">
        <div className="grid">
          {movies &&
            movies.map((movieReq) => <Card key={movieReq.id} {...movieReq} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
