
import './App.css';
import {Routes,Route} from 'react-router-dom';

import { About } from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from './pages/User/Dashboard.js';
import PrivateRoute from './componenets/Routes/Private.js';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminRoute from './componenets/Routes/AdminRoute';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/User/Orders';
import Profile from './pages/User/Profile';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';
import HomePage from './pages/HomePage';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/product/:slug' element={<ProductDetails/>}></Route>
      <Route path='/categories' element={<Categories/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
      <Route path='/category/:slug' element={<CategoryProduct/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/about' element={<About/>}></Route>

      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path='user' element={<Dashboard/>}/>
      <Route path='user/orders' element={<Orders/>}/>
      <Route path='user/profile' element={<Profile/>}/>
      </Route>

      <Route path='/dashboard' element={<AdminRoute/>}>
      <Route path='admin' element={<AdminDashboard/>}/>
      <Route path='admin/create-product' element={<CreateProduct/>}/>
      <Route path='admin/create-category' element={<CreateCategory/>}/>
      <Route path='admin/product/:slug' element={<UpdateProduct/>}/>
      <Route path='admin/products' element={<Products/>}/>
      <Route path='admin/users' element={<Users/>}/>

      </Route>

      <Route path='/register' element={<Register/>}></Route>
      <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/policy' element={<Policy/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/*' element={<Pagenotfound/>}></Route>
    </Routes>
    
    </>
  );
};

export default App;
