import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/scss/main.scss";
import App from './App.jsx'
import UserProvider from './context/UserProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
)
