import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Navbar } from '../components/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
