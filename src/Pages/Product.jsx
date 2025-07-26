import { useState, useEffect } from 'react';
import TargetCursor from '../components/TargetCursor';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Product = ({ product }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    let initialData=product
    const [products] = useState(initialData);
    const [filtered, setFiltered] = useState(initialData);
    const [priceRange, setPriceRange] = useState([0, 799]);

    useEffect(() => {
        const newFiltered = products.filter(p => {
            const price = Number(p.price || 0);
            return price >= priceRange[0] && price <= priceRange[1];
        });
        setFiltered(newFiltered);
    }, [priceRange, products]);

    const handleSort = (e) => {
        const value = e.target.value;
        let sorted = [...filtered];

        if (value === "1") sorted.sort((a, b) => a.title.localeCompare(b.title));
        else if (value === "2") sorted.sort((a, b) => b.title.localeCompare(a.title));
        else if (value === "3") sorted.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
        else if (value === "4") sorted.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));

        setFiltered(sorted);
    };

    useEffect(() => {
        let filteredList = products.filter((p) => {
            const price = Number(p.price || 0);
            const matchText = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.desc.toLowerCase().includes(searchTerm.toLowerCase());
            return price >= priceRange[0] && price <= priceRange[1] && matchText;
        });
        setFiltered(filteredList);
    }, [priceRange, searchTerm, products]);

    const handleSearchChange = (e) => {
        const val = e.target.value;
        setSearchTerm(val);
        const matched = products.filter(p =>
            p.title.toLowerCase().includes(val.toLowerCase())
        ).map(p => p.title);
        setSuggestions(val ? matched.slice(0, 5) : []);
    };

    const handleSuggestionClick = (val) => {
        setSearchTerm(val);
        setSuggestions([]);
    };



    return (
        <>
        <div className='w-full h-full'>
               <TargetCursor
                spinDuration={2}
                hideDefaultCursor={true}
            />
            <div className="p-4 md:p-10 w-full h-25  flex flex-col md:flex-row gap-10 items-center justify-between  bg-gray-50">
                <div><h1 className='text-xl md:text-3xl font-[Monoton] text-gray-700 '>Premium Fragrancer</h1>
            </div>

                {/* 🔍 Search Bar */}
                <div className="w-full md:w-1/2 relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search products..."
                        className="border border-gray-300 w-full px-2 md:px-5 py-3 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                    />
                    {suggestions.length > 0 && (
                        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded mt-2 shadow-lg max-h-60 overflow-y-auto">
                            {suggestions.map((s, i) => (
                                <li
                                    key={i}
                                    onClick={() => handleSuggestionClick(s)}
                                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm"
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* ↕️ Sort Dropdown */}
                <div className="flex items-center justify-start gap-3 p-4   bg-white rounded-lg shadow-md border border-gray-200 w-full md:w-auto">
                    <i className="ri-filter-3-fill text-blue-600 text-xl"></i>
                    <span className="text-sm font-medium text-gray-800">Sort by</span>
                    <select
                        onChange={handleSort}
                        className="border border-gray-300 text-sm text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="1">Alphabetically A-Z</option>
                        <option value="2">Alphabetically Z-A</option>
                        <option value="3">Price low-to-high</option>
                        <option value="4">Price high-to-low</option>
                    </select>
                </div>

            </div>




            {/* Product Display */}
            <div className='h-full grid mt-15 md:mt-2 md:grid-cols-3 grid-cols-2 gap-2 md:gap-6 p-2 md:p-6'>
                {filtered.map((e) => (
                    <div key={e.id} className='w-full border-2 border-gray-300 rounded-lg overflow-hidden'>
                        <img src={e.img} alt="" className='w-full mb-4' />
                        <div className='text-center text-gray-700'>
                            <h1 className='text-sm md:text-xl font-bold md:font-semibold mb-1'>{e.title}</h1>
                            <p className='text-[12px] mb-2'>{e.desc}</p>
                            <p className='text-lg mb-3'>
                                ₹{e.price || 'N/A'}
                                {e.price && (
                                    <span className='text-gray-500 line-through ml-2'>
                                        ₹{Number(e.price) + 151}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div className='mb-4 text-center '>
                            <Link to={`/product/${e.id}`}>
                                <button className='text-sm md:text-xl cursor-target w-11/12 m-auto border border-gray-500 p-2 font-medium hover:bg-black hover:text-white'>
                                    QUICK ADD
                                </button></Link>

                        </div>
                    </div>
                ))}
            </div>

            {/* Slider Styles */}
            <style jsx>{`
                .price-slider {
                    height: 6px;
                    background: #000;
                    border-radius: 3px;
                    position: relative;
                }
                .slider-thumb {
                    height: 20px;
                    width: 20px;
                    background: white;
                    border: 2px solid black;
                    border-radius: 50%;
                    cursor: grab;
                    top: -7px;
                }
                .slider-track {
                    background: black;
                }
            `}</style>
         <Footer />
        </div>
        </>
    );
};

export default Product;
