import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapore'
          imagen='1'
          cargo='Software Engineer at Amazon'
          empresa='Amazon'
          testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. "
          freecodecamp='freeCodeCamp changed my life.'
        />
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='2'
          cargo='Software Engineer'
          empresa='ChatDesk'
          freecodecamp='freeCodeCamp was the gateway to my career as a software developer. '
          testimonio='The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
        />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='3'
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on "
          freecodecamp='freeCodeCamp gave me the skills'
          testimonio2=" and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
