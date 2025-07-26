// import "./login.css"

// const Login = () => {
//     return (
//         <div className='absolute  w-[60%] m-auto  z-6 rounded-2xl p-4   shadow-lg text-center inset-shadow-sm inset-shadow-black-400 shadow-xl/30 glass-card'>
//             <div className=" w-[95%] h-full flex items-center justify-center flex-col text-white  m-10">
//                 <h1 className='text-4xl font-bold mb-6 mt-5'>Login / Sign</h1>
//                 <p className='mb-8'>Please enter your detail</p>
//                 <form action="">
//                     <span className='span  pb-4'>
//                         <label for="email" className='mt-4'>E-mail:</label><br />
//                         <input type="email" name="" id="email" placeholder="Enter a Email" required /><br /><br />
//                         <label for="password">Password:</label><br />
//                         <input type="password" name="" id="password"  placeholder="Enter a password"
//                             required /><br /><br />
//                         <input type="submit" value="Login" />
//                     </span>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login
import Spline from "@splinetool/react-spline"
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

const Login = () => {
    const navigator = useNavigate()
    const { register, handleSubmit } = useForm()
    const onSubmit = (user) => {
        const user1 = JSON.parse(localStorage.getItem("user")) || false;
        const finduser = (user1?.email == user.email && user?.password == user1.password) || false
        if (!finduser) {
            toast('🦄 Wow wrong email or password!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            user1.login = true
            localStorage.setItem("user", JSON.stringify(user1));
            navigator("/")
        }
    }

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full z-1">
                <Spline scene="https://prod.spline.design/Ak0uBq8modK0O1Ze/scene.splinecode" />
            </div>
            <div className="h-full w-[92%] md:w-fit  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100 z-2  m-auto p-10 relative mt-20 md:mt-[6%] ">
                <h1 className="text-center text-2xl font-bold text-gray-700">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full gap-5 justify-start items-start pt-5'>
                    Email:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl w-full' {...register("email", { required: true })} placeholder='email' />
                    Password:<input className='mb-3 outline-0 border-b p-2 text-2xl md:text-4xl w-full' {...register("password", { required: true })} type='password' placeholder='password' />
                    <button className='px-4 py-1 bg-blue-500 text-white rounded text-thin'>Login</button>
                    <div className="flex w-full">
                    <p>Don't  have an account?
                        <NavLink to="/Register" className={({ isActive }) => isActive ? "text-pink-600" : "text-blue-500 font-bold"}> Register</NavLink>
                    </p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login