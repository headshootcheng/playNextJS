import axios from "axios";
export const getDataFromAPI = async () => {
  const { data } = await axios.get("https://reqres.in/api/users");
  console.log("data", data.data);
  return data.data.map((eachData) => {
    return {
      params: {
        name: eachData.id,
      },
    };
  });
};
