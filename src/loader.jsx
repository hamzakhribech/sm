import logo from "/src/assets/logo2.png"
const Loader = () => {
    return (
      <div className=" bg-white fixed w-screen h-screen z-[100]">
        <div className="flex justify-center">
          <img  className="w-[80px]" src={logo} alt="Loading" />
        </div>
   <div className="terminal-loader">
  <div className="terminal-header">
    <div className="terminal-title">Status</div>
    <div className="terminal-controls">
      <div className="control close"></div>
      <div className="control minimize"></div>
      <div className="control maximize"></div>
    </div>
  </div>
  <div className="text">Loading...</div>
</div>

        </div>
    )
}
export default Loader;