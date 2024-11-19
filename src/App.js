
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store';

// ==== Why HashRouter vs BrowserRouter? ====
/*
1. BrowserRouter uses HTML5 History API and creates clean URLs like:
   example.com/about
   example.com/contact
   But this requires server-side support to handle different URLs

2. HashRouter uses URL hash (#) and creates URLs like:
   example.com/#/about
   example.com/#/contact
   This works better with static hosting like GitHub Pages

3. Key Differences:
   - BrowserRouter: Requires server configuration to redirect all routes to index.html
   - HashRouter: Handles routing entirely on client-side using URL hash
   
4. GitHub Pages Limitation:
   - It's a static file host with no server-side configuration
   - Cannot handle clean URLs (BrowserRouter style) properly
   - When user refreshes a BrowserRouter URL, it leads to 404 error
*/

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
