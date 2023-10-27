import { useAuthStore } from "@/store";
import { Avatar } from "@mui/material";

const Header = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-neutral-900 p-8">
      <div>
        <nav>
          <ul>
            <li className="flex items-center justify-end">
              <Avatar alt={`${user.username} photo`} src="./logo.png" className="mr-2" />
              <span className="text-lg font-medium">{user.username}</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
