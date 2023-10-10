import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchProducts } from "../features/productsSlice";

const mockStore = configureStore([thunk]);

describe("fetchProducts", () => {

    beforeEach(() => {
        jest.setTimeout(10000); // Increase the timeout to 10 seconds
      });

  it("should fetch products from the API", async () => {
    const store = mockStore({ products: [] });

    await store.dispatch(fetchProducts());

    const actions = store.getActions();
    expect(actions[0].type).toEqual("products/fetchProducts/pending");
    expect(actions[1].type).toEqual("products/fetchProducts/fulfilled");

    const products = actions[1].payload;
    expect(products).toHaveLength(20);

    // Check that each product has the correct properties
    products.forEach((product) => {
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("title");
      expect(product).toHaveProperty("description");
      expect(product).toHaveProperty("price");
      expect(product).toHaveProperty("category");
      expect(product).toHaveProperty("image");
    });

    // Check that the first product has the correct properties
    expect(products[0].id).toEqual(1);
    expect(products[0].title).toEqual("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
    expect(products[0].description).toEqual("Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday");
    expect(products[0].price).toEqual(109.95);
    expect(products[0].category).toEqual("men's clothing");
    expect(products[0].image).toEqual("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");
  });
});