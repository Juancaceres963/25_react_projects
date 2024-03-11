import './App.css';
import Accordian from './components/accordian';
import RandonColor from './components/random-color';
import StarRanting from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Import components */}
      <Accordian/>
      <RandonColor/>
      <StarRanting noOfStars={10}/>
    </div>
  );
}

export default App;
