import Header from './Header';
import Flower from './Flower';
import './App.css';

function App() {
  const gardenName = "הגינה הקהילתית";

  return (
    <div>
      <Header />
      <p>ברוכים הבאים לאתר הגינה שלנו</p>
      
      <Flower 
        name="שושנה"
      />
    </div>
  );
}

export default App;