// Router entry for the app. It maps the home page to the main movie interface
// and the details page to the individual movie view.
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
