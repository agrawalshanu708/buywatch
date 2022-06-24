const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH": 
    return {...state, 
     searchValue : action.payload 
    }
    case "SHOW_CASUAL":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          casual: !state.categoryName.casual,
        },
      };
    case "SHOW_FORMAL":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          formal: !state.categoryName.formal,
        },
      };
    case "SHOW_DIGITAL":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          digital: !state.categoryName.digital,
        },
      };
    case "SHOW_SPORTS":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          sports: !state.categoryName.sports,
        },
      };

    case "SHOW_FOSSIL":
      return {
        ...state,
        brandName: { ...state["brandName"], fossil: !state.brandName.fossil },
      };
    case "SHOW_TITAN":
      return {
        ...state,
        brandName: { ...state["brandName"], titan: !state.brandName.titan },
      };
    case "SHOW_FASTRACK":
      return {
        ...state,
        brandName: {
          ...state["brandName"],
          fastrack: !state.brandName.fastrack,
        },
      };
    case "SHOW_APPLE":
      return {
        ...state,
        brandName: { ...state["brandName"], apple: !state.brandName.apple },
      };

    case "DISCOUNT":
      return { ...state, discount: action.payload };

    case "GENDER":
      return { ...state, gender: action.payload };
    case "SORT_BY":
      return { ...state, sortby: action.payload };
     case "RATING": 
       return {...state, rating: action.payload}
     case "SHOW_FILTER_BAR": 
     return {...state, isfilterBar : !state.isfilterBar }

     case "CLEAR":
      return {
        ...state,
        sortby: null,
        gender: null,
        categoryName: {
          casual: false,
          formal: false,
          digital: false,
          sports: false,
        },
        brandName: {
          apple: false,
          fossil: false,
          fastrack: false,
          titan: false,
        },
        discount: null,
        rating:1
      };
    default:
      return state;
  }
};

export { filterReducer };
