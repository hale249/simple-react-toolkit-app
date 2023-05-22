import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import stores from "./stores";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={stores}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
    </Provider>
)
