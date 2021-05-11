import axios from "axios";

const deleteFavourite = async (favouriteId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/Favourite/${favouriteId}`
    );
    return response.status;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.response);
    return error.status;
  }
};

export default deleteFavourite;
