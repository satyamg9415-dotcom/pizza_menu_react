import React from "react";
import ReactDOM from "react-dom/client";
import "./index2.css";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <header className="header">Pizza Maniaa</header>;
}

function Menu() {
  return (
    <div className="container">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObj={pizza} />
      ))}
    </div>
  );
}

function Footer() {
  const hours = new Date().getHours();
  if (hours > 9 && hours < 22) {
    return (
      <footer className="footer">
        Date-
        {new Date().toLocaleDateString()} Time-{new Date().toLocaleTimeString()}{" "}
        <p>We are open.</p>
      </footer>
    );
  } else {
    alert("We are closed");
    return (
      <footer className="footer">
        Date-{new Date().toLocaleDateString()} Time-
        {new Date().toLocaleTimeString()} <p>We are closed.</p>
      </footer>
    );
  }
}

function Pizza({ pizzaObj }) {
  return (
    <div>
      <img className="pizzas" src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h2>{pizzaObj.name}</h2>
      <p>{pizzaObj.ingredients}</p>
      <p>{pizzaObj.soldOut ? "SoldOut" : "$" + pizzaObj.price}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
