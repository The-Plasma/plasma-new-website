"use client"
import Image from 'next/image';

// ClientShowcase component displays a grid of client logos/rectangles
const ClientShowcase: React.FC = () => {

    const images = [
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        { normal: '/about/one.png', hover: '/about/oneh.png' },
        // ...and so on for all 24 rectangles
    ];


    // Generate 24 rectangles for the grid
    const renderRectangles = () => {
        return images.map((img, index) => (
            <div
                key={index}
                className="relative border border-gray-600 flex items-center justify-center p-6 h-32 transition-all hover:border-white group overflow-hidden"
            >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-400 opacity-60"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-400 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-400 opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-400 opacity-60"></div>

                {/* Images */}
                <div className="w-full h-full flex items-center justify-center relative">
                    {/* Normal image */}
                    <Image
                        src={img.normal}
                        alt={`Client ${index + 1}`}
                        fill
                        className="object-contain absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    />

                    {/* Hover image */}
                    <Image
                        src={img.hover}
                        alt={`Client ${index + 1} hover`}
                        fill
                        className="object-contain absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />

                </div>
            </div>
        ));
    };


    return (
        <div className="min-h-screen w-screen bg-black text-white flex flex-col">
            {/* Header text */}
            <div className="pt-16 pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">We Build Innovations</h1>
            </div>

            {/* Rectangle grid */}
            <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 md:px-8 lg:px-12 pb-12`}>
                {renderRectangles()}
            </div>
        </div>
    );
};

export default ClientShowcase;