import React from "react";
import Store from "./Store";
import items from "../items.json";

function App() {
  return (
    <>
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
          <nav className="flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="">
              Home
            </a>
            <a
              className="mr-5 border-b-2 border-blue-500 hover:text-gray-900"
              href=""
            >
              Store
            </a>
            <a className="mr-5 hover:text-gray-900" href="">
              Team
            </a>
          </nav>
        </div>
      </header>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {items.map((item) => (
              <Store key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
