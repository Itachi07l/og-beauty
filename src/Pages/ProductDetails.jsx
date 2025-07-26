import { useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import InfiniteMenu from '../Components/InfiniteMenu'

const ProductDetails = ({ product }) => {
  const items = [
    {
      image: '/product/img1.webp',
      link: 'https:localhost:5173/product/1',
      title: 'items 1',
      description: 'OG Luxury Extrait De Parfum Smokey Intense'
    },
    {
      image: '/product/img2.webp',
      link: 'https:localhost:5173/product/2',
      title: '',
      description: 'OG Luxury Extrait De Parfum Gallant Intense'
    },
    {
      image: '/product/img3.webp',
      link: 'https:localhost:5173/product/3',
      title: '',
      description: 'OG Luxury Extrait De Parfum Woody Intense'
    },
    {
      image: '/product/img4.webp',
      link: 'https:localhost:5173/product/4',
      title: '',
      description: 'OG BEAUTY Luxury Eau De Parfum Smokey'
    }
  ];
  const { id } = useParams()
  const navigator = useNavigate()
  const findProduct = product?.find((e) => e.id == id) || false
  const user = JSON.parse(localStorage.getItem("user"))
  const addtocart = () => {
    if (!user) {
      alertbox.render({
        alertIcon: 'warning',
        title: '',
        message: 'Please Login First',
        btnTitle: 'Ok',
        themeColor: '#000000',
        btnColor: '#7CFC00',
      }); return
    }
    user.cart.push(findProduct)
    alertbox.render({
      alertIcon: 'success',
      title: 'Thank You!',
      message: 'add to cart successfully',
      btnTitle: 'Ok',
      border: true
    });
    localStorage.setItem("user", JSON.stringify(user))
  }
  const order = () => {
    if (!user) {
      alertbox.render({
        alertIcon: 'warning',
        title: '',
        message: 'Please Login First',
        btnTitle: 'Ok',
        themeColor: '#000000',
        btnColor: '#7CFC00',
      }); return
    }
    if (!user.profile.name) {
      alertbox.render({
        alertIcon: 'warning',
        title: '',
        message: 'Please create profile First',
        btnTitle: 'Ok',
        themeColor: '#000000',
        btnColor: '#7CFC00',
      });
      navigator("/profile")
      return
    }
    user.order.push(findProduct)
    alertbox.render({
      alertIcon: 'success',
      title: 'Thank You!',
      message: 'Order placed successfully',
      btnTitle: 'close',
      border: true
    });
    localStorage.setItem("user", JSON.stringify(user))
  }


  return findProduct ? (
    <div>
      {(!findProduct) && <h1 className='text-8xl mt-4 text-center text-red-500'>Product Not Found</h1>}
      <div className='flex flex-col md:flex-row w-full'>
        <div className=' w-full h-full p-10 md:px-10'>
          <img src={findProduct.img} alt="" className='w-full  object-contain rounded-xl '/>
        </div>
        <div className=' w-full p-5'>
          <h1 className='text-4xl px-5 mb-3 md:pt-10'>{findProduct.title}</h1>
          <p className='text-3xl px-5 mb-6'>{findProduct.desc}</p>
          <div className='flex flex-col md:flex-row gap-5 w-full '>
            <div className='p-5 rounded-xl bg-black/80 w-full md:w-1/2 '>
              <p className='text-2xl text-gray-300 font-semibold'>Concentration</p>
              <p className='text-2xl text-gray-300'>Eau de <span className='text-white font-semibold'>Perfum</span></p>
            </div>
            <div className='p-5 rounded-xl bg-black/80 w-full md:w-1/2 '>
              <p className='text-2xl text-gray-300/90 font-semibold'>Langevity</p>
              <p className='text-2xl text-white font-bold'>8-12 hours </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-5 w-full mt-4 '>
            <div className='p-5 rounded-xl bg-black/80 w-full md:w-1/2 '>
              <p className='text-2xl text-gray-300 font-semibold'>Season</p>
              <p className='text-2xl text-white'>All Season</p>
            </div>
            <div className='p-5 rounded-xl bg-black/80 w-full md:w-1/2 '>
              <p className='text-2xl text-gray-300/90 font-semibold'>Occasion</p>
              <p className='text-2xl text-white font-bold'>Evening/Date Night </p>
            </div>
          </div>
          <p className='text-3xl px-5 mb-4 mt-5'>${findProduct.price} <span className='line-through text-2xl text-gray-700 pr-4'>${Number(findProduct.price) + 151}</span><span className='text-lg'> In stock</span></p>
          <div className='flex gap-5 mt-5'>
            <p className='text-xl px-10 py-3 bg-black text-white hover:bg-orange-600 hover:scale-105 transition-all w-fit rounded-4xl' onClick={order}>Order</p>
            <p className='text-xl px-10 py-3 bg-black text-white hover:bg-orange-600 hover:scale-105 transition-all w-fit rounded-4xl' onClick={addtocart}>Add to cart</p>
          </div>
          <br />
          <div className='p-5 rounded-2xl bg-green-100/60 text-green-800 font-semibold mb-2 mt-2'>
              <div className='flex gap-5'>
                <i className="ri-bank-card-2-fill text-2xl"></i>
                <p>Free Shipping</p>
              </div>
              <p>2-3 Business days . 30-day return policy</p>
          </div>
          <p className="p-5 rounded-2xl bg-green-100/60 text-green-800 font-semibold mt-2">. In stock (24 available)</p>
        </div>

      </div>
      {/* <h1>{findProduct.desc}</h1>
      <h1>{findProduct.price}</h1>
      <img src={findProduct.img} alt="" />
      <img src="/product/1.webp" alt="" />
      <p onClick={addtocart}>add to cart</p>
      <p onClick={order}>order</p> */}

      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items} />
      </div>

      <Footer />
    </div>
  ) : "loading or product not found";
}

export default ProductDetails
