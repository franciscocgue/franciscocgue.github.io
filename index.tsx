import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';

const rootEl = document.getElementById('app') as HTMLElement;
const root = createRoot(rootEl);



root.render(
    <React.StrictMode>
        {/* @TODO */}
        {/* Filter for valid dates */}
        {/* Filter for key topics (if provided) */}
        {/* Sort by date */}
        <App />
    </React.StrictMode>
)