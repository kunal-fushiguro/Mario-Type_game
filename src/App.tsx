import Canvas from "./canvas/Canvas";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Canvas width={1000} height={800} />
    </div>
  );
};

export default App;
