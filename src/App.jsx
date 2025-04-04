import "./App.css";
import { BrowserRouter ,Routes,Route} from "react-router";
import { Outlet } from "react-router";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";


const BaseLayout = () => {
  return (
    <div className="mx-auto max-width-screen-lg " >
    <Header/>
      <Outlet />
    </div>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
