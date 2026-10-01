import {
    NavigationMenu,
    NavigationMenuItem,
    // NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@radix-ui/themes";
import { Heart, House, Plus, Search, UserRound } from "lucide-react";
import { NavLink } from "react-router";

export default function Navigation() {
    const routes = [
        { path: "/", icon: House },
        { path: "/search", icon: Search },
        { path: "", icon: Plus },
        { path: "/activity", icon: Heart },
        { path: "/user", icon: UserRound },
    ];

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {routes.map((item, index) => {
                    const Icon = item.icon;

                    return item.path ? (
                        <NavigationMenuItem key={index}>
                            {/* <NavigationMenuLink asChild> */}
                                <NavLink to={item.path}>
                                    <Icon />
                                </NavLink>
                            {/* </NavigationMenuLink> */}
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem key={index}>
                            {/* <NavigationMenuLink asChild> */}
                                <Button>
                                    <Icon />
                                </Button>
                            {/* </NavigationMenuLink> */}
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
