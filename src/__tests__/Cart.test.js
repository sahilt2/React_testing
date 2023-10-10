import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Cart from "../components/Cart";

const mockStore = configureStore([]);

const cartItems = 
  [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
]

describe("Cart", () => {
  it("should render 'Your cart is empty' when cart is empty", () => {
    const store = mockStore({
      cart: {
        cart: [],
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });

  it("should render a list of products in the cart", () => {

    const store = mockStore({
      cart: {
        cart: cartItems,
      },
    });

    render(
      <Provider store={store}>
         <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByTestId("product")).toHaveLength(cartItems.length);
  });

  it("should render the total price when cart has items", () => {

    const store = mockStore({
      cart: {
        cart: cartItems,
      },
    });

    render(
      <Provider store={store}>
         <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );

    const expectedTotalPrice =
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    expect(screen.getByText(/Total Price/i)).toBeInTheDocument();
    expect(screen.getByText(`${expectedTotalPrice} €`)).toBeInTheDocument();
  });
})
