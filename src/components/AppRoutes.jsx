import DefaultLayout from "@/layouts/DefaultLayout";
import Activity from "@/pages/Activity";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import User from "@/pages/User";
import { Routes, Route, BrowserRouter } from "react-router";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/activity" element={<Activity />} />
                    <Route path="/user" element={<User />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
