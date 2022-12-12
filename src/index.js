import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './app/store'
import { Provider } from 'react-redux'
import { fetchPosts } from './features/posts/postsSlice';
import Router from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
async function main() {

  store.dispatch(fetchPosts());

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );

}

main();
