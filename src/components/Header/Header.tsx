import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-neutral-900 p-8">
      <div>
        <nav>
          <ul>
            <li className="flex items-center justify-end">
              <Avatar
                alt="Ricardo Suarez"
                src="./logo.png"
                className="mr-2"
              />
              <span className="text-lg font-medium">Ricardo Suarez</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
