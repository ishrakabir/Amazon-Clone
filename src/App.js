import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layouts from './Components/Layouts/Layouts';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import { productsAndCartLoader } from './Loaders/productsAndCartLoader';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Shipment from './Components/Shipment/Shipment';
import PrivatesRoutes from './Routes/PrivatesRoutes';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts></Layouts>,
      children: [
        {
          path: '/',
          loader: () => fetch('fakeData/products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader:  productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivatesRoutes><Inventory></Inventory></PrivatesRoutes>
        },

        {
          path: '/shipment',
          element: <PrivatesRoutes><Shipment></Shipment></PrivatesRoutes>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },

      ]
    }
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
