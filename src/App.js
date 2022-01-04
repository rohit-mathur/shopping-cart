import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from "./components/Products";
import ProductsDetail from "./components/ProductsDetail";

const App = () => {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductsDetail />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
