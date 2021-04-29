import axios from "axios";

const postProperty = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/PropertyListing",
      values
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.response);
  }
};

export default postProperty;
