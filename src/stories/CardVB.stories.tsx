import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Spline from "@splinetool/react-spline";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "../components/ui/input-otp";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import {
  BellRing,
  Check,
  TrendingUp,
  CodeIcon,
  CalendarIcon,
  MessageCircleIcon,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { Bar, BarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../components/ui/chart";
import { Textarea } from "../components/ui/textarea";

const meta: Meta<typeof Card> = {
  title: 'Value Brand Explore/Cards/Value Brand Cards',
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;


// Contact List Story
const ContactListCard: React.FC = () => {
  return (
    <Card className="w-full max-w-sm w-[350px]">
      <CardHeader className="pb-0 space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">Your Family</CardTitle>
          <Button
            href="#"
            variant="textlink"
            className="p-0"
          >
            Edit accounts
          </Button>
        </div>
        <CardDescription>Your family account balances</CardDescription>
      </CardHeader>
      <CardContent className="p-2 mb-2">
        <div className="w-full overflow-auto">
          <div className="grid w-full grid-cols-1 gap-4 p-4">
            <div className="flex items-center space-x-4">
              <Avatar size="xl" className="flex-shrink-0">
                <AvatarImage
                  src="https://i.pinimg.com/564x/80/4e/f1/804ef1682390865b11f9d3df22293f7c.jpg"
                  alt="Family iPad"
                />
                <AvatarFallback>FI</AvatarFallback>
              </Avatar>
              <div className="flex-grow min-w-0">
                <h3 className="pb-1 text-sm font-bold leading-none">
                  Family iPad
                </h3>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  300GB remaining
                </p>
              </div>
              <Badge variant="secondary" className="invisible">
                Data low
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar size="xl" className="flex-shrink-0 ">
                <AvatarImage
                  src="https://i.pinimg.com/474x/2b/64/85/2b6485e915fd46fd8022d1fc34512aaa.jpg"
                  alt="Jules"
                />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="flex-grow min-w-0">
                <h3 className="pb-1 text-sm font-bold leading-none">Jules</h3>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  3GB remaining
                </p>
              </div>
              <Badge variant="warning">Data low</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar size="xl" className="flex-shrink-0 ">
                <AvatarImage
                  src="https://i.pinimg.com/564x/db/5d/ac/db5dac24913fd008681b2262d7127ad3.jpg"
                  alt="Sarah"
                />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div className="flex-grow min-w-0">
                <h3 className="pb-1 text-sm font-bold leading-none">Sarah</h3>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  20GB remaining
                </p>
              </div>
              <Badge variant="secondary" className="invisible">
                Data low
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar size="xl" className="flex-shrink-0 ">
                <AvatarImage
                  src="https://i.pinimg.com/474x/91/73/4c/91734c0b0e7641ed32b73ad50867e8f5.jpg"
                  alt="Jack"
                />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div className="flex-grow min-w-0">
                <h3 className="pb-1 text-sm font-bold leading-none">Jack</h3>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  100GB remaining
                </p>
              </div>
              <Badge variant="secondary" className="invisible">
                Data low
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="grid grid-flow-col gap-3 justify-stretch">
        <Button variant="secondary" aria-label="Cancel project creation">
          Cancel
        </Button>
        <Button aria-label="Deploy project" variant="primary" size="lg">
          Top up data
        </Button>
      </CardFooter>
    </Card>
  );
};

export const ContactList: Story = {
  render: () => <ContactListCard />,
};


// Area Chart with Gradient Story
export const ChartWithGradientArea: Story = {
  render: () => {
    const chartData = [
      { month: "January", desktop: 186, mobile: 80 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 },
    ];

    const chartConfig = {
      desktop: {
        label: "iPad",
        color: "#41B6E6",
      },
      mobile: {
        label: "Jules",
        color: "#1781AB",
      },
    } satisfies ChartConfig;

    return (
      <Card className="max-w-[361px] w-[361px]">
        <CardHeader>
          <div className="flex items-start justify-between w-full ">
            <CardTitle>Monthly usage</CardTitle>
            <Badge variant="success">Average</Badge>
          </div>
          <CardDescription>
            Showing history for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="h-[200px] w-full">
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                  top: 8,
                  bottom: 0,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-desktop)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-desktop)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-mobile)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-mobile)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="url(#fillMobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="url(#fillDesktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </CardContent>
        <CardFooter className="rounded-b-2xl bg-zinc-100 dark:bg-zinc-800">
          <div className="flex items-start w-full gap-12 mt-4 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Usage up by 5.2% this month <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                January - June 2024
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  },
};

// Area Chart with Legend Story
export const ChartWithLegendArea: Story = {
  render: () => {
    const chartData = [
      { month: "January", desktop: 186, mobile: 80 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 },
    ];

    const chartConfig = {
      desktop: {
        label: "Jules",
        color: "#41B6E6",
      },
      mobile: {
        label: "iPad",
        color: "#1781AB",
      },
    } satisfies ChartConfig;

    return (
      <Card className="max-w-[361px] w-[361px]">
        <CardHeader>
          <div className="flex items-start justify-between w-full ">
            <CardTitle>Monthly usage</CardTitle>
            <Badge variant="success">Average</Badge>
          </div>{" "}
          <CardDescription>
            Showing history for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="h-[200px] w-full">
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                  top: 8,
                  bottom: 0,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="var(--color-mobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </div>
        </CardContent>
        <CardFooter className="rounded-b-2xl bg-zinc-100 dark:bg-zinc-800">
          <div className="flex items-start w-full gap-12 mt-4 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Usage up by 5.2% this month <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                January - June 2024
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  },
};

// Bar Chart with Custom Label Story
export const CardWithCustomLabelBarChart: Story = {
  render: () => {
    const chartData = [
      { month: "Family iPad", desktop: 186, mobile: 80 },
      { month: "Jules", desktop: 305, mobile: 200 },
      { month: "Jack", desktop: 237, mobile: 120 },
      { month: "Sarah", desktop: 73, mobile: 190 },
      { month: "Claude", desktop: 209, mobile: 130 },
      { month: "Ben", desktop: 214, mobile: 140 },
    ];

    const chartConfig = {
      desktop: {
        label: "Desktop",
        color: "#41B6E6",
      },
      mobile: {
        label: "Mobile",
        color: "#1781AB",
      },
      label: {
        color: "hsl(var(--background))",
      },
    } satisfies ChartConfig;

    return (
      <Card className="max-w-[361px] w-[361px]">
        <CardHeader>
          <div className="flex items-start justify-between w-full ">
            <CardTitle>Monthly usage</CardTitle>
            <Badge variant="success">Average</Badge>
          </div>{" "}
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="h-[200px] w-full">
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{
                  left: 0,
                  right: 16,
                  top: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid horizontal={false} />
                <YAxis
                  dataKey="month"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                  hide
                />
                <XAxis dataKey="desktop" type="number" hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Bar
                  dataKey="desktop"
                  layout="vertical"
                  fill="var(--color-desktop)"
                  radius={4}
                >
                  <LabelList
                    dataKey="month"
                    position="insideLeft"
                    offset={8}
                    className="fill-[--color-label]"
                    fontSize={12}
                  />
                  <LabelList
                    dataKey="desktop"
                    position="right"
                    offset={8}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
        <CardFooter className="rounded-b-2xl bg-zinc-100 dark:bg-zinc-800">
          <div className="flex items-start w-full gap-12 mt-4 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Usage up by 5.2% this month <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                Showing history for the last 6 months
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  },
};