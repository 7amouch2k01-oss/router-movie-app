import { Routes, Route } from "react-router-dom";
import App from "../App";
import Details from "./Details";
const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path ="/movie/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
};

export default Home;
