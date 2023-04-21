import logo from './GuitarLogo.jpg';
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
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
  
      
    <div className="Major"><h2>Major Guitar Chords</h2>
        <GuitarChord frets={['x',3,2,0,1,0]} chordName="C Major"/>
        <GuitarChord frets={['x',0,2,2,2,0]} chordName="A Major"/>
        <GuitarChord frets={[0,2,2,1,0,0]} chordName="E Major"/>
        <GuitarChord frets={[3,2,0,0,0,3]} chordName="G Major"/>
        <GuitarChord frets={[1,3,3,2,1,1]} chordName="F Major"/>
        <GuitarChord frets={['x','x',0,2,3,2]} chordName="D Major"/>
        <GuitarChord frets={['x',2,4,4,4,2]} chordName="B Major"/>
        </div>
    <div><h2>Minor Guitar Chords</h2>
        <GuitarChord frets={['x',3,5,5,4,3]} chordName="C Minor"/>
        <GuitarChord frets={['x',0,2,2,1,0]} chordName="A Minor"/>
        <GuitarChord frets={[0,2,2,0,0,0]} chordName="E Minor"/>
        <GuitarChord frets={[3,5,5,3,3,3]} chordName="G Minor"/>
        <GuitarChord frets={[1,3,3,1,1,1]} chordName="F Minor"/>
        <GuitarChord frets={['x','x',0,2,3,1]} chordName="D Minor"/>
        <GuitarChord frets={['x',2,4,4,3,2]} chordName="B Minor"/>
    </div>
    <div><h2>Sharp Guitar Chords</h2>
    <GuitarChord frets={['x',4,6,6,6,4]} chordName="C Sharp"/>
    <GuitarChord frets={['x',1,3,3,3,1]} chordName="A Sharp"/>
    
    <GuitarChord frets={[2,4,4,3,2,2]} chordName="F Sharp"/>
    </div>
  </div>
    
        
        
        
     </header>
      
    </div>
    
  );
}

export default App;
