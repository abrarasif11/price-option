import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import PriceOptions from "./Component/Navbar/PriceOptions/PriceOptions";

function App() {
  return (
    <>
    <Navbar/>
      <h1 className="text-2xl bg-amber-200 ">Price Option</h1>
     <PriceOptions/>
    </>
  );
}

export default App;
