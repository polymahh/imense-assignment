import Providers from "./components/providers";
import routes from "./lib/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter(routes);

function App() {
    return (
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    );
}

export default App;
