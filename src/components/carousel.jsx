import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const PhotoCarousel = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div>
    <h1 className="text-2xl font-semibold ml-10 mt-5 mb-4">Known to provide the accurate charts.</h1>
    <div className="relative overflow-hidden w-5/6 mt-5 mx-auto mb-9 h-84 md:h-64 lg:h-72">
      <Transition
        show={true}
        enter="transition-opacity duration-3000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-3000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="w-full h-96 absolute top-0 left-0">
          <div className="w-full h-full bg-indigo-200 bg-opacity-50 flex items-center justify-center">
            <img
              src={photos[currentPhotoIndex]}
              alt={`Photo ${currentPhotoIndex + 1}`}
              className="max-w-full h-84 object-cover"
            />
          </div>
        </div>
      </Transition>
    </div>
    </div>
  );
};

export default PhotoCarousel;
