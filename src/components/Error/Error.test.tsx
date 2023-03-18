import { screen, render } from '@testing-library/react';
import { Error } from './index';

describe('Error test', () => {
    test('Error render', () => {
        render(<Error />);

        const errorElement = screen.getByRole("error");
        
        expect(errorElement).toBeInTheDocument();
        expect(errorElement).toHaveTextContent(/Loading error, probably wrong url/i);
    });
});