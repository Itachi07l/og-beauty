import Spline from '@splinetool/react-spline'
import { nanoid } from 'nanoid'
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from 'react-router-dom'


const Register = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const onSubmit = (user) => {
    const user1 = JSON.parse(localStorage.getItem("user")) || false
    user.id = nanoid()
    user.cart = []
    user.order = []
    user.login = true;
    user.profile = []
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/")
  }

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full z-1">
        <Spline scene="https://prod.spline.design/Ak0uBq8modK0O1Ze/scene.splinecode" />
      </div>
      <div className="h-full w-[90%] md:w-fit  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100 z-2  m-auto p-10 relative mt-20 md:mt-[2%] ">
        <h1 className="text-center text-2xl font-bold text-gray-700">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full gap-5 justify-start items-start pt-5'>
          Username:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl w-full' {...register("username", { required: true })} placeholder='username' />
          Email:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl w-full' {...register("email", { required: true })} placeholder='your_email@gmail.com' />
          password:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl w-full' {...register("password", { required: true })} type='password' placeholder='password(***)' />
          <button className='px-4 py-1 bg-blue-500  text-white rounded text-thin'>Register</button>
          <p>Already have an account?
            <NavLink to="/Login" className={({ isActive }) => isActive ? "text-pink-600" : "text-blue-500 font-bold"}> Login</NavLink>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Register