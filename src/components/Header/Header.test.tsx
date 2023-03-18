import { render, screen } from '@testing-library/react';

import img from 'assets/img/logo.png';
import { Header } from './index';

describe('Header component', () => {
  test('renders with image', () => {

    render(<Header />);
    const HeaderElement = screen.getByTestId('image header');
    const ImageElement = screen.getByTestId('image');
    expect(HeaderElement).toBeInTheDocument();
    expect(ImageElement.getAttribute('src')).toBe(img);
  });
});
