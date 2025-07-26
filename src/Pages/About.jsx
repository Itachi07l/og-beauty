import { Link } from "react-router-dom"
import Footer from "./Footer"

const About = () => {
  return (
    <div className="h-full w-full mt-10">

      {/*section 1 */}
      <div className="about h-100 bg-black p-2 md:px-60 text-white flex flex-col  justify-center gap-10">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <Link to="/product"> 
          <i class="ri-logout-circle-line text-4xl font-light"></i>
          <p className="text-lg">     Back to the shopping</p>
          </Link>
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-5">About us</h1>
          <p className="text-sm md:text-2xl w-full md:w-[60%]">Bringing you the best of Beauty with the best of results of Naturals at the best prices guaranteed with Quality.</p>
        </div>
      </div>

      {/*section 2 */}
      <p className="text-4xl md:text-5xl font-bold mb-5 p-4 md:px-20 mt-20">be clear and concise</p>
      <div className="flex flex-col md:flex-row gap-10 w-full p-4 md:px-20 mt-10 items-center justify-between">
        <div className="w-full md:w-[50%]">
          <p className="text-sm md:text-xl">Presenting OG Beauty, your one-stop destination for high-quality beauty and personal care products at prices that won't break the bank. We're dedicated to helping you look and feel your best without emptying your wallet.</p>
        </div>
        <div className="w-full md:w-[50%]">
          <p className="text-sm md:text-xl">At OG Beauty, we believe that everyone deserves to pamper themselves, and our mission is to make quality beauty and personal care accessible to all. Our extensive range of products OG Beauty, OG Luxury, OG Science, OG Ayurveda and OG Naturals ..</p>
        </div>
      </div>

      {/*section 3 */}
      <div className="flex flex-col md:flex-row p-2 mt-5 md:mt-30 mb-20 gap-2 md:gap-10">

        <div className="w-full  mt-20 flex gap-5 items-center justify-center">
          <div><i className="ri-bank-card-2-fill text-4xl"></i></div>
          <div className="">
            <p className="text-2xl mb-2">Free shipping</p>
            <p className="text-xl">Standard shipping</p>
          </div>
        </div>
        <div className="w-full  mt-20 flex gap-5 items-center justify-center">
          <div><i class="ri-discount-percent-line text-4xl"></i></div>
          <div className="">
            <p className="text-2xl mb-2">Special discounts</p>
            <p className="text-xl">Guaranteed saving</p>
          </div>
        </div>
        <div className="w-full  mt-20 flex gap-5 items-center justify-center">
          <div><i class="ri-bank-card-fill text-4xl"></i></div>
          <div className="">
            <p className="text-2xl mb-2">Buyers protection</p>
            <p className="text-xl">Secure payment</p>
          </div>
        </div>
        <div className="w-full  mt-20 flex gap-5 items-center justify-center">
          <div><i class="ri-message-3-line text-4xl"></i></div>
          <div className="">
            <p className="text-2xl mb-2">Customer service</p>
            <p className="text-xl">Give us feedback</p>
          </div>
        </div>
      </div>


      {/*section 4 */}
      <h1 className="text-5xl text-center mt-30 mb-10">Available Bundles</h1>
      <div className="flex flex-col md:flex-row gap-5 w-full px-10 ">
        <div className="flex flex-col items-center justify-center  w-full md:w-1/5  ">
          <img src="/product/img10.webp" alt="" className="w-full rounded-xl"/>
          <p className="text-2xl mt-4">buy 2 at 599</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/5">
          <img src="/product/img11.png" alt="" className="w-full rounded-xl" />
          <p className="text-2xl mt-4">buy 3 at 799</p>
        </div>
        <div className="flex flex-col items-center justify-center  w-full md:w-1/5">
          <img src="/product/img12.webp" alt="" className="w-full rounded-xl"/>
          <p className="text-2xl mt-4" > buy 4 at 999</p>
        </div>
        <div className="flex flex-col items-center justify-center  w-full md:w-1/5">
          <img src="/product/img13.jpg" alt="" className="w-full rounded-xl"/>
          <p className="text-2xl mt-4">buy 5 at 999</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/5">
          <img src="/product/img14.jpg" alt="" className="w-full rounded-xl"/>
          <p className="text-2xl mt-4">buy 3 at 999</p>
        </div>
      </div>

     <Footer />
    </div>
  )
}

export default About