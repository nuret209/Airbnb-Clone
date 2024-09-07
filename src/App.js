import "./Style.scss"
import Category from "./components/Category";
import LocationsData from "./data/Locations.json"
import Tab from "./components/Tab";
import globeIcon from "./images/globe-icon.png"
import logo from "./images/logo.png"
import userLogo from "./images/userLogo.png"
import CategoriesData from "./data/Categories.json"
import HouseData from "./data/Houses.json"
import { useState } from "react";
import House from "./components/House";
function App() {
  const [Checked, setChecked] = useState(0);
  return (
    <div className="App">
      <div className="topComponent">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="experienceMenu">
          <Tab a={0}>
            <Tab.Panel>Stays</Tab.Panel>
            <Tab.Panel>Experiences</Tab.Panel>
            <Tab.Panel>Online Experiences</Tab.Panel>
          </Tab>
        </div>
        <div className="userComponent">
          <span>Airbnb your home</span>
          <img alt="globe icon" className="globe" src={globeIcon} />
          <div className="userPanel">
            <i className="fa-solid fa-bars"></i>
            <img alt="user logo" className="userLogo" src={userLogo} />
          </div>
        </div>

      </div>
      <div className="searchBar">
        <div className="bar">
          <div className="searchLocation check line">
            <div className="search">
              <div>Where</div>
              <input placeholder="Search destinations" /></div>
          </div>
          <div className="check InDate line">
            <div>Check-In</div>
            <input type="text" placeholder="Add Dates" onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"} />
          </div>
          <div className="check OutDate line">
            <div>Check-Out</div>
            <input type="text" placeholder="Add Dates" onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"} />
          </div>
          <div className="check who">
            <div>Who</div>
            <span>Add guests</span>
          </div>
          <div className="searchIcon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <button className="showMap">
        Show Map <i className="fa-solid fa-map"></i>
      </button>
      <div className="categories">
        <Tab a={0}>{

          CategoriesData.map((category, index) => <Tab.Panel key={index} class="category"><Category logo={"icon" + index + ".png"} title={category} /> </Tab.Panel>)
        }</Tab>
        <div className="nextButton"><i className="fa-solid fa-chevron-right"></i></div>
        <div className="filterButton"><img alt="filter icon" src={require('./images/filterIcon.png')} /> Filter  </div>
        <div className="taxButton">
          <span>Display total before taxes</span>
          <label onClick={() => setChecked(!Checked)} className="checkbox-slider" id={Checked ? "ch" : "nch"}>
          </label>
        </div>
      </div>
      <div className="houses">
        {HouseData.map((house, index) => <House key={index} favorite={house.favorite} title={house.location} date={house.date} rates={house.rates} price={house.price} distance={house.distance} img={'images' + index + '.png'} />

        )}
      </div>
      <div className="load"> <div> Load Continue exploring beachfront homes</div>
        <span> <button>Show More</button></span>
      </div>
      <div className="subContent">
        <span>Inspiration for future getaways</span>
        <div className="titles">
          <Tab a={0}>
            <Tab.Panel>Popular</Tab.Panel>
            <Tab.Panel>Arts & Culture</Tab.Panel>
            <Tab.Panel>Outdors</Tab.Panel>
            <Tab.Panel>Mountains</Tab.Panel>
            <Tab.Panel>Beach</Tab.Panel>
            <Tab.Panel>Unique stays</Tab.Panel>
            <Tab.Panel>Categories</Tab.Panel>
            <Tab.Panel>Things to do</Tab.Panel>
          </Tab>

        </div>
        <div className="locations">
          {LocationsData.map((location, index) => <div key={index} className="location">
            <div className="title">{location.title}</div>
            <div className="type">{location.type}</div>
          </div>)}
          <div className="location">
            <div className="title">Show More <i className="fa-solid fa-chevron-down"></i></div>
          </div>
        </div>
        <div className="helpArea columns">


          <span className="colomn">
            <div className="Title">Support</div>
            <div>Help Centre</div>
            <div>AirCover</div>
            <div>Anti-discrimination</div>
            <div>Disability support</div>
            <div>Cancellation options</div>
            <div>Report neighbourhood concern</div>
          </span>

          <span className="colomn">
            <div className="Title">Hosting</div>
            <div>Airbnb your home</div>
            <div>AirCover for hosts</div>
            <div>Anti-discrimination</div>
            <div>Hosting resources</div>
            <div>Hosting responsibly</div>
          </span>

          <span className="colomn">
            <div className="Title">Airbnb</div>
            <div>Newsroom</div>
            <div>New features</div>
            <div>Carieer</div>
            <div>Investors</div>
            <div>Airbnb.org emergency stays</div>
          </span>
        </div>
        <div className="endBar">
          <div className="firstSection">
            © 2024 Airbnb, Inc.     <i className="fa-solid fa-circle"></i>  Privacy <i className="fa-solid fa-circle"></i> Terms<i className="fa-solid fa-circle"></i> Sitemap <i className="fa-solid fa-circle"></i> Company details
          </div>

          <div className="lastSection">
            <div
            ><img alt="globe icon" className="globe" src={globeIcon} />
              English (IN)</div>

            <div>
              ₹ INR
            </div>
            <div>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-twitter"></i>
              <i className="fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;