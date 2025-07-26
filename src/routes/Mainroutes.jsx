import { lazy } from 'react';
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import PageNotFound from '../Pages/PageNotFound'
import ProductDetails from '../Pages/ProductDetails'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import UserProfile from '../Pages/UserProfile';
import AddToCart from '../Pages/AddToCart';
import Order from '../Pages/Order';
import About from '../Pages/About';
import Footer from '../Pages/Footer';



// const UserProfile = lazy(()=> import('../pages/user/UserProfile'))
// const Product = lazy(()=> import('../pages/product'))
// const Login = lazy(()=> import('../pages/Login'))
// const Register = lazy(()=> import('../pages/Register'))
// const CreateProduct = lazy(()=> import('../pages/admin/CreateProduct'))
// const ProductDetails = lazy(()=> import('../pages/admin/ProductDetails'))
// const PageNotFound = lazy(()=> import("../PageNotFound"))
// const Authroute = lazy(()=> import('./Authroute'))
// const Cart = lazy(()=> import('../pages/Cart'))

const Mainroutes = () => {
    let product=[
        { id: 0, img: "/product/img1.webp", title: "OG Luxury Extrait De Parfum Smokey Intense", desc: "Whiskey, Oud & Cinnamon", price: "599" },
        { id: 1, img: "/product/img2.webp", title: "OG Luxury Extrait De Parfum Shadow Intense", desc: "Lavender, Sage & Amber", price: "599" },
        { id: 2, img: "/product/img3.webp", title: "OG Luxury Extrait De Parfum Gallant Intense", desc: "Petitgrain, Jasmine & Sandalwood", price: "599" },
        { id: 3, img: "/product/img4.webp", title: "OG Luxury Extrait De Parfum Woody Intense", desc: "Rosemary, Basil & Amber,Cinnamon", price: "599" },
        { id: 4, img: "/product/img5.webp", title: "OG BEAUTY Luxury Eau De Parfum Smokey", desc: "Long lasting", price: "549" },
        { id: 5, img: "/product/img6.webp", title: "OG BEAUTY Luxury Eau De Parfum Gallants", desc: "Long lasting", price: "599" },
        { id: 6, img: "/product/img7.webp", title: "OG BEAUTY Luxury Eau De Parfum Shadow", desc: "Long lasting", price: "700" },
        { id: 7, img: "/product/img8.webp", title: "OG BEAUTY Luxury Eau De Parfum Woodys", desc: "Long lasting", price: "399" },
        { id: 8, img: "/product/img9.webp", title: "OG BEAUTY Luxury Royal OUD Eau De Parfum 50ml", desc: "Saffron, Agarwood & Patchouli", price: "299" }
    ];
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            
                    <Route path="/product" element={<Product product={product}/>} />
                    <Route path="/product/:id" element={<ProductDetails product={product} />} />
                    <Route path="/profile" element={<UserProfile />}/> 
                    <Route path="/addtocart" element={<AddToCart />}/> 
                    <Route path="/order" element={<Order />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/footer" element={<Footer />} />

                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default Mainroutes
