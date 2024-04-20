import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Head from "../components/Home/Head";

import "./Home.css";
import "./Products.css";
import "./Category.css";
import Categories from "../components/Category/Categories";
import Products from "../components/Products/Products";

const Home = () => {
  const productData1 = [
    {
      id: 1,
      name: "Black Sports Shoes",
      imageSrc: "src/Assets/product-1.jpg",
      category: "Footwear",
      price: 100.0,
    },
    {
      id: 2,
      name: "Headphones",
      imageSrc: "src/Assets/product-5.jpg",
      category: "Electronics",
      price: 230.0,
    },
    {
      id: 3,
      name: "Red White Striped Black Shirt",
      imageSrc: "src/Assets/product-3.jpg",
      category: "Clothing",
      price: 80.0,
    },
    {
      id: 1,
      name: "Dark Blue Full Length Jeans",
      imageSrc: "src/Assets/product-6.jpg",
      category: "Clothing",
      price: 110.0,
    },
    {
      id: 2,
      name: "Navy Blue Formal Pants",
      imageSrc: "src/Assets/product-4.jpg",
      category: "Clothing",
      price: 120.0,
    },
    {
      id: 3,
      name: "Mustard Yellow Full Sleves Top",
      imageSrc: "src/Assets/product-7.jpg",
      category: "Clothing",
      price: 50.0,
    },
  ];
  return (
    <div>
      <Header />
      <Head />
      <Categories />
      <h2 class="title">
        <b>Featured Products</b>
      </h2>
      <Products products={productData1} />
      <Footer />
    </div>
  );
};

export default Home;
