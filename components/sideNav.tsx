import { LayoutDashboard, Bitcoin } from "lucide-react";
import Link from "next/link";

interface SidebarLinkProps {
  to: string;
  text: string;
}

const SidebarLink = ({ to, icon, text }: SidebarLinkProps) => {
  return (
    <Link
      href={to}
      className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded"
    >
      <LayoutDashboard className="mr-2 h-5 w-5" />
      <span>{text}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r">
      <nav className="mt-5">
        <SidebarLink to="/" text="Home" />
      </nav>
    </div>
  );
};

export default Sidebar;
