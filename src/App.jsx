import { Button } from "./components/ui/button";

function App() {
    return (
        <>
            <div className="flex min-h-svh flex-col items-center justify-center ">
                <Button className="bg-pink-400 hover:bg-pink-500">
                    Click me
                </Button>
            </div>
        </>
    );
}

export default App;
