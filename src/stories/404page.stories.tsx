import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline';

// Mock the useRouter hook
const useRouter = () => ({
  push: () => {},
});

const Page404 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-black text-white p-4">
      <div className="relative w-full max-w-xl text-center">
        <div className="w-full mx-auto h-[700px] pb-16">
          <Spline scene="https://prod.spline.design/f4IzY0054-6HoARK/scene.splinecode" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-4 space-y-2">
          <h1 className="text-5xl font-bold tracking-tight font-proxima-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F4B182] via-[#E45EFF] via-[#8892F4] via-[#39EBA6] to-[#C2F23C]">Oops!</span> Page not found.
          </h1>
          <p className="pb-5 text-on-surface font-proxima-body">The page you're looking for doesn't exist or has been moved.</p>
          <Button 
            onClick={() => router.push('/')}
            variant="primary"
            className="mt-2"
          >
            Go back home
          </Button>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof Page404> = {
  title: 'Pages/404Page',
  component: Page404,
  parameters: {
    layout: 'fullscreen',
    docs: {
      canvas: { sourceState: 'shown' },
      story: { inline: false, iframeHeight: 800 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Page404>;

export const Default: Story = {};

