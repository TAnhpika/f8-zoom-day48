import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@radix-ui/themes";
import { Heart, House, Plus, Search, UserRound } from "lucide-react";
import { useNavigate } from "react-router";

export default function Navigation() {
    const navigate = useNavigate();

    const routes = [
        { path: "/", icon: House },
        { path: "/search", icon: Search },
        { path: "", icon: Plus },
        { path: "/activity", icon: Heart },
        { path: "/user", icon: UserRound },
    ];

    return (
        <NavigationMenu className="fixed left-0 right-0 bottom-0 max-w-full bg-white/96">
            <NavigationMenuList className="w-dvh flex">
                {routes.map((item, index) => {
                    const Icon = item.icon;

                    return item.path ? (
                        <NavigationMenuItem key={index} className="flex-1">
                            <NavigationMenuLink
                                href={item.path}
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate(item.path);
                                }}
                                className="flex h-12 items-center justify-center"
                            >
                                <Icon />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem key={index} className="flex-1">
                            <Button className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-400 text-background cursor-pointer">
                                <Icon />
                            </Button>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
