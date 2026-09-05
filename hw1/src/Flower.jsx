function Flower() {
  // המשתנים עם ערכים לבחירתך
  const flowerName = "חמנייה";
  const petalColor = "green"; 
  const centerColor = "red"; 

  const flowerStyle = {
    backgroundColor: petalColor,
    color: centerColor,
    padding: '20px',
    margin: '20px auto',
    borderRadius: '12px',
    textAlign: 'center',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={flowerStyle}>
      <h2>{flowerName}</h2>
      <p>צבע עלי הכותרת: {petalColor}</p>
      <p>צבע העלה המרכזי: {centerColor}</p>
    </div>
  );
}

export default Flower;