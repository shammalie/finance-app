import {
  NavigationMenu,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/ui/theme/mode-toggle';

export const Header = () => {
  return (
    <header className="bg-transparent backdrop-blur-md border-b sticky top-0 z-10 w-full">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <div>
          <NavigationMenu className="gap-4">
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
            <NavigationMenuLink href="/">About Me</NavigationMenuLink>
          </NavigationMenu>
        </div>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </section>
    </header>
  );
};
