import { render, screen } from '@testing-library/react';
import { ArrowButton } from './index';

describe('ArrowButton test', () => {
    test('ArrowButton render', () => {
        render(<ArrowButton />);

        const buttonElement = screen.getByText(/GO BACK/i);
        expect(buttonElement).toBeInTheDocument();
    });
});