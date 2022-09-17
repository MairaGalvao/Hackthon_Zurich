import "./App.css";

function App() {
  const onClickSynonym = () => {
    fetch("http://127.0.0.1:5000/synonym?input=pretty", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <button onClick={onClickSynonym}>synonym</button>
    </>
  );
}

export default App;
