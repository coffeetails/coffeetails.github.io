
type OrderItem = {
  title: string;
  price: number;
  quantity: number;
}
type OrderProps = {
  order: OrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
}

function Orderinfo({ order, setOrder }: OrderProps) {
  const maxOrder = 5;  

  const orderItemElems = order.map((orderItem, index) => {
      return (
      <tr key={index}>
        <td className="w-50">{orderItem.title}</td>
        <td className="w-25">
          <button className="orderQuantityButton btn btn-outline-secondary me-2" onClick={()  => increase(orderItem)}>+</button>
          <span>{orderItem.quantity}</span>
          <button className="orderQuantityButton btn btn-outline-secondary ms-2" onClick={() => decrease(orderItem)}>-</button>
        </td>
        <td className="w-25">{orderItem.price * orderItem.quantity}</td>
      </tr>
    )
  });


  function increase(orderItem: OrderItem) {
    const updateOrder = [...order];

    if(orderItem.quantity >= maxOrder) {
      alert(`Woops, you can't order more than ${maxOrder} of this item`);

    } else {
      for(let i = 0; i <= updateOrder.length-1; i++) {
        if (updateOrder[i].title == orderItem.title) {
          ++updateOrder[i].quantity;
          break;
        }
      }

    }
    
    setOrder(updateOrder);
  }

  function decrease(orderItem: OrderItem) {
    let updateOrder = [...order];

    if(orderItem.quantity <= 1) {
      updateOrder = updateOrder.filter(item => item != orderItem);
      
    } else {
      for(let i = 0; i <= updateOrder.length-1; i++) {
        if (updateOrder[i].title == orderItem.title) {
          --updateOrder[i].quantity;
          break;
        }
      }

    }
    
    setOrder(updateOrder);
  }


  let totalPrice = 0;
  for (const orderItem of order) {
    totalPrice += orderItem.price * orderItem.quantity;
  }

  return (
      <section className="d-flex flex-column border rounded border-2 px-4 py-3 bg-body">
        <h2>your order</h2>
        
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3} >Order Details</th>
              </tr>
            </thead>

            <tbody>
              {orderItemElems}
            </tbody>

            <tfoot>
              <tr>
                <th colSpan={2} className="text-end">Total:</th>
                <td>{totalPrice}</td>
              </tr>
            </tfoot>
          </table>
          <button className="checkoutButton btn btn-success align-self-end">Checkout</button>
      </section>
  )
}

export default Orderinfo;