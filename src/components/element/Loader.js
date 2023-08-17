import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <ThreeDots
      color="#304ffe"
      height={45}
      ariaLabel="tail-spin-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
}

export default Loader;
