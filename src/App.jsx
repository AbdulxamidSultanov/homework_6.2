
import "./App.css";

function App() {
  let age = 2;
  function CheacAge() {
    if (age > 18) {
      return <p>18 dan katta</p>;
    } else {
      return <p>18 dan katta</p>;
    }
  }
  function randomNumbers(index) {
    const randomNumbers = []
    if(index > 0){
      for(let i = 0; i < index; i++){
        randomNumbers.push(Math.floor(Math.random() * 100))
      }
    }
    return randomNumbers
  }
  
  return (
    <>
      {CheacAge()}
      {age > 18 ? <p>18 dan katta</p> : <p>18dan katta emas</p>}
      {age > 18 && <p>18dan ketta</p>}
      {age <= 18 && <p>18dan ketta emas</p>}
      {
        randomNumbers(10).map(function(number, index) {
          return <li key={index}>{number}</li>
        })
      }
    </>
  );
}

export default App;
