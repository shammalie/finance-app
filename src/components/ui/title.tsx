import { cn } from '@/utils';

const baseStyle =
  'font-light border-t-2 border-foreground pt-1.5 text-foreground text-start';

function H1({ className, children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      data-slot="h1-title"
      className={cn('text-4xl', baseStyle, className)}
      {...props}
    >
      {children}
    </h1>
  );
}
function H2({ className, children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h2
      data-slot="h2-title"
      className={cn('text-2xl', baseStyle, className)}
      {...props}
    >
      {children}
    </h2>
  );
}
function H3({ className, children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h3
      data-slot="h3-title"
      className={cn('', baseStyle, className)}
      {...props}
    >
      {children}
    </h3>
  );
}
function H4({ className, children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h4
      data-slot="h4-title"
      className={cn('', baseStyle, className)}
      {...props}
    >
      {children}
    </h4>
  );
}
function H5({ className, children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h5
      data-slot="h5-title"
      className={cn('', baseStyle, className)}
      {...props}
    >
      {children}
    </h5>
  );
}
function H6({ className, children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h6
      data-slot="h6-title"
      className={cn('', baseStyle, className)}
      {...props}
    >
      {children}
    </h6>
  );
}
export { H1, H2, H3, H4, H5, H6 };
