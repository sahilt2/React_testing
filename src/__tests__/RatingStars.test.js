import { render, screen } from "@testing-library/react";
import React from "react";
import RatingStars from "../components/RatingStars";

describe("RatingStars", () => {
  it("renders rating stars correctly", () => {
    const rating = {
      rate: 4.5,
      count: 10,
    };

    const rating2 = {
      rate: 4.0,
      count: 10,
    };

    render(
    <>
    <RatingStars rating={rating} />
    <RatingStars rating={rating2} />
    </>
    );

    // Asserting the rendered stars
    const fullStars = screen.getAllByTestId("full-star");
    expect(fullStars).toHaveLength(8);

    const halfStar = screen.getAllByTestId("half-star");
    expect(halfStar).toHaveLength(1);

    const emptyStars = screen.getAllByTestId("empty-star");
    expect(emptyStars).toHaveLength(1);

    // Asserting the rendered count
    const countElements = screen.getAllByTestId("count");
expect(countElements).toHaveLength(2);
countElements.forEach((countElement) => {
  expect(countElement).toHaveTextContent("(10)");
});
  });
});