import "./App.css";

function App() {
  fetch("http://127.0.0.1:5000/synonym")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <></>;
}

export default App;
