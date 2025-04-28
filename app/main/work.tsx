import React from 'react';
import Image from 'next/image';


const Work: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">My Work</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Image
                        src="/path/to/image1.jpg"
                        alt="Project 1"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Project 1</h2>
                        <p className="text-gray-600">Description of Project 1.</p>
                    </div>
                </div>
                {/* Add more project cards here */}
            </div>
        </div>
    );
}

export default Work;