import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import ProductSection from "../Components/ProductSection";
import PromoBanners from "../Components/PromoBanners";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Features />
      <ProductSection title="SPECIAL OFFER" type="special" />
      <ProductSection title="RECENT PRODUCT" type="recent" />
      <PromoBanners />
      <Footer />
    </>
  );
};

export default Home;
