import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black py-8 flex flex-col justify-center items-center sm:py-16">
      <div className="relative py-6 sm:max-w-4xl w-full sm:mx-auto animate-fade-in flex flex-col sm:flex-row items-center sm:justify-between">
        {/* Form Section */}
        <div className="relative py-6 sm:max-w-md w-full sm:mx-auto animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
          <div className="text-yellow-400 relative px-6 py-8 bg-gray-900 shadow-xl sm:rounded-lg animate-slide-up">
            <div className="text-center pb-6">
              <h1 className="text-3xl font-semibold animate-text-bounce">
                Contact Us
              </h1>
              <p className="text-yellow-300 text-sm mt-2">
                We're here to help. Fill in the form below to reach us.
              </p>
            </div>

            <form>
              <input
                className="shadow mb-4 border border-gray-600 bg-black rounded w-full py-3 px-4 text-yellow-300 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400 animate-fade-in"
                type="text"
                placeholder="Full Name"
                name="name"
              />

              <input
                className="shadow mb-4 border border-gray-600 bg-black rounded w-full py-3 px-4 text-yellow-300 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400 animate-fade-in delay-100"
                type="email"
                placeholder="Email Address"
                name="email"
              />

              <input
                className="shadow mb-4 border border-gray-600 bg-black rounded w-full py-3 px-4 text-yellow-300 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400 animate-fade-in delay-200"
                type="text"
                placeholder="Subject"
                name="_subject"
              />

              <textarea
                className="shadow mb-4 border border-gray-600 bg-black rounded w-full py-3 px-4 text-yellow-300 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400 animate-fade-in delay-300"
                placeholder="Message"
                name="message"
                style={{ height: "120px" }}
              ></textarea>

              <div className="flex justify-between gap-4">
                <button
                  type="submit"
                  className="shadow bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300 animate-scale-up"
                >
                  Send ➤
                </button>
                <button
                  type="reset"
                  className="shadow bg-gray-700 hover:bg-gray-800 text-yellow-300 text-sm font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 animate-scale-up delay-100"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Side Text Section */}
        <div className="sm:w-1/2 text-center sm:text-left text-yellow-300">
          <h2 className="text-3xl font-semibold mb-6">
            We'd Love to Hear From You
          </h2>
          <p className="text-sm mb-4">
            Whether you have a question, feedback, or simply want to say hello,
            we're here for you. Our team is always available to assist with any
            inquiries.
          </p>
          <p className="text-sm">
            Please provide your details in the form, and we'll respond as soon
            as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
