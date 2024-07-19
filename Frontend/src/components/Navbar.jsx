

function Navbar() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 shadow-lg h-16 fixed">
        <div className="flex justify-between">
          <h1 className="text-2xl cursor-pointer font-bold">
            Word<span className="text-3xl text-red-500">To</span>PDF
          </h1>
          <h1 className="mt-1 text-2xl cursor-pointer font-bold hover:scale-125 duration-300">
            Home
          </h1>
          <h1 className="mt-1 text-2xl cursor-pointer font-bold hover:scale-125 duration-300">
            About
          </h1>
          <h1 className="mt-1 text-2xl cursor-pointer font-bold hover:scale-125 duration-300">
            Contact
          </h1>
          <h1 className="mt-1 text-2xl cursor-pointer font-bold hover:scale-125 duration-300">
            Information
          </h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
