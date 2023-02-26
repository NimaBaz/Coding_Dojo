import First from './components/First';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>First Component</h1>
      <First firstName = "Emmanuel" lastName = "Denis" favNum = {33} favColor = "Blue" favGame = "MGSV">
        <h1>Instructor Class</h1>
      </First>
      <First firstName="Nima" lastName="Bazofti" favNum={10} favColor="Blue" favGame="Halo">
        <h1>Instructor Class</h1>
      </First>
      <First firstName="Stephanie" lastName="Grasso" favNum={11} favColor="Purple" favGame="Stardew Valley">
        <h1>Instructor Class</h1>
      </First>
      <First firstName="Tuck" lastName="Chan" favNum={4} favColor="Green" favGame="Warcraft 3">
        <h1>Instructor Class</h1>
      </First>
      <First firstName="Ruben" lastName="Ocasio" favNum={25} favColor="Black" favGame="Overwatch">
        <h1>Instructor Class</h1>
      </First>
      <First firstName="Andres" lastName="Avalos" favNum={3} favColor="Purple" favGame="Guilty Gear">
        <h1>Instructor Class</h1>
      </First>
      <First firstName="Miguel" lastName="Wagner" favNum={7} favColor="Black" favGame="Hogwarts Legacy">
        <h1>Instructor Class</h1>
      </First>
      <First firstName="Balakimwe" lastName="Farara" favNum={13} favColor="White" favGame="Domino">
        <h1>Instructor Class</h1>
      </First>
      <First firstName="Andriy" lastName="Ostapyuk" favNum={9} favColor="Black" favGame="Elden Ring">
        <h1>Instructor Class</h1>
      </First>
      <First firstName="Juleus" lastName="Alquizalas" favNum={6} favColor="Cyan" favGame="Warcraft">
        <h1>Instructor Class</h1>
      </First>
    </div>
  );
}

export default App;
