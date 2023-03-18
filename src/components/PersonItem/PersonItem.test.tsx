import { render, screen } from '@testing-library/react';
import { PersonItem } from './index';

describe('PersonItem test', () => {
    test('PersonItem render', () => {
        render(<PersonItem name="name" type="type"/>);

        const PersonItemElement = screen.getByRole("list");
        expect(PersonItemElement).toBeInTheDocument();
    });
});