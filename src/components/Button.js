import React from "react";

export default function Button({ showHideCart, basketItems }) {
  function amountInBasket() {
    if (basketItems == null) {
      return "";
    } else {
      return basketItems.length;
    }
  }

  function hideShowBasket() {
    if (basketItems == null || basketItems.length === 0) {
      return "fixed top-0 right-0 mr-4 mt-4 w-12 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-700 invisible";
    } else {
      return "fixed top-0 right-0 mr-4 mt-4 w-12 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-700";
    }
  }

  return (
    <button className={hideShowBasket()} onClick={(e) => showHideCart(e)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <div className="bg-red-500 rounded-full text-xs absolute w-6 h-6 flex justify-center items-center right-0 bottom-0 transform translate-x-2 translate-y-2">
        {amountInBasket()}
      </div>
    </button>
  );
}
