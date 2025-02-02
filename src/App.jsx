import Search from "./components/search.jsx";
import { useEffect, useState } from "react";
const App = () => {
  const [SearchT, setSearchT] = useState("");

  useEffect(() => {}, []);

  return (
    <main>
      <div className="design" />

      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />

          <h1>
            {/*eslint-disable-next-line react/no-unescaped-entities*/}
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
        <Search SearchT={SearchT} setSearchT={setSearchT} />
        <h1 className="text-white">{SearchT}</h1>
      </div>
    </main>
  );
};

export default App;
