import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootEl = document.getElementById('app');
const root = createRoot(rootEl);

root.render(
    <React.StrictMode>
        <div>Test!</div>
    </React.StrictMode>
)