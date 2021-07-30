import "./App.css";
import { HelloUniverse } from "./pages/HelloUniverse";
import { HelloWorld } from "./pages/HelloWorld";

export default function App() {
  return (
    <div>
      <HelloWorld></HelloWorld>
      <HelloWorld></HelloWorld>
      <HelloUniverse></HelloUniverse>
      <HelloUniverse></HelloUniverse>
    </div>
  );
}
