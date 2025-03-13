import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Label } from '@/components/ui/label';
import { H2 } from '@/components/ui/title';
import { faker } from '@faker-js/faker';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React from 'react';

type TBlogPost = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  meta: {
    likes?: number;
    dislikes?: number;
    views: number;
  };
};

function generateData(length: number): Array<TBlogPost> {
  return Array.from({ length }).map(() => ({
    id: faker.string.ulid(),
    title: faker.word.words({
      count: {
        min: 3,
        max: 8,
      },
    }),
    description: faker.lorem.paragraphs(),
    imageUrl: faker.image.urlPicsumPhotos({ width: 656, height: 492, blur: 0 }),
    meta: {
      views: faker.number.int({ min: 0, max: 1000000 }),
      likes: faker.number.int({ min: 0, max: 1000000 }),
      dislikes: faker.number.int({ min: 0, max: 1000000 }),
    },
  }));
}

export function BlogOverview() {
  const [data, _] = React.useState(() => generateData(100));

  return (
    <div className="flex flex-col gap-2">
      {data.map((post) => (
        <BlogOverviewCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function BlogOverviewCard({ post }: { post: TBlogPost }) {
  const {
    description,
    id,
    imageUrl,
    meta: { views, dislikes, likes },
    title,
  } = post;

  return (
    <div
      key={id}
      className="flex gap-4 rounded-lg p-4 transition-[color,box-shadow] hover:duration-400 cursor-pointer hover:ring-2 ring-muted-foreground min-h-32 max-h-64 min-w-[40rem] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
    >
      <div className="flex flex-col gap-2 items-start w-full h-full">
        <H2>{title}</H2>
        <div className="h-full">
          <p className="text-xs text-foreground/60 text-left overflow-hidden text-ellipsis line-clamp-8">
            {description}
          </p>
        </div>
        <div className="flex gap-3 items-center justify-between w-full">
          <div className="flex gap-0.5">
            <Label className="text-xs text-muted-foreground">
              {views} views
            </Label>
          </div>
          <div className="flex gap-0.5">
            <Label className="text-xs text-muted-foreground">{likes}</Label>
            <ThumbsUp className="ml-1 m-auto text-muted-foreground h-4 w-4" />
          </div>
          <div className="flex gap-0.5">
            <Label className="text-xs text-muted-foreground">{dislikes}</Label>
            <ThumbsDown className="ml-1 m-auto text-muted-foreground h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="bg-muted rounded-xl overflow-hidden w-full h-full object-cover">
        <AspectRatio ratio={16 / 9}>
          <img src={imageUrl} alt="test" className="rounded-md" />
        </AspectRatio>
      </div>
    </div>
  );
}
