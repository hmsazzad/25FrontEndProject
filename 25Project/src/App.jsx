import Accordian from "./components/accordian";
import RandomColor from "./components/random_color";
import StarRating from "./components/star_rating";

export default function App() {
  return <div>
    {/*<Accordian/>
    <RandomColor/>*/}
    <StarRating noOfStars={10}></StarRating>
  </div>
}