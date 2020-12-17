import axios from "axios";

export async function getStaticPaths() {
  const { data } = await axios.get("https://reqres.in/api/users");
  //console.log("data", data.data);
  const paths = data.data.map((eachData) => {
    return {
      params: {
        name: eachData.first_name,
        ...eachData,
      },
    };
  });
  console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  console.log("params", params);
  return {
    props: {
      ...params,
    },
  };
}

export const User = ({ name, email }) => {
  return (
    <div>
      {name}
      {email}
    </div>
  );
};

export default User;
