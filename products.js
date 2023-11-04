const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
//11 a.

// const rateProduct = (productName, rate) => {
//   const findProduct = products.find((product) => product.name === productName);
//   if (findProduct) {
//     findProduct.ratings.push({ userId: "someUseId", rate: parseFloat(rate) });
//     return "rating added seccessfully";
//   } else {
//     return "product not found";
//   }
// };

// let productName = "Laptop";
// let rate = "8.5";
// let result = rateProduct(productName, rate);
// console.log(result);

//11 b.

// const averageRating = (productId) => {
//   const product = products.find((p) => p._id === productId);
//   if (!product) {
//     return "product not found";
//   }
//   if (product.ratings.length === 0) {
//     return "no raiting available for this product";
//   }
//   const ratings = product.ratings;
//   let ratingSum = 0;
//   for (const rating of ratings) {
//     ratingSum += rating.rate;
//   }
//   const average = ratingSum / ratings.length;
//   return average.toFixed(2);
// };შეფასება
// const productId = "aegfal";
// const result = averageRating(productId);
// console.log(result);

//12

// function likeProduct(productId, userId) {
//   const product = products.find((p) => p._id === productId);
//   if (!product) {
//     console.log("Product not found");
//     return;
//   }
//   const userLikedProduct = product.likes.includes(userId);
//   if (userLikedProduct) {
//     const index = product.likes.indexOf(userId);
//     if (index !== -1) {
//       product.likes.splice(index, 1);
//       console.log(`User ${userId} unliked the product ${product.name}`);
//     }
//   } else {
//     product.likes.push(userId);
//     console.log(`User ${userId} liked the product ${product.name}`);
//   }
// }

// likeProduct("aegfal", "fg12cy");
// likeProduct("aegfal", "fg12cy");
