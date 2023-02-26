import First from './components/First';
import './App.css';

function App() {
  return (
    <div className="App">

        <h1>First Component</h1>

        <First firstName="Nima" lastName="Bazofti" Age = {29} favNum={10} favColor="Blue" favGame={["Halo", "Overwatch", "MGSV", "Warcraft 3"]}>
          <h1>Instructor Class</h1>
        </First>
        <First firstName = "Emmanuel" lastName = "Denis" Age = {29} favNum = {33} favColor = "Blue" favGame={["Halo", "Overwatch", "MGSV", "Warcraft 3"]}>
          <h1>Instructor Class</h1>
        </First>
        <First firstName="Stephanie" lastName="Grasso" Age = {28} favNum={11} favColor="Purple" favGame={["Halo", "Overwatch", "MGSV", "Warcraft 3"]}>
          <h1>Instructor Class</h1>
        </First>
        <First firstName="Tuck" lastName="Chan" Age = {33} favNum={4} favColor="Green" favGame={["Halo", "Overwatch", "MGSV", "Warcraft 3"]}>
          <h1>Instructor Class</h1>
        </First>
        <First firstName="Ruben" lastName="Ocasio" Age = {38} favNum={25} favColor="Black" favGame={["Halo", "Overwatch", "MGSV", "Warcraft 3"]}>
          <h1>Instructor Class</h1>
        </First>
        <First firstName="Andres" lastName="Avalos" Age = {32} favNum={3} favColor="Purple" favGame={["Halo", "Overwatch", "MGSV", "Warcraft 3"]}>
          <h1>Instructor Class</h1>
        </First>
        <First firstName="Miguel" lastName="Wagner" Age = {25} favNum={7} favColor="Black" favGame={["Halo", "Overwatch", "MGSV", "Warcraft 3"]}>
          <h1>Instructor Class</h1>
        </First>
        <First firstName="Balakimwe" lastName="Farara" Age = {35} favNum={13} favColor="White" favGame={["Halo", "Overwatch", "MGSV", "Warcraft 3"]}>
          <h1>Instructor Class</h1>
        </First>
        <First firstName="Andriy" lastName="Ostapyuk" Age = {27} favNum={9} favColor="Black" favGame={["Halo", "Overwatch", "MGSV", "Warcraft 3"]}>
          <h1>Instructor Class</h1>
        </First>
        <First firstName="Juleus" lastName="Alquizalas" Age = {31} favNum={6} favColor="Cyan" favGame={["Halo", "Overwatch", "MGSV", "Warcraft 3"]}>
          <h1>Instructor Class</h1>
        </First>

    </div>
  );
}

export default App;
