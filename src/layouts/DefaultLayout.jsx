import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Outlet } from "react-router";

export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Navigation />
        </div>
    );
}
