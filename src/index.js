import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoginProvider } from './contexts/userContext';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const client = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={client} >
        <BrowserRouter>
            <LoginProvider>
            <App />
            </LoginProvider>
        </BrowserRouter>
    </QueryClientProvider>

    
);
