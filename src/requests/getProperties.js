import axios from "axios";

const getProperties = async (propertyId) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/PropertyListing"
    );
    // console.log(response.data);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default getProperties;
