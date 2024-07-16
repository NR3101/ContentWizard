import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="p-5 border-b-2 shadow-sm flex flex-col sm:flex-row justify-between items-center sm:space-x-4 bg-white">
      <div className="flex gap-2 items-center p-3 border-2 rounded-md w-full sm:max-w-lg mb-4 sm:mb-0">
        <Search />
        <input
          type="text"
          placeholder="Search...."
          className="outline-none border-none flex-grow"
        />
      </div>

      <div className="flex gap-5 items-center">
        <h2 className="bg-primary p-1 rounded-full text-white text-xs sm:text-sm px-2">
          🔥Subscribe To Pro For Just ₹399/Month🔥
        </h2>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
