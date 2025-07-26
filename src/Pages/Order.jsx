import Spline from "@splinetool/react-spline";
import { Link, useNavigate } from "react-router-dom"
import TargetCursor from "../components/TargetCursor";
const Order = () => {
  const navigator = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || false;
  let filtered = user?.order || [];

  return (
    <>

      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <h1 className="text-center text-4xl font-bold text-gray-700 relative z-3 mt-10">Your Order </h1>
        {/* <div className="w-36 h-10 absolute right-4  bottom-5 rounded-2xl bg-gray-300 z-3"> </div> */}
      <div className="w-full m-auto text-center flex flex-wrap justify-center  gap-5 p-5 relative z-2 ">
        <div className="fixed top-0 left-0 w-full h-full z-1">
          <Spline scene="https://prod.spline.design/Ak0uBq8modK0O1Ze/scene.splinecode" />
        </div>
        {filtered.map((e) => (
          <div key={e.id} className='w-[90%] md:w-1/4 border-2 border-gray-400 my-5 rounded-lg overflow-hidden z-3'>
            <img src={e.img} alt="" className='w-full mb-4' />
            <div className='text-center text-gray-700'>
              <h1 className='text-xl font-semibold mb-1'>{e.title}</h1>
              <p className='text-sm mb-2'>{e.desc}</p>
              <p className='text-lg mb-3'>
                ₹{e.price || 'N/A'}
                {e.price && (
                  <span className='text-gray-500 line-through ml-2'>
                    ₹{Number(e.price) + 151}
                  </span>
                )}
              </p>
            </div>
            <div className='mb-4 text-center w-full px-2'>
              <Link to={`/product/${e.id}`}>
                <button className='cursor-target w-1/2 m-auto border border-gray-500 p-2 font-medium hover:bg-black hover:text-white'>
                  QUICK ADD
                </button>
              </Link>
              <button
                className='cursor-target w-1/2 m-auto border border-gray-500 p-2 font-medium hover:bg-black hover:text-white'
                onClick={() => {
                  const updatedCart = filtered.filter(item => item.id !== e.id);
                  console.log(updatedCart)
                  localStorage.setItem("user", JSON.stringify({ ...user, order: updatedCart }));
                  navigator("/order");
                }}>Cancel Order</button>
              <button
                className='cursor-target w-full m-auto mt-2 border border-gray-500 p-2 font-medium hover:bg-black hover:text-white'
                onClick={() => { }}>Track Order</button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <h1 className='text-3xl text-red-500'>No Orders Found</h1>
        )}



      </div>
    </>
  )
}

export default Order