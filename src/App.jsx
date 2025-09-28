import "./App.css";
import LineChart from "./Component/LineChart/LineChart";
import Navbar from "./Component/Navbar/Navbar";
import PriceOptions from "./Component/Navbar/PriceOptions/PriceOptions";

function App() {
  return (
    <>
    <Navbar/>
      <h1 className="text-3xl bg-amber-200 ">Price Option</h1>
     <PriceOptions/>
     <LineChart></LineChart>
    </>
  );
}

export default App;
