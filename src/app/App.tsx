import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { ShopifyContext } from '../contexts';
import { useToken } from '../api/lib';
import './styles/index.scss';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    },
});

function App() {
    const token = useToken();

    return (
        <QueryClientProvider client={queryClient}>
            <ShopifyContext.Provider value={{ token }}>
                <BrowserRouter>
                    <div className="container">
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about/:id">
                                <About />
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
            </ShopifyContext.Provider>
        </QueryClientProvider>
    );
}

export default App;
