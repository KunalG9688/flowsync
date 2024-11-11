import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";
import { PenBox } from "lucide-react";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import UserLoading from "./user-loading";

async function Header() {
  await checkUser();

  return (
    <header className="">
      <div className="container mx-auto border-b-4 border-[#ff0095]">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            <Image
              src={"/logoFlowbg.png"}
              alt="Zscrum Logo"
              width={200}
              height={56}
              className="h-12 w-auto object-contain logo-effect"
            />
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/project/create">
          <Button 
              variant="destructive" 
              className="flex items-center gap-2 bg-[#ff0095] hover:bg-[#ff66b2] text-white py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <PenBox size={18} />
              <span className="hidden md:inline">Create Project</span>
          </Button>

          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
      <UserLoading />
      </div>
    </header>
  );
}

export default Header;
