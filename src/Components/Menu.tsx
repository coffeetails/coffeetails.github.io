
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

type MenuProps = {
  menu: MenuItem[];
  order: OrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

function Menu({ menu, order, setOrder }: MenuProps) {
  

  function addToOrder(menuItem: MenuItem) {
    const updateOrder = [...order];
    let isOrderUpdated = false;

    for(let i = 0; i <= updateOrder.length-1; i++) {
      if (updateOrder[i].title == menuItem.title) {
        ++updateOrder[i].quantity;
        isOrderUpdated = true;
        break;
      }
    }
    

    if (order.length == 0) { 
      setOrder([{
        title: menuItem.title,
        price: menuItem.price,
        quantity: 1
      }]);

    } else if(!isOrderUpdated) { ;
      setOrder([...order, {
        title: menuItem.title,
        price: menuItem.price,
        quantity: 1
      }]);

    } else if(isOrderUpdated) {
      setOrder(updateOrder);

    } else {
      console.log("what?", updateOrder);
      
    }

  }

  const menuItemElems = menu.map((menuItem, i) => (
      <section className="menuItemWrapper card my-4 border-0" key={i}>
        <section className="menuItem card m-1 h-100 border-0" key={i}>
          <img className="menuItem-img card-img-top" src={menuItem.img} alt="placeholder" />
          <section className="card-body d-flex flex-column justify-content-between">
            <h4 className="card-title">{menuItem.title}</h4>
            <p className="card-text">{menuItem.desc}</p>
            <p className="card-text">{menuItem.price} kr</p>
            <button className="btn btn-primary me-auto" onClick={() => addToOrder(menuItem)}>+ Add to order</button>
          </section>
        </section>
      </section>
    )
  );

  return (
      <main className="d-flex flex-wrap justify-content-evenly">
        {menuItemElems}
      </main>
  )
}

export default Menu