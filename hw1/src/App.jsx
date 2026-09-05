import Header from './Header';
import './App.css';

function App() {
  const gardenName = "הגינה הקהילתית";

  return (
    <div>
      <Header />
      <p>ברוכים הבאים לאתר הגינה שלנו</p>
      
      {/* כאן אפשר להוסיף בהמשך קומפוננטות או אלמנטים נוספים */}
    </div>
  );
}

export default App;