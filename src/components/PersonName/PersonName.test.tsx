import { render, screen } from '@testing-library/react';
import { PersonName } from './index';

describe('PersonName test', () => {
    test('PersonName render', () => {
        render(<PersonName />);

        const personElement = screen.getByTestId("person name");
        expect(personElement).toBeInTheDocument();

        const personText = screen.queryByText(/Informations/i);
        expect(personText).toBeInTheDocument();
    });
});