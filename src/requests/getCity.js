import axios from "axios";

const getCity = async (search) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/PropertyListing${search}`
    );
    // console.log(response.data);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.response);
    return error.response;
  }
};

export default getCity;
