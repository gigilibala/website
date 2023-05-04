import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SideBar() {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);

  return (
    <section>
      {/* Mobile menu bar */}
      <div className=" bg-gray-800 text-gray-300 flex items-center justify-between md:hidden">
        {/* Replace with your picture maybe. */}
        <Link href="/" className="p-4">
          Amin Hassani
        </Link>

        <button
          className="p-4 focus:outline-none focus:bg-grey-700"
          onClick={() => setShowSideBar((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-gray-800 text-gray-300 px-3 absolute inset-y-0 left-0 transform ${
          showSideBar ? "-translate-x-full" : ""
        } md:relative md:translate-x-0 transition duration-200 ease-in-out min-h-screen`}
      >
        <div className="px-3 py-3">
          <Image
            src={"/spongebob.png"}
            alt={"Amin Hassani"}
            width={200}
            height={200}
          />
        </div>
        <nav className="uppercase">
          <Link
            href="/"
            className="block py-2 px-4 rounded transition duration-100 hover:bg-gray-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 px-4 rounded transition duration-100 hover:bg-gray-600"
          >
            About
          </Link>
          <Link
            href="/impossible_list"
            className="block py-2 px-4 rounded transition duration-100 hover:bg-gray-600"
          >
            Impossible List
          </Link>
          <Link
            href="/learning"
            className="block py-2 px-4 rounded transition duration-100 hover:bg-gray-600"
          >
            Learning
          </Link>
        </nav>
      </aside>
    </section>
  );
}
