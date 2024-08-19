import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header max-width py-5">
        <div className="flex items-center justify-between">
          <article className="flex items-center">
            <img src={logo} alt="logo is here" />

            <nav className="hidden md:block ml-12">
              <ul className="flex  items-start justify-start">
                <li>
                  <button className="text-slate-400">Features</button>
                </li>
                <li className="my-5 md:my-0 md:mx-5">
                  <button className="text-slate-400">Pricing</button>
                </li>
                <li>
                  <button className="text-slate-400">Resources</button>
                </li>
              </ul>
            </nav>
          </article>

          {isOpen && (
  <div
    className="absolute top-20 inset-x-0 mx-auto rounded items-center bg-slate-900 text-slate-200 text-center py-10
       md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex
       md:items-center md:justify-center"
  >
    <nav className="md:hidden">
      <ul className="flex flex-col items-center justify-center ">
        <li>
          <button>Features</button>
        </li>
        <li className="my-5 ">
          <button>Pricing</button>
        </li>
        <li>
          <button>Resources</button>
        </li>
      </ul>
    </nav>
    <ul className="flex flex-col justify-center items-center ">
      <li className="my-5 ">
        <button className="text-slate-400">Login</button>
      </li>
      <li>
        <button className="btn-cta rounded-full">Sign Up</button>
      </li>
    </ul>
  </div>
)}

<div className="hidden md:flex md:justify-center">
  <ul className="flex items-center ml-5">
    <li className="my-5 md:my-0 md:mr-5">
      <button className="text-slate-400">Login</button>
    </li>
    <li>
      <button className="btn-cta rounded-full">Sign Up</button>
    </li>
  </ul>
</div>


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="uppercase text-sm tracking-wide md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  );
}
