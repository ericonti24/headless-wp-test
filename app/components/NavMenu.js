
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { mainMenu } from "@/menu.config";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div
        id="nav-container"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        <div className="flex items-center">
          <Rocket className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">
              <Link href="/">Your Brand</Link>
            </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant="ghost" size="lg">
                <Link href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
