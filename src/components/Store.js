import React from "react";

export default function Store(props) {
  const imageSource = `https://dummyimage.com/420x260/${props.item.imageColor}/${props.item.imageColor}`;
  const { addToBasket, currencyConverter } = props;

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={imageSource}
        />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">
            {props.item.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {props.item.name}
          </h2>
          <p className="mt-1">
            {currencyConverter(props.item.priceCents / 100)}
          </p>
        </div>
        <button
          className="text-white py-2 px-4 text-xl bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => addToBasket(props.item)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
