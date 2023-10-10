import cartReducer, { changeQuantity } from "../features/cartSlice";

describe("cart reducer", () => {
  const initialState = {
    cart: [],
  };

  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle changeQuantity", () => {
    const product = { id: 1, name: "Product 1", price: 10, quantity: 1 };
    const state = {
      cart: [product],
    };
    const action = changeQuantity({ ...product, quantity: 2 });
    const expectedState = {
      cart: [{ ...product, quantity: 3 }],
    };
    expect(cartReducer(state, action)).toEqual(expectedState);
  });

  it("should handle adding a new product", () => {
    const product = { id: 1, name: "Product 1", price: 10, quantity: 1 };
    const state = {
      cart: [],
    };
    const action = changeQuantity(product);
    const expectedState = {
      cart: [product],
    };
    expect(cartReducer(state, action)).toEqual(expectedState);
  });

  it("should handle removing a product", () => {
    const product = { id: 1, name: "Product 1", price: 10, quantity: 0 };
    const state = {
      cart: [product],
    };
    const action = changeQuantity({ ...product, quantity: -1 });
    const expectedState = {
      cart: [],
    };
    expect(cartReducer(state, action)).toEqual(expectedState);
  });
});