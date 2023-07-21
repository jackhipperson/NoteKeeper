import Header from "./Header";
import Pad from "./Pad";

function App() {

  const notes = [{title: "Hello", message: "This is a test message"}]

  return (
    <div>
      <Header />
      <Pad />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
