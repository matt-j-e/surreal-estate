import axios from "axios";

const getFavourites = async (userID) => {
  try {
    const response = await axios.get(
      // `http://localhost:3000/api/v1/Favourite?fbUserId=${userID}`
      // `http://localhost:3000/api/v1/Favourite?query={"fbUserId":"${userID}"}&populate=propertyListing`
      `http://localhost:3000/api/v1/Favourite?query=%7B%22fbUserId%22%3A%22${userID}%22%7D&populate=propertyListing`
    );
    console.log("getFavourites", response);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.response);
    return error.response;
  }
};

export default getFavourites;
