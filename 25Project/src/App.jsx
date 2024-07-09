import Accordian from "./components/accordian";
import ImageSlider from "./components/image_slider";
import LoadMore from "./components/load_more";
import QRCodeGenerator from "./components/qr_code";
import RandomColor from "./components/random_color";
import StarRating from "./components/star_rating";
import TreeView from "./components/tree_view";
import menus from "./components/tree_view/data";

export default function App() {
  return <div>
    {/*<Accordian/>

    <RandomColor/>

    <StarRating noOfStars={10}></StarRating>
    
    <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/>

    <LoadMore/>

    <TreeView menus={menus}>*/}
    <QRCodeGenerator/>
    
  </div>
}