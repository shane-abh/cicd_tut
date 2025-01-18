import React from 'react'; // Add this import
import { render, screen } from '@testing-library/react';
import App from './src/App.jsx';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('should render while authenticating', () => {
    render(<App />);
    
    // This will now work as expected because jest-dom provides the `toBeInTheDocument` matcher
    expect(screen.getByText('Vite + Reactooo')).to.exist;
  });
});
