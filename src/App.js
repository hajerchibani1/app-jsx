import logo from "./logo.svg";
import "./App.css";
import "./STYLE.css";
import imageInSrc from "./imageInSrc.jpg";
import myVideo from "./myVideo.mp4";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="titlered">Hajer chibani</h1>
        <img src={imageInSrc} alt="myimage" />
        <img src="imageInPublic.jpg" alt="myimage" />
      </div>
      <video width="320" height="240" controls>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
