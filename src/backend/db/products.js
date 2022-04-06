import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

 export const products = [
  // fossil
  {
    _id: uuid(),
    "tittle": "fossil",
    "description": "Men Nate Watch",
    "price":1999,
    "category":"male",
    "categoryName" : "formal",
     "qty" : 1,
    "new_arrival":true,
    "original_price":"3000",
    "discount":10,
    isFillHeart: false, 
    "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12760482/2022/2/18/72816a3d-97e0-422f-8178-8639037a89631645169116867-Fossil-Women-Brown-Chronograph-Watch-ES4889-231645169116288-1.jpg",
    "rating":{
        "rate" : 1,
        "count":5
}},
    {
      _id: uuid(),
        "tittle": "fossil",
        "description": "Men Analogue Watch",
        "price":6578,
        "category":"male",
        "categoryName" : "casual",
         "qty" : 1,
        "new_arrival":false,
        "original_price":"11955",
        "discount":45,
        isFillHeart: false, 
        "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/11/a2d5be46-fa59-4ab2-b58a-4d53647920541581374414279-1.jpg",
        "rating":{
            "rate" : 2,
            "count":5
          } },
       
            {
              _id: uuid(),
                "tittle": "fossil",
                "description": "Women STELLA Watch",
                "price":2499,
                "category":"female",
                "categoryName" : "formal",
                "qty" : 1,

                "new_arrival":true,
                "original_price":"4000",
                "discount":37,
                isFillHeart: false, 
                "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/16/8b413d27-f950-48bc-be40-a7dbec0a8c451602822493402-1.jpg",
                "rating":{
                    "rate" : 3,
                    "count":5

                }  },
                {
                  _id: uuid(),
                    "tittle": "fossil",
                    "description": "Women Nate Watch",
                    "price":3699,
                    "category":"female",
                    "categoryName" : "formal",
                    "qty" : 1,

                    "new_arrival":false,
                    "original_price":"5000",
                    "discount":26,
                    isFillHeart: false, 
                    "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12864538/2021/7/2/0ffbe3a6-205f-41ed-a8b1-58a9e1123a4a1625219912287-Fossil-Izzy-Silver-Watch-ES4783-6721625219912042-1.jpg",
                    "rating":{
                        "rate" : 4,
                        "count":5
                    }   },
                    {
                      _id: uuid(),
                        "tittle": "fossil",
                        "description": "Men Smart Watch",
                        "price":8999,
                        "category":"male",
                        "categoryName" : "digital",
                        "qty" : 1,

                        "new_arrival":true,

                        "original_price":"13000",
                        "discount":60,
                        isFillHeart: false, 
                        "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10785718/2021/9/9/2a52cf5f-bbb4-4611-847e-03323c9861941631161318340-Fossil-Men-Grey-The-Carlyle-HR-Gen-5-Smartwatch-FTW4024-1571-1.jpg",
                        "rating":{
                            "rate" : 5,
                            "count":5
                        }   },
                   
                             
        // -----------TITAN
        {
          _id: uuid(),
            "tittle": "titan",
            "description": "Men Analogue Watch",
            "price":899,
            "category":"male",
            "categoryName" : "formal",
            "qty" : 1,

            "new_arrival":false,
            "original_price":"3000",
            "discount":30,
            isFillHeart: false, 
            "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/v1/images/style/properties/Titan-Men-Dial-Watch_1227f6cc2d9357d46886cc8c65c5f61a_images.jpg",
            "rating": {
              rate: 1,
              count: 5
            },
         },
         {
          _id: uuid(),
            "tittle": "titan",
            "description": "Men Analogue Watch",
            "price":1499,
            "category":"male",
            "categoryName" : "formal",
            "qty" : 1,

            "new_arrival":true,
            "original_price":"5000",
            "discount":30,
            isFillHeart: false, 
            "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/31/994a5150-27a5-4957-ba94-4db94c5498781604155155375-1.jpg",
            "rating": {
              rate: 2,
              count: 5
            }
         },{
          _id: uuid(),
            "tittle": "titan",
            "description": "Women Analogue Watch",
            "price":2599,
            "category":"female",
            "categoryName" : "formal",
            "qty" : 1,

            "new_arrival":false,
            "original_price":"6000",
            "discount":40,
            isFillHeart: false, 
            "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/10/10/ba08e1ed-29dc-4ca6-a3fd-4e444aa53a0c1570681425331-1.jpg",
            "rating": {
              rate: 3,
              count: 5
            }
         },{
          _id: uuid(),
            "tittle": "titan",
            "description": "Women Analogue Watch",
            "price":3299,
            "category":"female",
            "categoryName" : "formal",
            "qty" : 1,

            "new_arrival":true,
            "original_price":"6600",
            "discount":50,
            isFillHeart: false, 
            "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/v1/images/style/properties/Titan-Raga-Women-Black-Dial-Watch-2531NL01_bf7f7e38eb58a7a768d64edebdfc75c3_images.jpg",
            "rating": {
              rate: 4,
              count: 5
            }
         },{
          _id: uuid(),
            "tittle": "titan",
            "description": "Kid Sports Watch",
            "price":499,
            "category":"kid",
            "categoryName" : "sports",
            "qty" : 1,

            "new_arrival":false,
            "original_price":"700",
            "discount":30,
            isFillHeart: false, 
            "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17116876/2022/2/10/8f65c7e8-b1a8-4273-aad9-9196860706d01644495262437KoolKidzUnisexKidsMulticolouredDialGreyTexturedStrapsAnalogu1.jpg",
            "rating": {
              rate: 5,
              count: 5
            }
         },
        //  --------------fastrack
        {
          _id: uuid(),
            "tittle": "fastrack",
            "description": "Kid Sports Watch",
            "price":4999,
            "category":"kid",
            "categoryName" : "sports",
            "qty" : 1,

            "new_arrival":true,
            "original_price":"7000",
            "discount":30,
            isFillHeart: false, 
            "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1984853/2017/7/7/11499425859558-Fastrack-Men-Black-Analogue-and-Digital-Watch-7641499425859423-1.jpg",
            "rating": {
              rate: 1,
              count: 5
            }
         },
         {
          _id: uuid(),
            "tittle": "fastrack",
            "description": "Men Analogue Watch",
            "price":9999,
            "category":"male",
            "categoryName" : "casual",
            "qty" : 1,

            "new_arrival":false,
            "original_price":"17000",
            "discount":40,
            isFillHeart: false, 
            "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14052052/2021/5/10/414795a2-87fd-40d9-83a1-d993e99515251620645834846FastrackSTUNNERS10MenBrownAnalogueWatch3255SL012.jpg",
            "rating": {
              rate: 2,
              count: 5
            }
         },
         {
          _id: uuid(),
            "tittle": "fastrack",
            "description": "Men Smart Watch",
            "price":1299,
            "category":"male",
            "categoryName" : "sports",
            "qty" : 1,

            "new_arrival":true,
            "original_price":"4000",
            "discount":65,
            isFillHeart: false, 
            "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/v1/images/style/properties/Fastrack-Digitals-Women-Black-LCD-Digital-Watch-68004PP01J_b625bc06b6a9a4017f27c3ff253c18f1_images.jpg",
            "rating": {
              rate: 3,
              count: 5
            }
         },
         {
          _id: uuid(),
            "tittle": "fastrack",
            "description": "Kid Sports Watch",
            "price":5699,
            "category":"kid",
            "categoryName" : "sports",
            "qty" : 1,

            "new_arrival":false,
            "original_price":"7000",
            "discount":30,
            isFillHeart: false, 
            "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4450162/2018/4/5/11522906691350-Fastrack-Unisex-Black-Digital-Watch-1261522906691204-1.jpg",
            "rating": {
              rate: 4,
              count: 5
            },
         },
         {
          _id: uuid(),
            "tittle": "fastrack",
            "description": "Digital Watch",
            "price":3499,
            "category":"male",
            "categoryName" : "digital",
            "qty" : 1,

            "new_arrival":true,
            "original_price":"7000",
            "discount":60,
            isFillHeart: false, 
            "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/561298/2016/6/15/11465983892032-Fastrack-Digitals-Men-Blue-LED-Digital-Watch-38011PP02J-2081465983891658-1.jpg",
            "rating": {
              rate: 5,
              count: 5
            }
         },
];