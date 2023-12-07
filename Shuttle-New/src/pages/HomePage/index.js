import React, { useEffect } from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../../components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Carousel from '../../components/Carousel';
import NewProducts from "../../components/NewArrivals/index"
import "./home.css"

const HomePage = () => {
  useEffect(() => {
    document.title = 'Shuttle | Home';
  }, []);

  return (
    <main>
      <Carousel />
      {/* <Hero /> */}
      <FeaturedProducts />

      <FeaturedProducts />

      {/* <NewProducts /> */}
      {/* <FeaturedProducts /> */}
      <div id="categories">
        <h2 className="text-center">Shop by Category</h2>
        <div className="grid--container">
          <Link to="/products" className="grid--item item1"><div></div></Link>
          <Link to="/products" className="grid--item item2"><div></div></Link>
          <Link to="/products" className="grid--item item3"><div></div></Link>
          <Link to="/products" className="grid--item item4"><div></div></Link>
        </div>
      </div>
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
