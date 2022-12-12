import { Routes, Route } from 'react-router-dom';
import App from '../App';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
    )
}

export default Router;