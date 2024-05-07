import {
  Briefcase,
  HomeIcon,
  Link,
  MessagesSquareIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">
      <Image
        className="rounded-lg"
        src={"https://links.papareact.com/b3z"}
        width={40}
        height={40}
        alt="img"
      />

      <div className="flex-1">
        <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      <div>
        <Link href="/" className="icon">
          <HomeIcon className="m-5" />
          <p>Home</p>
        </Link>

        <Link href="" className="icon hidden md:flex">
          <UserIcon className="m-5" />
          <p>Home</p>
        </Link>

        <Link href="" className="icon hidden md:flex">
          <Briefcase className="m-5" />
          <p>Home</p>
        </Link>

        <Link href="" className="icon hidden md:flex">
          <MessagesSquareIcon className="m-5" />
          <p>Messaging</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
