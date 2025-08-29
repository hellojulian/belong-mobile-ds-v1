import React, { useState } from "react";
import { ChevronLeft, Info, TrendingUp } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import type { Meta, StoryObj } from "@storybook/react";

const individualChartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const individualChartConfig = {
  desktop: {
    label: "GB",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const familyChartData = [
  { browser: "iPad", visitors: 275, fill: "#288FCB" },
  { browser: "Jack", visitors: 200, fill: "#59C2FF" },
  { browser: "Jules", visitors: 187, fill: "#7ECDFB" },
  { browser: "Sarah", visitors: 173, fill: "#ADE0FE" },
];

const familyChartConfig = {
  usage: {
    label: "Usage (GB)",
  },
  iPad: {
    label: "iPad",
    color: "hsl(var(--chart-1))",
  },
  Jack: {
    label: "Jack",
    color: "hsl(var(--chart-2))",
  },
  Jules: {
    label: "Jules",
    color: "hsl(var(--chart-3))",
  },
  Sarah: {
    label: "Sarah",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

const DataUsagePage = ({ initialUsage = "individual" }) => {
  const [activeUsage, setActiveUsage] = useState(initialUsage);

  return (
    <div className="w-[393px] h-[852px] mx-auto bg-background text-foreground overflow-y-auto rounded-[60px] border-[14px] border-zinc-900 shadow-xl">
      <div className="h-full overflow-y-auto">
        {/* App Header */}
        <header className="flex items-center justify-between p-4 border-b">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-lg font-semibold">Data Usage</h1>
          <Button variant="ghost" size="icon">
            <Info className="w-6 h-6" />
          </Button>
        </header>

        {/* User Profile */}
        <div className="flex flex-col items-center mt-6 mb-4">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src="https://i.pinimg.com/564x/80/4e/f1/804ef1682390865b11f9d3df22293f7c.jpg"
              alt="User"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h2 className="mt-2 text-3xl font-bold tracking-tight font-proxima">
            Jack
          </h2>
          <p className="text-muted-foreground font-proxima">0400 333 123</p>
        </div>

        {/* Segmented Controls */}
        <ToggleGroup
          type="single"
          value={activeUsage}
          onValueChange={(value) => value && setActiveUsage(value)}
          className="justify-center mb-4"
        >
          <ToggleGroupItem value="individual" className="px-4">
            Jack's usage
          </ToggleGroupItem>
          <ToggleGroupItem value="family" className="px-4">
            Family usage
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Date and Period Selection */}
        <div className="flex items-center justify-between px-4 mb-4">
          <span className="font-semibold">26 Aug 2024</span>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[100px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Chart Area */}
        <Card className="mx-4">
          <CardHeader>
            <CardTitle>
              {activeUsage === "individual" ? "Individual" : "Family"} data
              usage
            </CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            {activeUsage === "individual" ? (
              <ChartContainer config={individualChartConfig}>
                <BarChart
                  accessibilityLayer
                  data={individualChartData}
                  margin={{
                    top: 20,
                  }}
                  width={325}
                  height={300}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="desktop" fill="#59C2FF" radius={8}>
                    <LabelList
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            ) : (
              <ChartContainer config={familyChartConfig}>
                <BarChart
                  accessibilityLayer
                  data={familyChartData}
                  layout="vertical"
                  margin={{
                    left: 0,
                  }}
                  width={325}
                  height={300}
                >
                  <YAxis
                    dataKey="browser"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) =>
                      familyChartConfig[value as keyof typeof familyChartConfig]
                        ?.label
                    }
                  />
                  <XAxis dataKey="visitors" type="number" hide />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="visitors" layout="vertical" radius={5} />
                </BarChart>
              </ChartContainer>
            )}
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Usage up by 5.2% this month <TrendingUp className="w-4 h-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total data usage for the last 6 months
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

const meta: Meta<typeof DataUsagePage> = {
  title: "Value Brand Explore/Mobile/Data Usage Page",
  component: DataUsagePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-4 bg-transparent">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DataUsagePage>;

export const IndividualUsageStory: Story = {
  name: "Individual Usage",
  args: {
    initialUsage: "individual",
  },
};

export const FamilyUsageStory: Story = {
  name: "Family Usage",
  args: {
    initialUsage: "family",
  },
};
