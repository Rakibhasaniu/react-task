import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">
                    TOUR
                </div>

                <div className="block lg:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-white focus:outline-none">
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M4 6h16M4 12h16m-7 6h7" 
                            />
                        </svg>
                    </button>
                </div>

                <div className={`lg:flex space-x-4 ${isOpen ? "block" : "hidden"} lg:block`}>
                    <a href="#home" className="text-white hover:text-gray-400">Home</a>
                    <a href="#about" className="text-white hover:text-gray-400">About</a>
                    <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
                    <a href="#modal" className="text-white hover:text-gray-400">Modal</a>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
