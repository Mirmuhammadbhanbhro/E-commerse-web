import Link from "next/link";

function Header() {
  return (
    <div className="w-full h-[80px] flex justify-center items-center border-b-2">
      <div className="w-[90%] max-w-7xl h-full flex justify-between items-center">
        {/* Left side */}
        <div>
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-semibold text-blue-500">MORENT</h1>
        </div>

        {/* Right side */}
        <div>
          <ul className="hidden md:flex gap-x-5">
            <li>
              <Link className="hover:underline" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={"/"}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={"/"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={"/"}>
                Signup
              </Link>
            </li>
          </ul>
          {/* Mobile menu */}
          <div className="flex md:hidden">
            <button className="text-blue-500 text-2xl">☰</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
