import Header from './Header';
import Flower from './Flower';
import './App.css';

function App() {
  const gardenName = "הגינה הקהילתית";
const flowers=[{name:'שושנה',code: 123},{name: 'ורד',code: 125}]
  return (
    <div>
      <Header />
      <p>ברוכים הבאים לאתר הגינה שלנו</p>
      
      <Flower 
        name="שושנה"
        petalColor="pink"
        centerColor="yellow"
      />
      <Flower 
        name="גבעול"
        petalColor="yellow"
        centerColor="orange"
      />
      <Flower 
        name="סיגלית"
      />

      <ul> {flowers.map(f=><Flower name={f.name} > </Flower>)  } </ul>
    </div>
  );
}

export default App;