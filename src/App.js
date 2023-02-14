
import './App.css';

function App() {
  return (
<div>
<button class="deleteBtn">Delete Card</button>
<button class="duplicateBtn"> Duplicate Card</button>
<button class="changeColorBtn"> Background Color</button>
<button class="ChangeHeadingBtn">Change Heading</button>

<div class="mainWrapper">
  <h1 id="heading"> Penn State University </h1>
  <img src="https://www.psu.edu/psu-edu-assets/images/shared/psu-mark.svg" width="400" class="image"> </img>
  <h2>Description</h2>
  <p>The Penn State University logo showing the Nittany Lion. </p>
  <button> <a href="https://hax.psu.edu"> Details
  </a> </button> 
</div>
</div>

  );
}
export default App;
