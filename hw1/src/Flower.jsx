function Flower(props) {
     const flowerName = props.name || "חמנייה";
    const handleClick = () => {
    alert(`אני פרח מסוג ${flowerName}`);
  };
  const petalColor = props.petalColor ;
  const centerColor = props.centerColor ;

  const flowerStyle = {
    backgroundColor: petalColor,
    color: centerColor,
    padding: '20px',
    margin: '20px auto',
    borderRadius: '12px',
    textAlign: 'center',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    cursor: 'pointer'
  };

  return (
    <div style={flowerStyle} onClick={handleClick}>
      <h2>{flowerName}</h2>
      <p>לחץ עלי כדי ללמוד על הפרח</p>
    </div>
  );
}

export default Flower;