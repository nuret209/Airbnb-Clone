import "./Style.scss"
import Category from "./components/Category";
import Tab from "./components/Tab";
import globeIcon from "./images/globe-icon.png"
import logo from "./images/logo.png"
import userLogo from "./images/userLogo.png"
import Categories from "./Categories2.json"
import Products from "./Products.json"
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
          <img className="globe" src={globeIcon} />
          <div className="userPanel">
            <i className="fa-solid fa-bars"></i>
            <img className="userLogo" src={userLogo} />
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
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <button className="showMap">
        Show Map <i class="fa-solid fa-map"></i>
      </button>
      <div className="categories">
        <Tab a={0}>{

          Categories.map((category, index) => <Tab.Panel class="category"><Category logo={"icon" + index + ".png"} title={category} /> </Tab.Panel>)
        }</Tab>
        <div className="nextButton"><i class="fa-solid fa-chevron-right"></i></div>
        <div className="filterButton"><img src={require('./images/filterIcon.png')} /> Filter  </div>
        <div className="taxButton">
          <span>Display total before taxes</span>
          <label onClick={() => setChecked(!Checked)} className="checkbox-slider" id={Checked ? "ch" : "nch"}>
          </label>
        </div>
      </div>
      <div className="houses">
        {Products.map((product, index) => <House favorite={product.favorite} title={product.location} date={product.date} rates={product.rates} price={product.price} distance={product.distance} img={'images' + index + '.png'} />

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

          <div className="location">

            <div className="title">Canmore</div>
            <div className="type">Holiday rentals</div>
          </div>
          <div className="location">

            <div className="title">Benalmádena</div>
            <div className="type">House rentals</div>
          </div>
          <div className="location">

            <div className="title">Marbella</div>
            <div className="type">Holiday rentals</div>
          </div>
          <div className="location">

            <div className="title">Mijas</div>
            <div className="type">House rentals</div>
          </div>
          <div className="location">

            <div className="title">Prescott</div>
            <div className="type">Holiday rentals</div>
          </div>
          <div className="location">

            <div className="title">Scottsdale</div>
            <div className="type">House rentals</div>
          </div>
          <div className="location">

            <div className="title">Tuscon</div>
            <div className="type">Flat rentals</div>
          </div>
          <div className="location">

            <div className="title">Jasper</div>
            <div className="type">Cabin rentals</div>
          </div>
          <div className="location">

            <div className="title">Mountain Wiew</div>
            <div className="type">Holiday rentals</div>
          </div>
          <div className="location">

            <div className="title">Divenport</div>
            <div className="type">Cottage rentals</div>
          </div>
          <div className="location">

            <div className="title">Mallatoca</div>
            <div className="type">Holiday rentals</div>
          </div>
          <div className="location">

            <div className="title">Ibiza</div>
            <div className="type">Holiday rentals</div>
          </div>
          <div className="location">

            <div className="title">Anaheim</div>
            <div className="type">Family-freindly rentals</div>
          </div>
          <div className="location">

            <div className="title">Monterey</div>
            <div className="type">Holiday rentals</div>
          </div>
          <div className="location">

            <div className="title">Poso Robles</div>
            <div className="type">Holiday rentals</div>
          </div>
          <div className="location">

            <div className="title">Santa barbara</div>
            <div className="type">Beachfront rentals</div>
          </div>
          <div className="location">

            <div className="title">Sonoma</div>
            <div className="type">Rentals with pools</div>
          </div>
          <div className="location">
            <div className="title">Show More <i class="fa-solid fa-chevron-down"></i></div>
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
            © 2024 Airbnb, Inc.     <i class="fa-solid fa-circle"></i>  Privacy <i class="fa-solid fa-circle"></i> Terms<i class="fa-solid fa-circle"></i> Sitemap <i class="fa-solid fa-circle"></i> Company details
          </div>

          <div className="lastSection">
            <div
            ><img className="globe" src={globeIcon} />
              English (IN)</div>

            <div>
              ₹ INR
            </div>
            <div>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;