import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QrCodeGenerator from "./components/qr-code-generator";
import RandonColor from "./components/random-color";
import StarRanting from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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
      <LoadMoreData/>
      <TreeView menus={menus}/>
      <QrCodeGenerator/>
    </div>
  );
}

export default App;
