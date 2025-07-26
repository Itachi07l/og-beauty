import { NavLink, useNavigate } from 'react-router-dom'
import ScrambledText from '../components/ScrambledText'

const Nav = () => {
    const navigator = useNavigate()
    const user1 = JSON.parse(localStorage.getItem("user")) || false
    const logoutHandler = () => {
        const user = JSON.parse(localStorage.getItem("user"))
        user.login = false
        localStorage.setItem("user", JSON.stringify(user));
        navigator("/")
    }
    let nav = (e) => {
        e.target.children[0].classList.toggle("rotate-40")
        e.target.children[1].classList.toggle("-rotate-49")
        if (e.target.nextSibling.classList.contains("-top-800")) {
            e.target.nextSibling.classList.add("top-1")
            e.target.nextSibling.classList.remove("-top-800")
            document.querySelector(".img1").classList.add("invert-100")
            e.target.children[0].classList.add("invert-100")
            e.target.children[1].classList.add("invert-100")
        } else {
            e.target.children[1].classList.remove("invert-100")
            e.target.children[0].classList.remove("invert-100")
            e.target.nextSibling.classList.remove("top-1")
            e.target.nextSibling.classList.add("-top-800")
            document.querySelector(".img1").classList.remove("invert-100")
        }
    }
    return (
        <div className="nav px-8 py-2 flex justify-between items-center tra sticky top-0 z-4 bg-transparent w-full" >
            <img src="./home-page/img1.avif" alt="" className='w-20 img1 tra ' />




            <div className='flex flex-col gap-2 items-center justify-center hover:justify-between transition delay-50 duration-600 ease-in-out  h-8 ' onClick={nav}>
                <div className='h-1 w-15 bg-gray-900 tra'></div>
                <div className='h-1 w-15 bg-gray-900 tra'></div>
            </div>


            <div className='h-full w-full fixed -z-1 nav1 tra  -top-800  bg-gradient-to-tr  from-sky-400 to to-cyan-800  to-fuchsia-400" right-0'>
                <div className='mt-10 flex justify-end md:justify-between p-10 text-white'>
                    <h1 className='hidden md:block text-7xl pt-20 font-semibold '>We are  based in Milano <br /> and work remotely. </h1>

                    <div className='mt-10'>
                        <div className='text-6xl md:text-8xl xl:text-8xl text-end font-simibold capitalize tracking-tighter leading-none '>
                            <ScrambledText
                                className="scrambled-text-demo"
                                radius={50}
                                duration={1.0}
                                speed={0.4}
                                scrambleChars={".:"}
                            >
                                <NavLink to="/" className={({ isActive }) => isActive ? "text-pink-600" : ""}>Home</NavLink><br />
                                <NavLink to="/product" className={({ isActive }) => isActive ? "text-pink-600" : ""}>Product</NavLink><br />
                                <NavLink to="/profile" className={({ isActive }) => isActive ? "text-pink-600" : ""}>Profile</NavLink><br />
                                <NavLink to="/order" className={({ isActive }) => isActive ? "text-pink-600" : ""}>Order</NavLink><br />
                                <NavLink to="/addtocart" className={({ isActive }) => isActive ? "text-pink-600" : ""}>Cart</NavLink><br />
                            </ScrambledText>
                        </div>
                        <div className='hidden md:block text-2xl text-end font-simibold capitalize mt-10 pt-10'>
                            <ScrambledText
                                className="scrambled-text-demo"
                                radius={50}
                                duration={1.0}
                                speed={0.4}
                                scrambleChars={".:"}
                            ><h2>privacy policy</h2>
                                <h2>Terms service</h2>
                                <h2>Disclaimer</h2>
                                <h2>404</h2>
                            </ScrambledText>
                        </div>
                    </div>
                    <div className='fixed top-8 right-40 text-black'>
                        {user1?.login ? (<>
                            <div className='hidden md:flex items-center gap-4'>
                                <div className='flex items-center gap-4'>
                                    <NavLink to="/order"><i className="ri-shopping-bag-3-line text-2xl"></i></NavLink>
                                    <NavLink to="/addtocart"><i className="ri-shopping-cart-2-line text-2xl"></i></NavLink>
                                    <NavLink to="/profile"><i className="ri-account-pin-circle-line text-2xl"></i></NavLink>
                                </div>
                                <h1 onClick={logoutHandler} className='rounded text-thin'>Logout <i class="ri-logout-circle-r-line"></i></h1>
                            </div>
                        </>
                        ) : <NavLink to="/Login" className={({ isActive }) => isActive ? "text-pink-600" : ""}>Login <i class="ri-logout-circle-line"></i></NavLink>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nav