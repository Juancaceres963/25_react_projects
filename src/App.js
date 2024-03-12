import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandonColor from "./components/random-color";
import StarRanting from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* Import components */}
      <Accordian />
      <RandonColor />
      <StarRanting noOfStars={8} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
