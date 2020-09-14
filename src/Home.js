import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Product.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          class="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="134243443"
            title="The lean Startup"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Micer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61hNBQpikbL._AC_SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="2379777"
            title="Samsung 32-Inch UR590C UHD 4K Curved Gaming Monitor (LU32R590CWNXZA) – 60Hz Refresh, Widescreen Computer Monitor, 3840 x 2160p Resolution, 4ms Response, Game Mode, HDMI, Dark Blue Gray"
            price={449.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91BlpmYWl-L._AC_SL1500_.jpg"
          />
          <Product
            id="34534566"
            title="Amazon Echo (3rd generation) |  Smart speaker with Alexa, Charcoal Fabric"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61Gob-M3snL._AC_SL1000_.jpg"
          />
          <Product
            id="9697697"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Space Gray (4th Generation)"
            price={(1, 649.0)}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="23434534"
            title="Wyze Cam Pan 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, White - WYZECP1"
            price={37.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
