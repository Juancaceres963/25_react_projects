import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-model-popup/modal-test";
import TabsTest from "./components/custon-tabs/tabs-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QrCodeGenerator from "./components/qr-code-generator";
import RandonColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRanting from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import SearchAutocomplete from "./components/search-autocomplete-with-api"

function App() {
  return (
    <div className="App">
      {/* Import components */}
      {/* <Accordian />
      <RandonColor />
      <StarRanting noOfStars={5} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreData/>
      <TreeView menus={menus}/>
      <QrCodeGenerator/>
      <LightDarkMode/>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
      <TabsTest/>
      <ModalTest/> */}
      {/* <GithubProfileFinder/> */}
      <SearchAutocomplete/>
    </div>
  );
}

export default App;
