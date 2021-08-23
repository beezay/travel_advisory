import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// var options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//     "x-rapidapi-key": "32a168c9b0mshd4c1160dc31511fp1c9e54jsneecb95bf4b06",
//   },
// };

export const getPlacesData = async (ne, sw) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "32a168c9b0mshd4c1160dc31511fp1c9e54jsneecb95bf4b06",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
