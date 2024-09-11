import React from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate, Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu.tsx";
import { Github, LogOut, Settings, User } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";

const Navbar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      const response = await axios.post("http://localhost:1000/api/v1/auth/logout");
      if (response.status === 200) {
        toast.success("Logout successful", {
          description: response.data.message || "You have been logged out.",
          duration: 2000,
        });
        navigate("/signin");
      }
    } catch (error: any) {
      console.error(error);
      toast.error("Logout failed", {
        description:
          error?.response?.data?.message ||
          "An error occurred. Please try again.",
        duration: 3000,
      });
    }
  };

  const goToProfile = () => {
    navigate("/dashboard/profile");
  };

  return (
    <header className="bg-black text-white border-b border-white border-opacity-15 fixed w-full z-50 py-5 lg:px-32 px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/images/Logo.png"
            alt="Linear Logo"
            className="h-8 mr-2"
          />
          <div className="text-xl lg:text-xl font-bold">HireSphere</div>
        </div>
        <div className="lg:hidden mt-1"></div>
        <div className="hidden lg:flex items-center space-x-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 lg:mr-14 mr-7 dark">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={goToProfile}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
