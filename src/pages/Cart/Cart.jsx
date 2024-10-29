import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Cart.css";

function Cart({ cart, setCart }) {
  return (
    <div className="cart-container">
      <div className="cart-items-container">
        {cart.map((cartItem) => {
          return (
            <Card style={{ width: "18rem" }} key={cartItem.id}>
              <Card.Img variant="top" src={cartItem.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cartItem.title}</Card.Title>
                <Card.Text>
                  <b>${cartItem.price.toFixed(2)}</b>
                </Card.Text>
                <Button variant="outline-danger" onClick={() => {
                  setCart(cart.filter((c) => c.id !== cartItem.id))
                }}>Remove from Carts</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4>
        Items: <span className="badge bg-danger">{cart.length} items</span> -
        total Price:{" "}
        <span className="badge bg-success">
          $
          {cart
            .reduce((prev, cart) => {
              return prev + cart.price;
            }, 0)
            .toFixed(2)}
        </span>
      </h4>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
