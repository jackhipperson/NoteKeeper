import Header from "./Header";
import Pad from "./Pad";

function App() {

  const notes = [{title: "Hello", message: "This is a test message"}]

  return (
    <div>
      <Header />
      <Pad />
      <Note notes={notes} />
    </div>
  );
}

export default App;
