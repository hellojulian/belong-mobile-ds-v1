import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "@untitled-ui/icons-react";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    opts: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const images = [
  "https://images.ctfassets.net/5lof7tf0p7b8/3NPGXde7RdZLBo38QbtNnD/87a356fef698a25f30762c241c37c942/PrimaryBanner_AwardsPage.png?w=2048&fm=webp&q=70",
  "https://images.ctfassets.net/5lof7tf0p7b8/3gZr7woT7Y6MQyJDNwBzBK/b00571113cd4160db67c3a6a5bfb6444/which-phone-plan-suits-you.jpg?w=1764&h=992&fit=fill&f=face&fm=webp&q=70",
  "https://images.ctfassets.net/5lof7tf0p7b8/3iIqVEjNLUv8HMHYCk0RyT/a381b15e2f46d18eafc86ce32c2ee0c9/Blog_Tile_-_Angler_Fish_800x600.jpeg?w=800&fit=scale&f=center&fm=webp&q=70",
  "https://images.ctfassets.net/5lof7tf0p7b8/6PkX9ul0WzwkK6vBZbMpQ2/89a35c6ef44b40123fd826b25a72c2db/flip-phone-800x600.jpg?w=800&fit=scale&f=center&fm=webp&q=70",
  "https://images.ctfassets.net/5lof7tf0p7b8/i4qbTGCOk3092M1DS7yMM/7e76b4c09900a15cbbde654ada58b047/A-plea-to-dad.png?w=1764&h=992&fit=fill&f=face&fm=webp&q=70",
  "https://images.ctfassets.net/5lof7tf0p7b8/6LAhJPhyfKBCtXC9fYJcT6/e96e53a2f0946fd7ad0ccce1159a22fb/blog_-_3d_screen_reader.png?w=2048&fm=webp&q=70",
  "https://images.ctfassets.net/5lof7tf0p7b8/2RG1IB5Au9OwSULf8X4yFU/c8ff74b89b747bfa59bff7c0d35cd495/Featured-Image-Waterbear.jpg?w=2048&fm=webp&q=70",
  "https://images.ctfassets.net/5lof7tf0p7b8/4vlNG5zMJblRA96ctMAVEJ/daf3ec2858496d3f8ac8f46edd629c3a/243-Midsumma-Blog-Image1-Featured-Icecream.jpg?w=2048&fm=webp&q=70",
];

const CarouselTemplate: Story = {
  render: (args) => (
    <div className="relative w-full max-w-xs mx-auto">
      <Carousel className="w-full" {...args} aria-label="Image Carousel">
        <CarouselContent className="-ml-1">
          {images.map((src, index) => (
            <CarouselItem key={index} className="pl-1" role="group" aria-roledescription="slide">
              <Card className="overflow-hidden border border-sys-neutral-border">
                <CardContent className="p-0 aspect-[4/3]">
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="absolute dark:text-black active:bg-sys-secondary left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-16 h-16 text-black" aria-hidden="true" />
        </CarouselPrevious>
        <CarouselNext 
          className="absolute dark:text-black active:bg-sys-secondary right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-16 h-16 text-black" aria-hidden="true" />
        </CarouselNext>
      </Carousel>
    </div>
  ),
};

export const Default: Story = {
  ...CarouselTemplate,
};

export const MultipleItemsPerView: Story = {
  render: (args) => (
    <div className="relative w-full max-w-md mx-auto">
      <Carousel className="w-full" {...args} aria-label="Image Carousel">
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              role="group"
              aria-roledescription="slide"
            >
              <Card className="overflow-hidden border border-sys-neutral-border">
                <CardContent className="p-0 aspect-square">
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="absolute dark:text-black active:bg-sys-secondary left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-16 h-16 text-black" aria-hidden="true" />
        </CarouselPrevious>
        <CarouselNext 
          className="absolute dark:text-black active:bg-sys-secondary right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-16 h-16 text-black" aria-hidden="true" />
        </CarouselNext>
      </Carousel>
    </div>
  ),
  args: {
    opts: {
      align: "start",
    },
  },
};

const AutoplayCarouselComponent = ({ images, opts }) => {
  const [api, setApi] = React.useState();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <Carousel setApi={setApi} className="w-full" opts={opts} aria-label="Autoplay Image Carousel">
        <CarouselContent className="-ml-1">
          {images.map((src, index) => (
            <CarouselItem key={index} className="pl-1" role="group" aria-roledescription="slide">
              <Card className="overflow-hidden border border-sys-neutral-border">
                <CardContent className="p-0 aspect-[4/3]">
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="absolute dark:text-black active:bg-sys-secondary left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-16 h-16 text-black" aria-hidden="true" />
        </CarouselPrevious>
        <CarouselNext 
          className="absolute dark:text-black active:bg-sys-secondary right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-16 h-16 text-black" aria-hidden="true" />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export const AutoplayCarousel: Story = {
  render: (args) => <AutoplayCarouselComponent images={images} opts={args.opts} />,
  args: {
    opts: {
      loop: true,
    },
  },
};

export const Accessibility: Story = {
  render: () => (
    <div className="relative w-full max-w-xs mx-auto">
      <Carousel className="w-full" aria-label="Accessible Image Carousel">
        <CarouselContent className="-ml-1">
          {images.slice(0, 3).map((src, index) => (
            <CarouselItem key={index} className="pl-1" role="group" aria-roledescription="slide">
              <Card className="overflow-hidden border border-sys-neutral-border">
                <CardContent className="p-0 aspect-[4/3]">
                  <img
                    src={src}
                    alt={`Sample image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="absolute dark:text-black active:bg-sys-secondary left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-16 h-16 text-black" aria-hidden="true" />
        </CarouselPrevious>
        <CarouselNext 
          className="absolute dark:text-black active:bg-sys-secondary right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-16 h-16 text-black" aria-hidden="true" />
        </CarouselNext>
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The Carousel component incorporates several ARIA attributes to enhance accessibility:

\`aria-label\`: Provides a descriptive label for the entire carousel.
Example: \`aria-label="Accessible Image Carousel"\`

\`role="group"\` and \`aria-roledescription="slide"\`: Applied to each CarouselItem to indicate it's a slide within a carousel.
Example: \`<CarouselItem role="group" aria-roledescription="slide">\`

Descriptive \`alt\` text: Each image includes alt text that describes its content.
Example: \`alt="Sample image 1"\`

\`aria-label\` on navigation buttons: Clearly describes the function of each button.
Example: \`aria-label="Previous slide"\` and \`aria-label="Next slide"\`

\`aria-hidden="true"\`: Applied to decorative icons (chevrons) to prevent screen readers from announcing them.
Example: \`<ChevronLeft className="w-16 h-16 text-black" aria-hidden="true" />\`

Example usage:

\`\`\`jsx
<Carousel className="w-full" aria-label="Accessible Image Carousel">
  <CarouselContent className="-ml-1">
    {images.slice(0, 3).map((src, index) => (
      <CarouselItem key={index} className="pl-1" role="group" aria-roledescription="slide">
        <Card className="overflow-hidden border border-sys-neutral-border">
          <CardContent className="p-0 aspect-[4/3]">
            <img
              src={src}
              alt={\`Sample image \${index + 1}\`}
              className="object-cover w-full h-full"
            />
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious 
    className="absolute dark:text-black active:bg-sys-secondary left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-16 h-16 text-black" aria-hidden="true" />
  </CarouselPrevious>
  <CarouselNext 
    className="absolute dark:text-black active:bg-sys-secondary right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none"
    aria-label="Next slide"
  >
    <ChevronRight className="w-16 h-16 text-black" aria-hidden="true" />
  </CarouselNext>
</Carousel>
\`\`\`
        `,
      },
    },
  },
};