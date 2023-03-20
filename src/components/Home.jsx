import React from "react";
import "./css/home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71yJSFB2U8L._SX3000_.jpg"
          alt="background"
          width="100%"
        />

        <div className="home_row">
          <Product
            id="1"
            title="the lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/71O4TajVyvL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="djvodsjvomvm vodjf jskd dhvo xhjcvodsh hfihdig fdjgosdgfn nfvk jgojo;vjf"
            price={239.0}
            image="https://m.media-amazon.com/images/I/61MkszVn2gL._AC_SY200_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Shop activity trackers and smartwatches"
            price={500.0}
            image="https://m.media-amazon.com/images/I/51og2N-6qiS._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Propane Melting Furnace Kits, 6kg Graphite Crucible, Up to 2372℉, Made of Stainless Steel Barrel, Smelt Metal,with..."
            price={250.0}
            image="https://m.media-amazon.com/images/I/71+oAEyk4-L._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Premium Bamboo Silverware Organizer - Expandable Kitchen Drawer Organizer and Utensil Organizer, Perfect Size Cutlery..."
            price={780.0}
            image="https://m.media-amazon.com/images/I/81Z9LBz1C4L._AC_SY200_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="We Will Lead Africa: VOLUME THREE: Belonging, Beloving, Becoming"
            price={150.0}
            image="https://m.media-amazon.com/images/I/61CzVniTKzL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
