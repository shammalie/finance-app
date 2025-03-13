import { H1 } from '@/components/ui/title';
import { BlogOverview } from '@/pages/home/components/blog-post-card';

export const SomeText = () => {
  return (
    <div className="grid gap-2.5">
      <div className="w-full">
        <H1>Recent Posts</H1>
      </div>
      <BlogOverview />
    </div>
  );
};
