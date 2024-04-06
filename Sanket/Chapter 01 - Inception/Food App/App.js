import React from "react";
import ReactDOM from "react-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        ></img>
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Login/Logout</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Please enter restaurant names to search"
        ></input>
        <button>Search</button>
      </div>
      <div className="rest-container">
        <Restaurants />
      </div>
    </div>
  );
};

const Restaurants = () => {
  return (
    <div className="rest-cards">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="rest-card">
      <div className="rest-card-img">
        <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg"></img>
      </div>
      <div className="rest-card-details">
        <div className="rest-card-name">Barbeque Nation</div>
        <div className="rest-card-ratings">
          <span>4.1 <img className="rest-card-star-rating" src="https://www.svgrepo.com/show/13695/star.svg"></img> </span>
          <span> (25-30 mins)</span>
        </div>
        <div className="rest-card-cousin">North Indian, Barbecue</div>
        <div className="rest-card-address">Dange Chowk, Pune</div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
