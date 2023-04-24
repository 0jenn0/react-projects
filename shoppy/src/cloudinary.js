// // import cloudinary from "cloudinary";
// import { v2 as cloudinary } from "cloudinary";
// import { ref, set, child } from "firebase/database";
// import { db } from "./fbase";

// export const cloudinaryConfig = cloudinary.config({
//   cloud_name: process.env.REACT_APP_CLOUD_NAME,
//   api_key: process.env.REACT_APP_API_KEY,
//   api_secret: process.env.REACT_APP_API_SECRET,
// });

// const folderName = "Shoppy";

// export const get_imageURL = () => {
//   cloudinary.api
//     .resources({
//       type: "upload",
//       prefix: folderName + "/",
//       max_results: 100,
//     })
//     .then((result) => {
//       result.resources.forEach((resource) => {
//         const imageUrl = cloudinary.url(resource.public_id);
//         console.log(imageUrl);
//       });
//     })
//     .catch((error) => console.error(error));
// };
