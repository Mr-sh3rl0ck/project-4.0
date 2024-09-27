import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Inicio from '../pages/inicio';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Inicio/>
            }
        ]
    }
]);

export default router;