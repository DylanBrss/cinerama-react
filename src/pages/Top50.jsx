import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false";

const Top50 = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleClickNote = () => {
    const sortData = [...movies].sort((a, b) => {
      return a.vote_average < b.vote_average ? 1 : -1;
    });
    setMovies(sortData);
  };
  const handleClickDate = () => {
    const sortData = [...movies].sort((a, b) => {
      return a.release_date < b.release_date ? 1 : -1;
    });
    setMovies(sortData);
  };
  const handleClickNom = () => {
    const sortData = [...movies].sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
    setMovies(sortData);
  };

  return (
    <div>
      <h1 className="title">CINÉRAMA</h1>
      <NavBar />
      <h2 className="text-center mt-5 text-white">Les 50 films les mieux notés</h2>
      <div className="btn_sort mb-5 mt-5">
        <Button className="btn_" onClick={handleClickNote}>
          Tri par note
        </Button>
        <Button className="btn_" onClick={handleClickNom}>
          Tri par nom
        </Button>
        <Button className="btn_" onClick={handleClickDate}>
          Tri par date
        </Button>
      </div>
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

export default Top50;
