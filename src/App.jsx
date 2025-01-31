const App = () => {
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
        <p>Search</p>
      </div>
    </main>
  );
};

export default App;
