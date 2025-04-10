import React from "react";

function NavBar() {
  return (
    <nav>
      <h1>NavBar</h1>
      <h1>Home</h1>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
     <Home/>
     <About/>
    </div>
  );
}

export default App;
