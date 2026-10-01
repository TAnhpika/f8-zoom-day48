import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";

function App() {
    return (
        <>
            <div className="flex min-h-svh flex-col items-center justify-center ">
                <Button asChild className="" variant="destructive" size="lg">
                    <a href="#!">Link</a>
                </Button>
                <Input placeholder="Enter text" className="w-30 mt-2" />
            </div>
        </>
    );
}

export default App;
