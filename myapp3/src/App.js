import './App.css';

export default function App() {
  return (
    <div>
      <HelloWorld></HelloWorld>
      <HelloWorld></HelloWorld>
      <HelloWorld></HelloWorld>
      <HelloUniverse></HelloUniverse>
      <HelloUniverse></HelloUniverse>

      


    </div>
  );
}

//export default App;

// User defined tag::component......<helloWorld/>
//use pascal case for userdefined tags
function HelloWorld() {
  return <h1>Hello World</h1>
}

function HelloUniverse() {
  return <h1>Hello Universe</h1>
}
