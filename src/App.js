import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import Root from "./root";

function App() {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Root />
            </BrowserRouter>
            <ReactQueryDevtools position={"bottom-right"} />
        </QueryClientProvider>
    );
}

export default App;
