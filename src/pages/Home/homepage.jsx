import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import {
  home1,
  home2,
  home3,
  banner1,
  banner2,
  banner3,
  bannerV,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
} from "../../Assets/index";

const Home = () => {
  const HomeCard = ({ image, brandName }) => {
    return (
      <div className="card">
        <div className="card-img-box">
          <img src={image} alt="" />
        </div>
        <p>{brandName}</p>
        <button className="btn">Add To Cart</button>
      </div>
    );
  };

  return (
    <>
      {/* ------------------------------------bANNER */}
      <div className="banner col-12">
        {/*Banner details  */}
        <div className="banner-details">
          <span className="banner__heading">
            <span id="bold__head"> The Perfect Moment </span>Between Past And
            Future
          </span>
          <p className="banner__subhead">
            We'have had a long standing mission of providing unique and
            affordable timepieces to adventurous enthusiasts as yourself
          </p>
          <div className="btn__box">
            <Link to="/store">
              <button className= "explore_btn btn ">Explore Collection</button>
            </Link>
          </div>
        </div>

        {/* Banner Images */}
        <div className="banner__images__box">
          <div className="banner__image">
            <img src={banner3} alt="" />
          </div>

          <div className="banner__image">
            <img src={banner2} alt="" />
          </div>

          <div className="banner__image">
            <img src={banner1} alt="" />
          </div>
        </div>
      </div>
      {/* banner-fastdelivery */}
      <div className="banner-headline col-12">
        <img src={bannerV} alt="" />

        {/* cards */}

        <div className="cards-outer-box">
          <div className="home__headline">Trending Items</div>

          <div className="homecards__box">
            <HomeCard
              image={
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9460049/2019/10/5/c47398e2-72a5-45a4-bcb5-dd58adee9b161570274183766-Roadster-Men-Black-Multi-Function-Analogue-and-Digital-Watch-1.jpg"
              }
              brandName={"Titan"}
            />

            <HomeCard
              image={
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17161252/2022/2/15/535b9721-0249-4f06-8054-7adfdc6462131644916584800EmporioArmaniMenBlackSkeletonDialBlackStainlessSteelStrapsAn1.jpg"
              }
              brandName={"Fossil"}
            />

            <HomeCard
              image={
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17161230/2022/2/15/5e452a7f-fb07-4080-acec-5ae580d4478a1644916949644EmporioArmaniMenBlueDialSilverTonedStainlessSteelBraceletSty1.jpg"
              }
              brandName={"Fastrack"}
            />

            <HomeCard
              image={
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15471534/2021/9/20/6e940c37-6fe0-43ab-8ffd-10b1918bb0b31632137547618-Fastrack-Unisex-Watches-641632137547214-1.jpg"
              }
              brandName={"Titan"}
            />

            <HomeCard
              image={
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15471534/2021/9/20/6e940c37-6fe0-43ab-8ffd-10b1918bb0b31632137547618-Fastrack-Unisex-Watches-641632137547214-1.jpg"
              }
              brandName={"Titan"}
            />

            <HomeCard
              image={
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15471534/2021/9/20/6e940c37-6fe0-43ab-8ffd-10b1918bb0b31632137547618-Fastrack-Unisex-Watches-641632137547214-1.jpg"
              }
              brandName={"Titan"}
            />
          </div>
          <div className="btn__box">
            <button className="btn browse-btn">Browse Now</button>
          </div>
        </div>
      </div>

      {/*-BRANDS-- */}

      <div className="home__banner">
        <img src={home1} alt="" />
      </div>
      <div className="home__banner">
        <img src={home2} alt="" />
      </div>
      {/* ---------------------------------- */}
      <h2 className="home__headline">Brands</h2>
      <div className="brand__box">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
      </div>
      {/* -------------------------- */}
      <div className="home__banner ">
        <img src={home3} alt="" />
      </div>
      {/*  */}
    </>
  );
};

export { Home };
