import Loader from "react-loader-spinner";

const Loading = () => {
  return (
      <Loader className="loader"
        type="TailSpin"
        color="#f1356d"
        height={100}
        width={100}
        timeout={3000}
      />
  )
}

export default Loading

