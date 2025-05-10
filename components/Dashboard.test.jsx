import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import '@testing-library/jest-dom';

describe('Dashboard Component', () => {
  test('renders initial count', () => {
    render(<Dashboard initialCount={0} />);
    expect(screen.getByText(/Count:0/i)).toBeInTheDocument();
  });

  test('increments count when "Increment" button is clicked', () => {
    render(<Dashboard initialCount={0} />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText(/Count:1/i)).toBeInTheDocument();
  });

  test('decrements count when "Decrement" button is clicked', () => {
    render(<Dashboard initialCount={2} />);
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText(/Count:1/i)).toBeInTheDocument();
  });

  test('resets count when "Restart" button is clicked', () => {
    render(<Dashboard initialCount={5} />);
    fireEvent.click(screen.getByText('Restart'));
    expect(screen.getByText(/Count:0/i)).toBeInTheDocument();
  });

  test('switches sign when "Sign Switch" button is clicked', () => {
    render(<Dashboard initialCount={3} />);
    fireEvent.click(screen.getByText('Sign Switch'));
    expect(screen.getByText(/Count:-3/i)).toBeInTheDocument();
  });
});
