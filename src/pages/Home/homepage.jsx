import {useState} from 'react'
import {Link } from "react-router-dom";
import "./homepage.css"
import {banner1,luxury1,luxury2,luxury3,men1,men2,men3,women1,women2,women3,brand1,brand2,brand3,brand4,brand5} from "../../Assets/index"


const Home = () => {

    const[display, setDisplay] = useState("men")

    const MenDisplay = () =>   <div className="sliding-cards">
    <div>
    <img src= {men1} alt="" />

    </div>
    <div>
    <img src= {men2} alt="" />

    </div>
    <div>
    <img src= {men3} alt="" />
    </div>
    </div>

    const WomenDisplay = () =>   <div className="sliding-cards">
    <div>
    <img src={women2} alt="" />
    </div>
    <div>
    <img src= {women1} alt="" />
    </div>
    <div>
    <img src= {women3} alt="" />
    </div>
    </div>

    const LuxuryDisplay = () =>   <div className="sliding-cards">
    <div>
    <img src= {luxury1} alt="" />
    </div>
    <div>
    <img src= {luxury2} alt="" />
    </div>
    <div>
    <img src= {luxury3} alt="" />
    </div>
    </div>
  
  return (
    <>              
    {/* ------------------------------------bANNER */}

            <div className="banner-box col-12">
            <Link to="/products" > <img src={banner1} alt=""/></Link>
            </div>

            {/* -----------------------------------SLIDING */}

            <h2>Our Collections</h2>
            <div className="collection-links">
                <p className="link-men" onClick = {() => setDisplay("men")}>Men</p>
                <p className="link-women" onClick = {() => setDisplay("women")}>Women</p>
                <p className="link-luxury" onClick = {() => setDisplay("luxury")}>Luxury</p>
            </div>
            {display === "men" && <MenDisplay/>}
            {display === "women" && <WomenDisplay/>}
            {display === "luxury" && <LuxuryDisplay/>}

         {/* ---------------------------BRANDS------------------------------ */}

    <h2>Brands</h2>
     <div className="brand-container">
         <img src= {brand1} alt="" />
         <img src={brand2} alt="" />
         <img src={brand3} alt="" />
         <img src={brand4} alt="" />
         <img src={brand5} alt="" />
     </div>
    </>
  )
}

export  {Home}