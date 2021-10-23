import React from "react";

export default function ItemsInBasket({
  item,
  removeItem,
  basketItems,
  setBasket,
  currencyConverter,
  setShowHide,
}) {
  const source = `https://dummyimage.com/210x130/${item.imageColor}/${item.imageColor}`;

  function amount() {
    if (item.amount === 1) {
      return "";
    } else {
      return `x${item.amount}`;
    }
  }

  function removeItem(id) {
    const newBasket = [...basketItems];
    const basket = newBasket.filter((items) => items.id !== id);
    setBasket([...basket]);

    if (basketItems.length === 1) {
      setShowHide("mb-4 top-0 right-0 mr-4 mt-20 fixed invisible");
    }
  }

  return (
    <div className="mb-6">
      <div className="block relative h-24 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block rounded"
          src={source}
        />
        <button
          data-remove-from-cart-button
          className="absolute top-0 right-0 bg-black rounded-tr text-white w-6 h-6 text-lg flex justify-center items-center"
          onClick={() => removeItem(item.id)}
        >
          &times;
        </button>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex items-center title-font">
          <h2 className="text-gray-900 text-lg font-medium">{item.name}</h2>
          <span className="text-gray-600 text-sm font-bold ml-1">
            {amount()}
          </span>
        </div>
        <div>{currencyConverter(item.priceCents / 100)}</div>
      </div>
    </div>
  );
}
