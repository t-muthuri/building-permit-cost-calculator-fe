import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App'; // Assuming your component name

describe('app', () => {
  test('should render the app component', () => {
    render(<App />);
  });
});