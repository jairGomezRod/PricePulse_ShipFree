"use client";
import { TextLink } from "@/components/ui/text-link";
import { SquareActivity } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-primary">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <SquareActivity
            className="h-10 w-10"
            fill="#0c5046"
            stroke="white"
            strokeWidth={1.4}
          />
          <span className="text-lg font-semibold text-white">PricePulse</span>
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          <TextLink href="/auth/login">SignIn</TextLink>
          <TextLink href="/auth/register">SignUp</TextLink>
        </div>
      </nav>
    </header>
  );
}
