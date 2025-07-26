import Home from "./Pages/home"
import Nav from "./Pages/nav"
import Product from "./Pages/Product"
import Mainroutes from "./routes/Mainroutes"
import { ToastContainer } from 'react-toastify';
function App() {


  return (
    <>
     


        <Nav />
        <Mainroutes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* <Home/> */}

        {/* <Product /> */}
    </>
  )
}

export default App
