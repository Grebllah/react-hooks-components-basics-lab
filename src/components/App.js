import React from "react";

function NavBar(props) {
  return (
    <nav>
      <a href="#home">{props.text}</a>
    </nav>
  );
}

function Home(props) {
  return (
    <div id={props.id}>
      <h1>{props.text}</h1>
    </div>
  );
}

{/* write an <About> component here */}
  function About(props) {
    return (
      <div id={props.id}>
        <h2>{props.text}</h2>
      </div>
    )
  }


function App() {
  return (
    <div>
      <NavBar text="I am a link."/>
      {/* add the <Home> component here */
        <Home id ="home" text="Home."/>
      }
      {/* add your <About> component here */
        <About id="about" text="About."/>
      }
    </div>
  );
}

export default App;
