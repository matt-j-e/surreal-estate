import axios from "axios";

const getProperties = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/PropertyListing"
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.response);
    return error.response;
  }
};

export default getProperties;
