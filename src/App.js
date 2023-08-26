import React, { useEffect } from "react";
const KEY = "668f504b";
const url = `http://www.omdbapi.com/?apikey=${KEY}&s=kid`;

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div>App</div>;
};

export default App;
