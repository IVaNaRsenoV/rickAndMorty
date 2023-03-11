import { render, screen } from '@testing-library/react';
import { Card } from './index';

const mockCardData = {
  name: 'Test name',
  image: 'https://example.com/image.jpg',
  gender: 'Test gender',
  status: "Alive",
  species: "Human",
  origin: {
    name: "Earth(C-137)",
  },
  type: "Unknown",
};

describe('Card component', () => {
  it('renders card data', () => {
    render(<Card {...mockCardData} />);
    expect(screen.getByText(mockCardData.name)).toBeInTheDocument();
    expect(screen.getByText(mockCardData.gender)).toBeInTheDocument();
    expect(screen.getByAltText(mockCardData.status)).toBeInTheDocument();
    expect(screen.getByAltText(mockCardData.species)).toBeInTheDocument();
    expect(screen.getByAltText(mockCardData.origin.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockCardData.type)).toBeInTheDocument();
  });
});
