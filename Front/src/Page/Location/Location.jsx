import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const locations = [
  {
    id: 1,
    title: "West Seattle",
    description:
      "A beautiful neighborhood with stunning views of the Puget Sound and Seattle skyline.",
    coordinates: { lat: 47.531, lng: -122.397 },
    mapLink:
      "https://www.google.com/maps/dir//LML+Repair+-+Same+Day+Phone+%26+Tablet+Repair+3400+Harbor+Ave+SW+STE+%23301+Seattle,+WA+98126",
    image:
      "https://www.lmlrepair.com/_next/image?url=%2Fimages%2Fwestseattle%2F1.png&w=640&q=75",
    hours: "8am - 7pm Everyday",
    address: "3400 Harbor Ave SW STE #301, Seattle, WA 98126, USA",
    email: "westseattle@lmlrepair.com",
    phone: "206-832-5834",
  },
  {
    id: 2,
    title: "Seattle",
    description:
      "The Emerald City, known for its iconic Space Needle, vibrant culture, and coffee shops.",
    coordinates: { lat: 47.6097, lng: -122.3331 },
    mapLink:
      "https://www.google.com/maps/dir//LML+Repair+-+Same+Day+Phone+%26+Tablet+Repair+700+NW+42nd+St+STE+%23333+Seattle,+WA+98107",
    image:
      "https://www.lmlrepair.com/_next/image?url=%2Fimages%2Fseattle%2F1.png&w=256&q=75",
  },
  {
    id: 3,
    title: "North Seattle",
    description:
      "A suburban area with a peaceful environment, close to parks and nature trails.",
    coordinates: { lat: 47.701, lng: -122.333 },
    mapLink:
      "https://www.google.com/maps/dir//LML+Repair+-+Same+Day+Phone+,+iPad+,+Macbook+Repair+10015+Lake+City+Way+NE+STE+%23231+Seattle,+WA+98125",
    image:
      "https://www.lmlrepair.com/_next/image?url=%2Fimages%2Fnorthseattle%2F1.png&w=256&q=75",
  },
];

const Location = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLocation(null);
  };

  return (
    <section id="location" className="py-12 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Locations</h2>

        {/* Location List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="relative bg-gray-800 p-6 rounded-lg shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl hover:bg-yellow-500 hover:text-white transition-transform duration-300 ease-in-out"
              onClick={() => handleLocationClick(location)}
            >
              {/* Image */}
              <img
                src={location.image}
                alt={location.title}
                className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-3xl text-yellow-400 group-hover:text-white transition-all duration-300" />
                <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-white">
                  {location.title}
                </h3>
              </div>
              <p className="text-yellow-200 group-hover:text-white mt-4 transition-all duration-300">
                {location.description}
              </p>
              <a
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 group-hover:text-white mt-2 block transition-all duration-300"
              >
                View Directions on Google Maps
              </a>

              {/* Tooltip */}
              <div className="absolute bottom-[-40px] left-0 bg-black text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to view details
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cursor Follower */}
      <div
        className="cursor-follower absolute w-6 h-6 bg-yellow-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      />

      {/* Modal - View Location Details */}
      {isModalOpen && selectedLocation && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500 opacity-0 visible opacity-100">
          <div className="bg-white rounded-lg w-3/4 lg:w-1/2 p-6 relative transform scale-95 transition-all duration-300">
            <button
              className="absolute top-4 right-4 text-gray-600 text-xl hover:text-red-600"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-black mb-4">
              {selectedLocation.title}
            </h3>
            <p className="text-black mb-4">{selectedLocation.description}</p>

            <div className="mt-4">
              <h4 className="font-semibold text-black">Details</h4>
              <ul className="list-disc pl-6">
                <li>Location: {selectedLocation.title}</li>
                <li>Description: {selectedLocation.description}</li>
                <li>
                  <a
                    href={selectedLocation.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View Directions on Google Maps
                  </a>
                </li>
                {selectedLocation.hours && (
                  <li className="mt-2">
                    <span className="font-semibold">Hours:</span>{" "}
                    {selectedLocation.hours}
                  </li>
                )}
                {selectedLocation.address && (
                  <li className="mt-2">
                    <span className="font-semibold">Address:</span>{" "}
                    {selectedLocation.address}
                  </li>
                )}
                {selectedLocation.email && (
                  <li className="mt-2">
                    <FaEnvelope className="inline mr-2" />
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href={`mailto:${selectedLocation.email}`}
                      className="text-blue-500"
                    >
                      {selectedLocation.email}
                    </a>
                  </li>
                )}
                {selectedLocation.phone && (
                  <li className="mt-2">
                    <FaPhoneAlt className="inline mr-2" />
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href={`tel:${selectedLocation.phone}`}
                      className="text-blue-500"
                    >
                      {selectedLocation.phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Location;
