import { ModeToggle } from '@/components/ui/theme/mode-toggle';

export const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 w-full backdrop-blur-md">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </section>
    </header>
  );
};
