import logo from './GuitarLogo.jpg';
import fret from './fretboard.png';
import electric from './electric.jpg';
import './App.css';
import Chord from 'react-js-guitar-chords';
import GuitarChord from 'react-guitar-chords';

<head>
    <title>Guitarly</title>
</head>
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Guitarly</h1>
        <img src={logo} className="logo" alt="logo" />
        <img src={electric} className='electric' alt='electric'/>
      </header>
    <article>
      <h3>Welcome to Guitarly!</h3>
        <p>The idea of learning how to play the guitar can be very intimidating, especially if this is the first musical instrument you’re learning how to play. It’s totally normal for you to have a lot of questions about the entire process, but we’re here to help push you in the right direction on your Guitarly journey! </p>
        <p>The options for guitars targeted towards beginners is almost endless, and considering that no guitar plays the same, narrowing down what type of guitar you want to purchase can be a difficult choice to make. The type/brand/make/model of guitar that you purchase will have a huge influence on your development and progress as a musician, as there are some guitars out there that are easy to play and there are other guitars that are more difficult to play.</p>
    </article>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    <body className="Major">
    <div className='Maj'><h2>Major Chords</h2>
        <GuitarChord frets={['x',3,2,0,1,0]} chordName="C Major"/>
        <GuitarChord frets={['x',0,2,2,2,0]} chordName="A Major"/>
        <GuitarChord frets={[0,2,2,1,0,0]} chordName="E Major"/>
        <GuitarChord frets={[3,2,0,0,0,3]} chordName="G Major"/>
        <GuitarChord frets={[1,3,3,2,1,1]} chordName="F Major"/>
        <GuitarChord frets={['x','x',0,2,3,2]} chordName="D Major"/>
        <GuitarChord frets={['x',2,4,4,4,2]} chordName="B Major"/>
        </div>
      </body>
    <body className='Sharp'>
    <div className='Sha'><h2>Sharp Chords</h2>
    <GuitarChord frets={['x',4,6,6,6,4]} chordName="C Sharp"/>
    <GuitarChord frets={['x',1,3,3,3,1]} chordName="A Sharp"/>
    <GuitarChord frets={[4,6,6,5,6,6]} chordName="G Sharp"/>
    <GuitarChord frets={[2,4,4,3,2,2]} chordName="F Sharp"/>
    <GuitarChord frets={['x','x',1,3,4,3]} chordName="D Sharp"/>
    </div>
    <img src={fret} className="fret" alt="fret"></img>
    </body>
    <body className='Minor'>
    <div className='Min'><h2>Minor Chords</h2>
        <GuitarChord frets={['x',3,5,5,4,3]} chordName="C Minor"/>
        <GuitarChord frets={['x',0,2,2,1,0]} chordName="A Minor"/>
        <GuitarChord frets={[0,2,2,0,0,0]} chordName="E Minor"/>
        <GuitarChord frets={[3,5,5,3,3,3]} chordName="G Minor"/>
        <GuitarChord frets={[1,3,3,1,1,1]} chordName="F Minor"/>
        <GuitarChord frets={['x','x',0,2,3,1]} chordName="D Minor"/>
        <GuitarChord frets={['x',2,4,4,3,2]} chordName="B Minor"/>
    </div>
    </body>
  </div>
</div>
    
  );
}

export default App;
