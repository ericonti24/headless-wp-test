import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { mainMenu } from "@/menu.config";

export default function Navbar() {
  return (
    <>
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">
              <Link href="/">Your Brand</Link>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={key} asChild size="lg" variant="ghost">
                <Link href={href}>{key.charAt(0).toUpperCase() + key.slice(1)}</Link>
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
