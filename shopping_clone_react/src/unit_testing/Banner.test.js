import { render, screen } from '@testing-library/react'
import Banner from '../components/Banner'

describe("Banner.js file", () => {
    test('display the Title and Greeting in Banner', () => {
        render(<Banner />);
        expect(screen.getByText("Enjoy Online shopping in AMK mart.")).toBeInTheDocument();
        expect(screen.getByText("With 50% off on first oredr with free delivery.")).toBeInTheDocument();
    });
});
