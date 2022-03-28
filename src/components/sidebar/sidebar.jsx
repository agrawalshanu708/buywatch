import React from 'react'
import { useFilter } from '../../context'
import "./sidebar.css"
import {MdKeyboardArrowRight,MdKeyboardArrowDown} from "react-icons/md"

const Sidebar = () => {

    const{state,dispatch} =useFilter();
    const{sortby,gender,categoryName,brandName,discount} = state;
    const{casual,formal,digital,sports} = categoryName;
    const{apple,fossil,fastrack,titan} = brandName;

  return (
    <>
    <div className="col-2 filter-container">
   {/* <div className="filter-header-box">
 
  <button className="clear-btn"onClick = {() => dispatch({type:'CLEAR'})}>Clear</button>
  </div> */}
 
  <div className="accordian-item">
  <div className="accordian-tap">
    <p>Categories</p>
    <MdKeyboardArrowRight className="arrow-right" size = "2rem"/>
    <MdKeyboardArrowDown className="arrow-down" size = "2rem"/>
  </div> 
    <div className="accordian-answer">

  
  
                <input 
                id='men'
                class="radiobox"
                  type="radio"
                  name="gender"
                  value="Men"
                  onChange={() => dispatch({type:"GENDER",payload:"SHOW_MEN"})}
                />
              <label For='men'>Men</label>
                <input
                  id='women'
                   class="radiobox"
                  type="radio"
                  name="gender"
                  value="Women"
                  onChange={() => dispatch({type:"GENDER",payload:"SHOW_WOMEN"})}
                />
                <label for="women">Women</label>
          
                <input
                id='kid'
                  class="radiobox"
                  type="radio"
                  name="gender"
                  value="kids"
                  onChange={() => dispatch({type:"GENDER",payload:"SHOW_KID"})}

                />
              <label for="kid">Kid</label>
  

</div> 
</div>
<hr/>

  {/* ---------------------------------------------------------------------- */}
  <div className="accordian-item">
  <div className="accordian-tap">
    <p>Filter by Style</p>
    <MdKeyboardArrowRight className="arrow-right" size = "2rem"/>
    <MdKeyboardArrowDown className="arrow-down" size = "2rem"/>
  </div> 
    <div className="accordian-answer">

         
        
         <div>
           <input class="check" type="checkbox" 
           checked={casual}
           onChange = {(e) => {
           dispatch({type:'SHOW_CASUAL'})
            }}
           />
           <label>Casual</label>
         </div>
         <div>
           <input class="check" type="checkbox" 
           checked={formal}
           onChange = {(e) => dispatch({type:'SHOW_FORMAL'})}
           />
           <label> Formal </label>
         </div>
         <div>
           <input class="check" type="checkbox"
           checked={digital}
           onChange = {(e) => dispatch({type:'SHOW_DIGITAL'})}
           />
           <label>Smart Watches</label>
         </div>
         <div>
           <input class="check" type="checkbox" 
           checked={sports}
           onChange = {(e) => {
           dispatch({type:"SHOW_SPORTS"})
            }}
           />
           <label>Sports</label>
         </div>
         </div>
         </div>
    
          <hr/>
          {/* ---------------------------------------------- */}
          <div className="accordian-item">
  <div className="accordian-tap">
    <p>Filter By Brand</p>
    <MdKeyboardArrowRight className="arrow-right" size = "2rem"/>
    <MdKeyboardArrowDown className="arrow-down" size = "2rem"/>
  </div> 
    <div className="accordian-answer">

           
              <div>
                <input class="check" type="checkbox"
                checked={apple}
                onChange = {(e) => {
                dispatch({type:"SHOW_APPLE"})
                 }}
                />
                <label>Apple</label>
              </div>
              <div>
                <input class="check" type="checkbox"
                    checked={fossil}
                    onChange = {(e) => {
                    dispatch({type:"SHOW_FOSSIL"})
                    }}
                />
                <label>Fossil</label>
              </div>
              <div>
                <input class="check" type="checkbox"
                    checked={fastrack}
                    onChange = {(e) => {
                    dispatch({type:"SHOW_FASTRACK"})
                    }}
                />
                <label>Fastrack</label>
              </div>
              <div>
                <input class="check" type="checkbox"
                      checked={titan}
                      onChange = {(e) => {
                      dispatch({type:"SHOW_TITAN"})
                      }}
                />
                <label>Titan</label>
              </div>
              <p>20+ More</p>  
              </div>
              </div> 
               <hr/>
  {/* ------------------------------------------------------------------------------ */}
  <div className="accordian-item">
  <div className="accordian-tap">
    <p>Filter By Discount</p>
    <MdKeyboardArrowRight className="arrow-right" size = "2rem"/>
    <MdKeyboardArrowDown className="arrow-down" size = "2rem"/>
  </div> 
    <div className="accordian-answer">
            
                <div>
                  <input className = "radio" type="radio" value="10" name="discount" 
                  onChange = {() => dispatch({type:"DISCOUNT" ,payload: "ABOVE_10"})}
                  />
                  <label>10% and above</label>
                </div>
                <div>
                  <input className = "radio" type="radio" value="20" name="discount"
                  onChange = {() => dispatch({type:"DISCOUNT" ,payload: "ABOVE_20"})}
                  
                  />
                  <label>20% and above</label>
                </div>
                <div>
                  <input className = "radio" type="radio" value="30" name="discount"
                  onChange = {() => dispatch({type:"DISCOUNT" ,payload: "ABOVE_30"})}
                  
                  /> 
                  <label>30% and above</label>
                </div>
                <div>
                  <input className = "radio" type="radio" value="40" name="discount"
                  onChange = {() => dispatch({type:"DISCOUNT" ,payload: "ABOVE_40"})}
                  
                  />
                  <label>40% and above</label>
                </div><div>
                  <input className = "radio" type="radio" value="50" name="discount" 
                  onChange = {() => dispatch({type:"DISCOUNT" ,payload: "ABOVE_50"})}
                  
                  />
                  <label>50% and above</label>
                </div>
              </div>
              </div>
              <hr/>

    </div>
    
    </>
  )
}

export  {Sidebar}