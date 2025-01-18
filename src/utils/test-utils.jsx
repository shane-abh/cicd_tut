// test-utils.jsx
import { render as rtlRender } from '@testing-library/react';

const render = (ui, options) => rtlRender(ui, { ...options });

export { render, screen } from '@testing-library/react';
