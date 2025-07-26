import { lazy, useEffect, useState } from 'react';
const CircularGallery = lazy(() => import('../components/CircularGallery'))
const FluidGlass = lazy(() => import('../components/FluidGlass'))
const FlowingMenu = lazy(() => import('../components/FlowingMenu'))
const ImageTrail = lazy(() => import('../components/ImageTrail'))
const TextPressure = lazy(() => import('../components/TextPressure'))
const ScrambledText = lazy(() => import('../components/ScrambledText'))
import "./home.css"
import AnimatedContent from '../components/AnimatedContent';
import Footer from './Footer';


const Home = () => {
    const demoItems = [
        { link: '#', text: 'Parfum Shadow', image: './hor/i1.webp' },
        { link: '#', text: 'Parfum Gallant', image: './hor/i2.webp' },
        { link: '#', text: 'Parfum Smokey', image: './hor/i3.webp' },
        { link: '#', text: 'Parfum Woody', image: './hor/i4.webp' }
    ];

    const [isNextHovered, setIsNextHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        let timeoutId;

        if (isNextHovered) {
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        } else {
            setIsVisible(true);
            clearTimeout(timeoutId);
        }
        return () => clearTimeout(timeoutId);
    }, [isNextHovered]);
    return (
        <>

            <div className='h-full w-full'>
                <div className={`${isNextHovered ? "opacity-0 pointer-events-none hidden" : "opacity-100 block"}  transition-opacity duration-300   w-full h-full bg-[url(./home-page/img2.avif)] relative -z-1 pb-4 md:pb-20 -top-20 `}>
                    <div className='flex items-center justify-between md:pt-[12rem] pt-[17rem] bg-center text-white md:px-20 p-4 gap-[60px] md:gap-1 flex-col-reverse md:flex-row'>
                        <AnimatedContent
                            distance={300}
                            direction="horizontal"
                            reverse={true}
                            duration={1.2}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1.8}
                            threshold={0.8}
                            delay={0.3}
                        >

                            <div >
                                <h1 className='md:text-5xl text-4xl font-medium md:leading-15 hidden md:block'>OG Beauty <br /> Premium Fragrancer</h1>
                                <h1 className='md:text-2xl text-2xl font-medium md:leading-20 block md:hidden '>One subscribte  ultaimate, desgin iteration</h1>
                                <p className='text-3xl font-medium mt-2 md:mt-8 tracking-tight hidden md:block'> your one-stop destination  <br />for high-quality beauty </p>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={300}
                            direction="horizontal"
                            reverse={false}
                            duration={1.2}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1.8}
                            threshold={0.8}
                            delay={0.3}
                        >
                            <div>
                                <h1 className='md:text-6xl hidden md:block tracking-tight font-[font-serif]'>the creative <br /> Fragrance </h1>
                                <h1 className='md:text-6xl block md:hidden text-4xl tracking-tight font-[font-serif]'>the creative  Agency </h1>
                            </div>
                        </AnimatedContent>
                    </div>
                    <div className='md:text-[15rem] pb-30 pt-[50px] md:pb-[100px] md:pt-[70px] text-6xl text-orange-600 text-center'>
                        <AnimatedContent
                            distance={250}
                            direction="vertical"
                            reverse={true}
                            duration={2}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.3}
                        >  OG Luxury
                        </AnimatedContent>

                    </div>

                </div>


                <div style={{ position: 'relative' }} className='h-screen overflow-x-hidden bg-transparent -top-20 ' onMouseEnter={() => setIsNextHovered(!isNextHovered)}
                    onMouseLeave={() => setIsNextHovered(isNextHovered)} >
                    <FluidGlass
                        mode="lens"
                        lensProps={{
                            scale: 0.25,
                            ior: 1.15,
                            thickness: 5,
                            chromaticAberration: 0.1,
                            anisotropy: 0.01
                        }}
                    />
                </div>  

                <div style={{ position: 'relative', overflow: '' }} className='mb-10 h-50 md:h-180' >
                    <ImageTrail
                        items={[
                            './circular/img1.avif',
                            './circular/img2.avif',
                            './circular/img3.avif',
                            './circular/img4.avif',
                            './circular/img5.avif',
                            './circular/img6.avif',
                            './circular/img7.avif',
                            './circular/img8.avif',
                        ]}
                        variant={2}
                    />
                </div> 

                 <div style={{ position: 'relative' }} className='mb-10 md:h[1000px] h-[714px] md:mb-30' >
                    <ScrambledText
                        className="scrambled-text-demo"
                        radius={100}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars={".:"}
                    >

                        <h1 className='text-center text-gray-700 text-4xl mb-5'>
                            ------------------ OUR PREMIUM COLLECTION --------------------</h1>
                    </ScrambledText>
                    <CircularGallery bend={3} textColor="#000" borderRadius={0.05} scrollEase={0.02} />
                </div> 

                 <br />
                <hr />

                <div className="md:p-10 p-2 md:mt-10" >

                    <ScrambledText
                        className="scrambled-text-demo"
                        radius={100}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars={".:"}
                    >
                        <div className="flex gap-2 md:gap-4 items-center justify-baseline border-b-2 pb-4 border-gray-700 mb-8">
                            <h1 className="md:text-4xl text-2xl text-gray-600 font-medium">Our Brand </h1>
                            <span className="h-10 w-[2px] bg-gray-700 "></span>
                            <p className="md:text-2xl text-xl text-gray-600 ">mission and milestones</p>
                        </div>
                    </ScrambledText>
                    <div className="mt-8 p-5" >
                        <div>
                            <ScrambledText
                                className="scrambled-text-demo"
                                radius={100}
                                duration={1.2}
                                speed={0.5}
                                scrambleChars={".:"}
                            >
                                <h1 className="md:text-6xl text-2xl  uppercase md:w-[50%] w-full text-gray-700 mb-6">DISCOVER OG Beauty COLLECTION</h1>
                                <p className="md:text-xl text-sm text-gray-600 pt-4 md:w-[55%] w-full">Presenting OG Beauty, your one-stop destination for high-quality beauty and personal care products at prices that won't break the bank. We're dedicated to helping you look and feel your best without emptying your wallet.</p>
                            </ScrambledText>
                        </div>
                        <div className="mt-10 rounded overflow-hidden flex gap-8 w-full flex-col md:flex-row items-center">


                            <img src="./home-page/img1.webp" alt="" className="rounded-2xl md:mt-5 md:w-[60%] w-full object-cover" />
                            <div className="flex flex-col gap-4 items-center pt-4">
                                <ScrambledText
                                    className="scrambled-text-demo"
                                    radius={100}
                                    duration={1.2}
                                    speed={0.5}
                                    scrambleChars={".:"}
                                >

                                    <h1 className="md:text-2xl text-xl uppercase text-gray-700 ">OG Luxury Extrait De Parfum Shadow Intense – India’s Strongest Perfume with 40% Concentration, 100 ml</h1>
                                    <p className="md:text-xl text-sm text-gray-600 pt-2 self-start">Lavender, Sage & Amber | India’s Strongest Perfume</p>
                                </ScrambledText>
                            </div>
                        </div>
                    </div>
                </div>
                <hr /> 



                <hr />
                <div className="md:p-10 p-2 " >
                    <ScrambledText
                        className="scrambled-text-demo"
                        radius={100}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars={".:"}
                    >
                        <h1 className="md:text-6xl text-2xl  uppercase md:w-[50%] w-full text-gray-700 mb-6 border-b-2 pb-4 border-gray-400">
                            Straight from the Premium</h1>
                        <p className="md:text-4xl text-sm text-gray-600 pt-4 md:w-[60%] w-full ">Handpicked collection of design insights and unique perspectives </p>
                    </ScrambledText>
                    <div className='mt-8'>
                        <div className="flex gap-5 mt-5 w-full ">
                            <img src="./home-page/img2.webp" alt="" className="object-contain md:w-[50%] w-[48%] rounded-2xl" />
                            <img src="./home-page/img3.webp" alt="" className="object-contain md:w-[50%] w-[48%] rounded-2xl" />
                        </div>
                        <div className="flex gap-5 mt-5 w-full ">
                            <img src="./home-page/img4.webp" alt="" className="object-contain md:w-[50%] w-[48%] rounded-2xl" />
                            <img src="./home-page/img5.webp" alt="" className="object-contain md:w-[50%] w-[48%] rounded-2xl" />
                        </div>
                    </div>
                </div>
                <hr /> 

                {/* <Spline scene="https://prod.spline.design/IVso2Ib9RAHl-QSC/scene.splinecode" />     */}

                 <div style={{ height: '600px', position: 'relative' }} className='md:mt-10' >
                    <FlowingMenu items={demoItems} />
                    <hr />
                </div> 

                  <div style={{ position: 'relative', }} className='md:h-fit h-[200px]' >
                    <TextPressure
                        text="OG Beauty!"
                        fontFamily="Ephesis"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#000"
                        strokeColor="#000"
                        minFontSize={36}
                    />
                </div>  
            </div >
              <Footer />  
        </>
    )
}

export default Home