import PropTypes from "prop-types";

function Navbar({ title, Aboutus, mode, changeColor }) {
  return (
    <div>
      <nav className={`border-gray-200 bg-${mode}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap text-${
                mode === "black" ? "white" : "black"
              }`}
            >
              {title}
            </span>
          </a>
          <div className="flex md:order-2">
            <label
              htmlFor="toggleEigh"
              className="flex items-center cursor-pointer select-none text-dark dark:text-white"
            >
              <div className="relative">
                <input
                  id="toggleEigh"
                  type="checkbox"
                  className="peer toggleEight sr-only"
                  onChange={changeColor}
                />
                <div className="h-5 transition rounded-full  shadow-inner box bg-[blue] dark:bg-dark-2 w-14"></div>
                <div className="absolute left-0 flex items-center justify-center transition bg-white rounded-full dot shadow-switch-1 -top-1 h-7 w-7 dark:bg-dark-3 peer-checked:translate-x-full  text-dark peer-checked:text-white">
                  <span className="w-4 h-4 border border-current rounded-full bg-inherit active"></span>
                </div>
              </div>
            </label>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 text-${
                mode == "black" ? "white" : "black"
              } font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}
            >
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3  rounded md:bg-transparent md:p-0"
                >
                  {Aboutus}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded md:bg-transparent md:p-0"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Aboutus: PropTypes.string,
  mode: PropTypes.string,
  changeColor: PropTypes.func,
};
