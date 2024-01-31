import {Route, Routes} from "react-router-dom";
import Home from './pages/home';
import Average from './pages/average-order';
import Order from './pages/order-detail';
import ByCategory from './pages/by-category';

const App = () => {
  return (
    <>
    <div>
        <Routes>
          <Route path="/" exact children={() => <Home />} />
          <Route path="/average-order" element={() => <Average />} />
          <Route path="/orders" element={() => <Order />} />
          <Route path="/by-category" element={() => <ByCategory />} />
        </Routes>
    </div>
    </>
  )
}

export default App;
