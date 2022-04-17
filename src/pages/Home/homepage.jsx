import React from "react"
import {Link } from "react-router-dom";
import "./homepage.css"
import {home1,home2,home3,banner1,banner2,banner3,bannerV,brand1,brand2,brand3,brand4,brand5} from "../../Assets/index"


const Home = () => {



  
  return (
    <>              
    {/* ------------------------------------bANNER */}
              <div className="banner-boxy col-12">
              <div className="banner-text col-6">
              <div className="banner-heading"> <span className="banner-design-text"> The Perfect Moment </span>Between Past And Future</div>
              <div className="banner-para">We'have had a long standing mission of providing unique and affordable  timepieces to adventurous enthusiasts as yourself</div>
             <Link to ="/products"><button className="button primary_btn ">Explore Collection</button></Link>
              </div>
              <div className="banner-images col-6">
                <div className="banner-image-1 col-5">
                  <img src={banner3} alt="" />
                  
                </div>
                <div className="banner-image-1 col-5">
                <img src={banner2} alt="" />

                </div>
                <div className="banner-image-1 col-2">
                <img src={banner1} alt="" />

                </div>
              </div>
                </div>
           {/*---------------------------------------------  */}
        <div className="banner-headline col-12">
          <img src={bannerV} alt="" />
          {/* ------------------------------------------------- */}

          <div className="cards-outer-box">
            <div className="headline">Trending Items</div>
            <div className="cards-box">
            
            <div className="card">
              <div className="card-img-box">
           <img src= "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9460049/2019/10/5/c47398e2-72a5-45a4-bcb5-dd58adee9b161570274183766-Roadster-Men-Black-Multi-Function-Analogue-and-Digital-Watch-1.jpg" alt="" />
           </div>
            <p>Titan</p>
           <button className="home-btn">Add To Cart</button>
           </div>
           <div className="card">
              <div className="card-img-box">
           <img src= "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17161252/2022/2/15/535b9721-0249-4f06-8054-7adfdc6462131644916584800EmporioArmaniMenBlackSkeletonDialBlackStainlessSteelStrapsAn1.jpg" alt="" />
           </div>
            <p>Titan</p>
           <button className="home-btn">Add To Cart</button>
           </div>
           <div className="card">
              <div className="card-img-box">
           <img src= "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17161230/2022/2/15/5e452a7f-fb07-4080-acec-5ae580d4478a1644916949644EmporioArmaniMenBlueDialSilverTonedStainlessSteelBraceletSty1.jpg" alt="" />
           </div>
            <p>Titan</p>
           <button className="home-btn">Add To Cart</button>
           </div>
           <div className="card">
              <div className="card-img-box">
           <img src= "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15471534/2021/9/20/6e940c37-6fe0-43ab-8ffd-10b1918bb0b31632137547618-Fastrack-Unisex-Watches-641632137547214-1.jpg" alt="" />
           </div>
            <p>Titan</p>
           <button className="home-btn">Add To Cart</button>
           </div>
                    
            </div>
            <button className="banner-button">Browse Now</button>

          </div>
        </div>
            {/* -----------------------------------SLIDING */}


         {/* ---------------------------BRANDS------------------------------ */}
         <div className="home-category-banner col-12">
           <img src={home1} alt="" />
         </div>
         <div className="home-category-banner2 col-12">
           <img src={home2} alt="" />
         </div>
         {/* ---------------------------------- */}
         <h2>Brands</h2>
     <div className="brand-container">
         <img src= {brand1} alt="" />
         <img src={brand2} alt="" />
         <img src={brand3} alt="" />
         <img src={brand4} alt="" />
         <img src={brand5} alt="" />
     </div>
     {/* -------------------------- */}
         <div className="home-category-banner2 col-12">
           <img src={home3} alt="" />
         </div>
        {/*  */}

  
    </>
  )
}

export  {Home}