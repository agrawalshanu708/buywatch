import React, { useState } from "react";
import { useFilter } from "../../context/index";
import "./filterbar.css";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Filterbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const { state, dispatch } = useFilter();
  const { sortby, gender, categoryName, brandName, discount } = state;
  const { casual, formal, digital, sports } = categoryName;
  const { apple, fossil, fastrack, titan } = brandName;

  return (
<div  className="filter-outer">

        <div className="col-2 filterbar">
          <div className="filterbar__box flex-center flex-row">
            <div className="filterbar__heading">Filter</div>
            <div
              className="filterbar__deleteBtn"
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Delete all filter
            </div>
          </div>

          <div className="flex-vertical-outer">
            <div className="filterbar__heading">Rating</div>

            <input
              type="range"
              min="1"
              max="5"
              defaultValue="1"
              onChange={(e) =>
                dispatch({ type: "RATING", payload: parseInt(e.target.value) })
              }
            />
          </div>

          <div className="accordian-item flex-vertical-outer ">
            <div className="accordian-tap ">
              <div className="filter__heading1">Categories</div>
            </div>
            <div className="accordian-answer flex-horizontal-inner ">
              <input
                id="men"
                class="radiobox"
                type="radio"
                name="gender"
                value="Men"
                onChange={() =>
                  dispatch({ type: "GENDER", payload: "SHOW_MEN" })
                }
              />
              <label For="men">Men</label>
              <input
                id="women"
                class="radiobox"
                type="radio"
                name="gender"
                value="Women"
                onChange={() =>
                  dispatch({ type: "GENDER", payload: "SHOW_WOMEN" })
                }
              />
              <label for="women">Women</label>

              <input
                id="kid"
                class="radiobox"
                type="radio"
                name="gender"
                value="kids"
                onChange={() =>
                  dispatch({ type: "GENDER", payload: "SHOW_KID" })
                }
              />
              <label for="kid">Kid</label>
            </div>
          </div>
          <hr />

          {/* ---------------------------------------------------------------------- */}
          <div className="accordian-item flex-vertical-outer">
            <div className="accordian-tap">
              <div className="filterbar__heading">Producer</div>
            </div>
            <div className="accordian-answer flex-vertical-inner">
              <div className="input-horizontal-flex">
                <input
                  class="check"
                  type="checkbox"
                  checked={apple}
                  onChange={(e) => {
                    dispatch({ type: "SHOW_APPLE" });
                  }}
                />
                <label>Apple</label>
              </div>
              <div className="input-horizontal-flex">
                <input
                  class="check"
                  type="checkbox"
                  checked={fossil}
                  onChange={(e) => {
                    dispatch({ type: "SHOW_FOSSIL" });
                  }}
                />
                <label>Fossil(5)</label>
              </div>
              <div className="input-horizontal-flex">
                <input
                  class="check"
                  type="checkbox"
                  checked={fastrack}
                  onChange={(e) => {
                    dispatch({ type: "SHOW_FASTRACK" });
                  }}
                />
                <label>Fastrack(5)</label>
              </div>
              <div className="input-horizontal-flex">
                <input
                  class="check"
                  type="checkbox"
                  checked={titan}
                  onChange={(e) => {
                    dispatch({ type: "SHOW_TITAN" });
                  }}
                />
                <label>Titan(5)</label>
              </div>
            </div>
          </div>
          <hr />
          {/* ------------------------------------------------------------------------------ */}
          <div className="accordian-item flex-vertical-outer">
            <div className="accordian-tap">
              <div className="filterbar__heading">Style</div>
            </div>
            <div className="accordian-answer flex-vertical-inner">
              <div className="input-horizontal-flex">
                <input
                  class="check"
                  type="checkbox"
                  checked={casual}
                  onChange={(e) => {
                    dispatch({ type: "SHOW_CASUAL" });
                  }}
                />
                <label>Casual(2)</label>
              </div>
              <div className="input-horizontal-flex">
                <input
                  class="check"
                  type="checkbox"
                  checked={formal}
                  onChange={(e) => dispatch({ type: "SHOW_FORMAL" })}
                />
                <label> Formal(7) </label>
              </div>
              <div className="input-horizontal-flex">
                <input
                  class="check"
                  type="checkbox"
                  checked={digital}
                  onChange={(e) => dispatch({ type: "SHOW_DIGITAL" })}
                />
                <label>Smart Watches(2)</label>
              </div>
              <div className="input-horizontal-flex">
                <input
                  class="check"
                  type="checkbox"
                  checked={sports}
                  onChange={(e) => {
                    dispatch({ type: "SHOW_SPORTS" });
                  }}
                />
                <label>Sports(4)</label>
              </div>
            </div>
          </div>

          <hr />
          {/* ---------------------------------------------- */}

          <div className="accordian-item flex-vertical-outer">
            <div className="accordian-tap">
              <div className="filterbar__heading">Discount</div>
            </div>
            <div className="accordian-answer flex-vertical-inner">
              <div className="input-horizontal-flex">
                <input
                  className="radio"
                  type="radio"
                  value="10"
                  name="discount"
                  onChange={() =>
                    dispatch({ type: "DISCOUNT", payload: "ABOVE_10" })
                  }
                />
                <label>10% and above</label>
              </div>
              <div className="input-horizontal-flex">
                <input
                  className="radio"
                  type="radio"
                  value="20"
                  name="discount"
                  onChange={() =>
                    dispatch({ type: "DISCOUNT", payload: "ABOVE_20" })
                  }
                />
                <label>20% and above</label>
              </div>
              <div className="input-horizontal-flex">
                <input
                  className="radio"
                  type="radio"
                  value="30"
                  name="discount"
                  onChange={() =>
                    dispatch({ type: "DISCOUNT", payload: "ABOVE_30" })
                  }
                />
                <label>30% and above</label>
              </div>
              <div className="input-horizontal-flex">
                <input
                  className="radio"
                  type="radio"
                  value="40"
                  name="discount"
                  onChange={() =>
                    dispatch({ type: "DISCOUNT", payload: "ABOVE_40" })
                  }
                />
                <label>40% and above</label>
              </div>
              <div className="input-horizontal-flex">
                <input
                  className="radio"
                  type="radio"
                  value="50"
                  name="discount"
                  onChange={() =>
                    dispatch({ type: "DISCOUNT", payload: "ABOVE_50" })
                  }
                />
                <label>50% and above</label>
              </div>
            </div>
          </div>
          <
          hr />
        </div>
      )
      
    </div>
  );
};

export { Filterbar };
