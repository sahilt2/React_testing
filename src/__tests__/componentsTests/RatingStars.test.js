import { render, screen } from "@testing-library/react";
import RatingStars from "../../components/RatingStars";

describe('RatingStars', () => {

    it('Renders rating stars correctly', () => {
        const rating = {
            rate:4.5,
            count:10,
        }
        const rating2 = {
            rate:3.9,
            count:120,
        }
    
        render(
            <>
            <RatingStars rating={rating}/>
            <RatingStars rating={rating2}/>
            </>
        )
        const fullStars = screen.getAllByTestId("full-star");
        expect(fullStars).toHaveLength(7);
        const halfStars = screen.getAllByTestId("half-star");
        expect(halfStars).toHaveLength(2)
        const emptyStars = screen.getAllByTestId("empty-star");
        expect(emptyStars).toHaveLength(1)
    });
    
    it('Renders the correct count number:', () => {
        const rating = {
            rate:4.5,
            count:10,
        }
        const rating2 = {
            rate:3.9,
            count:120,
        }
    
        render(
            <>
            <RatingStars rating={rating}/>
            <RatingStars rating={rating2}/>
            </>
        )
        const countElements = screen.getAllByTestId("count");
        expect(countElements[0]).toHaveTextContent("(10)")
        expect(countElements[1]).toHaveTextContent("(120)")
    });
    
});
