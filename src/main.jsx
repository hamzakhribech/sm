import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./Globalcss.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='md:hidden'>
       <App />
    </div>
    <div className='hidden md:block'>
      <p className='text-xl font-bold text-center'>SCAN IT WITH YOUR PHONE</p>
    </div>
  </React.StrictMode>,
)
