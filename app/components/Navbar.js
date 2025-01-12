import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { AudioLines } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <AudioLines className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold">
            <Link href="/">Info Music</Link> {/* Home Route */}
          </span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <Link href="/" passHref>
            <Button as="a" variant="link"> {/* Renders as <a> */}
              Home
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button as="a" variant="link">
              About
            </Button>
          </Link>
          <Link href="/sample" passHref>
            <Button as="a" variant="link">
              Sample
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
