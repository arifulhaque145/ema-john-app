import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { Apps } from "./style";

function App() {
  return (
    <Apps>
      <header>
        <Navbar />
        <Searchbar />
      </header>
      <main>
        <Cart />
      </main>
    </Apps>
  );
}

export default App;
