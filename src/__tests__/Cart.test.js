import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Cart from "../components/Cart";

const mockStore = configureStore([]);

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
    const cartItems = [
      {
        id: 1,
        title: "Product 1",
        price: 10,
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        price: 20,
        quantity: 2,
      },
    ];

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
    const cartItems = [
      {
        id: 1,
        title: "Product 1",
        price: 10,
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        price: 20,
        quantity: 2,
      },
    ];

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
});
