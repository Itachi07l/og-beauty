import Spline from "@splinetool/react-spline";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


const UserProfile = () => {
  const user1 = JSON.parse(localStorage.getItem("user")) || false;
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user1?.profile?.name,
      email: user1?.email,
      city: user1?.profile?.city,
      pincode: user1?.profile?.pincode,
      address: user1?.profile?.address,
      state: user1?.profile?.state,
      phoneno: user1?.profile?.phoneno,
    }
  }
  );
  const onSubmit = (users) => {
    user1.profile = users;
    localStorage.setItem("user", JSON.stringify(user1));
    alertbox.render({
      alertIcon: 'success',
      title: 'Thank You!',
      message: 'profile created successfully',
      btnTitle: 'Ok',
      border: true
    });
    navigate("/profile")
  }
  const DeleteProfile = () => {
    localStorage.removeItem("user");
    alertbox.render({
      alertIcon: 'success',
      title: 'Thank You!',
      message: 'profile deleted successfully',
      btnTitle: 'Ok',
      border: true
    });
    navigate("/Login")

  }

  return !user1?.profile?.name ? (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-1">
        <Spline scene="https://prod.spline.design/Ak0uBq8modK0O1Ze/scene.splinecode" />
      </div>
      <div className="h-full w-fit  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100 z-2  m-auto p-10 relative mt-[4%]">
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-1/2 gap-5 justify-start items-start pt-5 mb-5'>
          <input className='mb-3 outline-0 border-b p-2 text-4xl' {...register("name")} placeholder='name' />
          <input className='mb-3 outline-0 border-b p-2 text-4xl' {...register("city")} placeholder='city' />
          <input className='mb-3 outline-0 border-b p-2 text-4xl' {...register("state")} placeholder='state' />
          <input className='mb-3 outline-0 border-b p-2 text-4xl' {...register("pincode")} placeholder='pincode' />
          <input className='mb-3 outline-0 border-b p-2 text-4xl' {...register("phoneno")} placeholder='phone no' />
          <textarea className='mb-3 outline-0 border-b p-2 text-4xl' {...register("address")} placeholder='address' />
          <button type="submit" className='px-4 py-1 bg-red-500  text-white rounded text-thin'>create profile</button>
        </form>
      </div>
    </>
  ) : (
    <>
    {/* <div className="w-36 h-10 absolute right-4  bottom-5 rounded-2xl bg-gray-300 z-3">  </div> */}
      <div className="fixed top-0 left-0 w-full h-full z-1">
        <Spline scene="https://prod.spline.design/Ak0uBq8modK0O1Ze/scene.splinecode" />
      </div>
      <div className="h-full w-[95%] md:w-fit  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100 z-2  m-auto md:p-10 relative mt-8 mb-10 md:mb-1">
      <h1 className="text-center text-4xl font-bold text-gray-700 mb-2 md:mb-10 mt-10 md:mt-5">Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)} className=' text-gray-700 flex flex-col w-full md:w-full p-5 gap-5 justify-start items-start  pt-5 mb-5 '>
          <div className="flex gap-4 flex-col md:flex-row w-full">
          name:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl mr-8' {...register("name")} placeholder='name' />
          Email:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl' {...register("email")} placeholder='email' />
          </div>
          <div className="flex gap-4 flex-col md:flex-row w-full">
            City:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl mr-8' {...register("city")} placeholder='city' />
            State:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl' {...register("state")} placeholder='state' />
          </div>
          <div className="flex gap-4 flex-col md:flex-row w-full">
          Pincode:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl mr-8 w-[40%]' {...register("pincode")} placeholder='pincode' />
          Phone no:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl' {...register("phoneno")} placeholder='phone no' />
          </div>
          address:<textarea className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl w-full' {...register("address")} placeholder='address' />
          <div className="flex gap-4 flex-col md:flex-row w-full">
          <button type="submit" className='px-4 py-1 bg-blue-500  text-white rounded text-thin'>update user</button>
          <button type="button" onClick={DeleteProfile} className='px-4 py-1 bg-red-500  text-white rounded text-thin'>delete user</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserProfile