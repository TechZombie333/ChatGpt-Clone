import "./App.css";
import gptLogo from "./assets/chatgptLogo.svg";
import message from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import upgrade from "./assets/rocket.svg";
import addBtn from "./assets/add-30.png";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className="brand">ChatGpt</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="addBtn" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <div className="q1">
              <button className="query">
                <img src={message} alt="query" />
                What is Programming ?
              </button>
            </div>
            <div className="q2">
              <button className="query">
                <img src={message} alt="query" />
                How to Use an API ?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="home" className="listitemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="saved" className="listitemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={upgrade} alt="upgrade" className="listitemsImg" />
            Upgrade
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
