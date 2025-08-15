import { useEffect, useState } from 'react'

import Orderinfo from "./Components/OrderInfo"
import Menu from "./Components/Menu"

type MenuItem = {
  img: string;
  title: string;
  desc: string;
  price: number;
};
type OrderItem = {
  title: string;
  price: number;
  quantity: number;
};

function App() {
const [menu, setMenu] = useState<MenuItem[]>([]);
const [order, setOrder] = useState<OrderItem[]>([]);
const [darkTheme, setDarkTheme] = useState<boolean>(true);
  
  useEffect(() => {
    setMenu([
      { img: "/crunchburger.png", title: "Nook's Mega Crunch Burger", desc: "Double patty burger with pineapple glaze, melted island cheese, and a bell-shaped sesame bun.", price: 90 },
      { img: "/chickentenders.png", title: "Tom Nook's Bell-Battered Chicken Tenders", desc: "Crispy chicken tenders with a tangy bell sauce for dipping.", price: 80 },
      { img: "/goldenfries.png", title: "Isabelle's Golden Fries", desc: "Crispy shoestring fries with sea-salt and a citrus-ketchup dip.", price: 50 },
      { img: "/starpizza.png", title: "Celeste's Star Pizza Slice", desc: "New York–style pepperoni slice with star-shaped pepper and melty cheese.", price: 70 },
      { img: "/milkshake.png", title: "K.K. Slider Milkshake", desc: "Vanilla milkshake with berry swirl and a musical straw.", price: 50 },
    ]);
  }, []);

  function switchTheme() {
    setDarkTheme(!darkTheme);
    const htmlElem = document.documentElement;
    
    if (darkTheme) {
      htmlElem.setAttribute("data-bs-theme", "dark");

    } else {
      htmlElem.setAttribute("data-bs-theme", "light");
    }
    
    
  }

  return (
    <>
      <header>
        <button onClick={() => switchTheme()} className="btn">{darkTheme ? "🌙" : "☀️"}</button>
        <h1 className="text-center">Fast Food Menu</h1>
      </header>
      
      <Menu menu={menu} order={order} setOrder={setOrder} />

      <Orderinfo order={order} setOrder={setOrder} />
    </>
  )
}

export default App
