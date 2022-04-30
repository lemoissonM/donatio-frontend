import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Loading } from '@features/ui/Loader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
