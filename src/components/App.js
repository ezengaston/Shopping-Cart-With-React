import React, { useState } from "react";
import Store from "./Store";
import items from "../items.json";
import "../css/app.css";
import ItemsInBasket from "./ItemsInBasket";
import Button from "./Button";

function App() {
  const [showHide, setShowHide] = useState(
    "mb-4 top-0 right-0 mr-4 mt-20 fixed invisible"
  );
  const [basketItems, setBasket] = useState();

  function showHideCart(e) {
    if (e.type === "click")
      if (showHide === "mb-4 top-0 right-0 mr-4 mt-20 fixed") {
        setShowHide("mb-4 top-0 right-0 mr-4 mt-20 fixed invisible");
      } else {
        setShowHide("mb-4 top-0 right-0 mr-4 mt-20 fixed");
      }
  }

  function addToBasket(item) {
    if (basketItems == null) {
      item.amount = 1;
      setBasket([item]);
    } else {
      const newBasket = [...basketItems];
      const sameItem = newBasket.find((i) => i.id === item.id);
      if (sameItem != null) {
        sameItem.amount++;
        setBasket([...newBasket]);
      } else {
        item.amount = 1;
        setBasket([...newBasket, item]);
      }
    }
  }

  function checkIfBasketIsEmpty() {
    if (basketItems == null) {
      return "";
    } else {
      return basketItems.map((item) => {
        return (
          <ItemsInBasket
            key={item.id}
            item={item}
            basketItems={basketItems}
            setBasket={setBasket}
            currencyConverter={currencyConverter}
          />
        );
      });
    }
  }

  function totalInBasket() {
    if (basketItems != null) {
      const total = basketItems.reduce((acc, val) => {
        return acc + val.priceCents * val.amount;
      }, 0);
      return currencyConverter(total / 100);
    } else {
      return "US$0.00";
    }
  }

  function currencyConverter(value) {
    const formatter = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(value);
  }

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
              <Store
                key={item.id}
                item={item}
                addToBasket={addToBasket}
                currencyConverter={currencyConverter}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className={showHide}>
          <div
            id="style-div"
            className="bg-white text-gray-700 body-font shadow-lg border rounded-lg flex flex-col"
          >
            <div className="overflow-y-auto px-4 pt-4">
              {checkIfBasketIsEmpty()}
            </div>
            <div className="flex justify-between items-end border-t p-4">
              <span className="font-bold text-lg uppercase">Total</span>
              <span className="font-bold">{totalInBasket()}</span>
            </div>
          </div>
        </div>
        <Button showHideCart={showHideCart} basketItems={basketItems} />
      </section>
    </>
  );
}

export default App;
