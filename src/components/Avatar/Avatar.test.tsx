import { render, screen } from '@testing-library/react';

import img from 'assets/img/logo.png';
import { Avatar } from './index';

describe('Avatar component', () => {
  test('renders with image', () => {

    render(<Avatar image={img} />);
    const avatarElement = screen.getByRole('image');
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement.getAttribute('src')).toBe(img);
  });

  test('renders without image', () => {
    render(<Avatar image={undefined} />);
    const avatarElement = screen.getByRole('image');
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement.getAttribute('src')).toBeNull();
  });
});
