import Accordian from "./components/accordian";
import ImageSlider from "./components/image_slider";
import RandomColor from "./components/random_color";
import StarRating from "./components/star_rating";

export default function App() {
  return <div>
    {/*<Accordian/>
    <RandomColor/>
    <StarRating noOfStars={10}></StarRating>*/}
    <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/>
  </div>
}