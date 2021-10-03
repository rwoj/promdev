import axios from "axios";

const Hello = ({ data }) => {
  return (
    <div>
      heja:
      {data.myRes}
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  // const data = { name: "Radek" };
  const { data } = await axios.get("http://promise.dev/api/hello");
  // console.log("heja", data);
  return {
    props: {
      data,
    },
  };
};

export default Hello;
