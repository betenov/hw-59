import React, {useEffect, useState} from 'react';


const url = "https://v2.jokeapi.dev/joke/Programming"
const Joke = () => {
  const [jokes, setJokes] = useState([{setup:''}]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const jokesFetch = await response.json();
        setJokes(jokesFetch);
        console.log(jokesFetch)
      }

    };
    fetchData().catch(console.error)
  },[]);

  return (
    <div>


    </div>
  );
};

export default Joke;