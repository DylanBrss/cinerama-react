import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false";

const Recherche = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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

  const SearchMovie = async (e) => {
    e.preventDefault();
    // console.log("Searching ...");
    try {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&query=${query}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setMovies(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <h1 className="title">CINÉRAMA</h1>
      <NavBar />
      <div className="container" id="search">
        <h2 className="text-center mt-5 mb-3 text-white" id="text_search">
          Rechercher un film
        </h2>
        <Form onSubmit={SearchMovie} id="form">
          <FormControl
            type="search"
            id="form_control"
            className="me-2"
            aria-label="search"
            name="query"
            value={query}
            onChange={handleChange}
          ></FormControl>
          <Button type="submit">Rechercher</Button>
        </Form>
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
              movies.map((movieReq) => (
                <Card key={movieReq.id} {...movieReq} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recherche;
