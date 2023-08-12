import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";

import App from './src/App';
// Outlet:
import ErrorPage from './src/components/ErrorPage';
import Home from './src/components/Home';
import CodeJournal from './src/components/CodeJournal';
import Projects from './src/components/Projects';

// Outlet projects
import Root from './src/components/chessdrez/src/client/pages/Root';
import HomeChess from './src/components/chessdrez/src/client/components/Home';
import About from './src/components/chessdrez/src/client/components/About';
import Settings from './src/components/chessdrez/src/client/components/Settings';
import Game from './src/components/chessdrez/src/client/components/Game';
import { GameContextProvider } from './src/components/chessdrez/src/client/store/game-context';

const rootEl = document.getElementById('app') as HTMLElement;
const root = createRoot(rootEl);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Projects />,
                children: [
                    {
                        path: 'chess',
                        element: <React.StrictMode>
                            <GameContextProvider>
                                <Root />
                            </GameContextProvider>
                        </React.StrictMode>,
                        children: [
                            {
                                index: true,
                                element: <HomeChess />,
                            },
                            {
                                path: 'about',
                                element: <About />,
                            },
                            {
                                path: 'config',
                                element: <Settings />,
                            },
                            // {
                            //     path: '/chess/:gameid',
                            //     // path: '/chess/:cheddid',
                            //     element: <Game />,
                            // },
                            {
                                path: 'game',
                                // path: '/chess/:cheddid',
                                element: <Game />,
                            },
                        ]
                    }
                ]
            },
            {
                path: "/journal",
                element: <CodeJournal />,
            },
        ]
    },
]);



root.render(
    <React.StrictMode>
        {/* @TODO */}
        {/* Filter for valid dates */}
        {/* Filter for key topics (if provided) */}
        {/* Sort by date */}
        <RouterProvider router={router} />
    </React.StrictMode>
)