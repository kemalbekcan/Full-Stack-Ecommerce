import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import ProductDescriptonScreen from './screens/ProductDescriptonScreen';
import Ordersscreen from './screens/Ordersscreen';
import Orderinfo from './screens/Orderinfo';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import Editproduct from './screens/Editproduct';
import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" component={Homescreen} exact />
        <Route path="/product/:id" component={ProductDescriptonScreen} />
        <Route path="/cart" component={Cartscreen} />
        <Route path="/register" component={Registerscreen} />
        <Route path="/login" component={Loginscreen} />
        <Route path="/orders" component={Ordersscreen} />
        <Route path="/orderinfo/:orderid" component={Orderinfo} />
        <Route path="/profile" component={Profilescreen} />
        <Route path="/admin" component={Adminscreen} />
        <Route path="/admin/editproduct/:productid" component={Editproduct} />
      </BrowserRouter>

    </div>
  );
}

export default App;
