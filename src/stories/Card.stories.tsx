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
} from "@/components/ui/card";
import { InputOTP } from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  BellRing,
  Check,
  TrendingUp,
  CodeIcon,
  CalendarIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isLoading: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;




// Card With Select Story
export const CardWithSelect: Story = {
  render: ({ isLoading = false }) => (
    <Card
      className="w-[361px] overflow-hidden"
      role="region"
      aria-labelledby="create-project-title"
    >
      <div className="relative w-full h-[160px]">
        {isLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <img
            src="https://images.ctfassets.net/5lof7tf0p7b8/2RG1IB5Au9OwSULf8X4yFU/c8ff74b89b747bfa59bff7c0d35cd495/Featured-Image-Waterbear.jpg?w=2048&fm=webp&q=70"
            alt="Decorative image of a waterbear"
            className="absolute inset-0 object-cover w-full h-full rounded-t-xl"
          />
        )}
      </div>
      <CardHeader>
        <CardTitle id="create-project-title">
          {isLoading ? <Skeleton className="w-3/4 h-6" /> : "Select your details"}
        </CardTitle>
        <CardDescription>
          {isLoading ? <Skeleton className="w-full h-4" /> : "Select your service and state."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form aria-labelledby="create-project-title">
          <div className="grid items-center w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              {isLoading ? <Skeleton className="w-16 h-4" /> : <Label htmlFor="service-select">Service</Label>}
              {isLoading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <Select>
                  <SelectTrigger id="service-select" aria-labelledby="service-label">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="NBN">NBN</SelectItem>
                    <SelectItem value="eSIM">eSIM</SelectItem>
                    <SelectItem value="Modems">iPad Plan</SelectItem>
                  </SelectContent>
                </Select>
              )}
              <span id="service-label" className="sr-only">
                Choose a service for your project
              </span>
            </div>
            <div className="flex flex-col space-y-1.5">
              {isLoading ? <Skeleton className="w-16 h-4" /> : <Label htmlFor="state-select">State</Label>}
              {isLoading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <Select>
                  <SelectTrigger id="state-select" aria-labelledby="state-label">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="Australian Capital Territory">ACT</SelectItem>
                    <SelectItem value="New South Wales">NSW</SelectItem>
                    <SelectItem value="Queensland">QLD</SelectItem>
                    <SelectItem value="South Australia">SA</SelectItem>
                    <SelectItem value="Tasmania">TAS</SelectItem>
                    <SelectItem value="Victoria">VIC</SelectItem>
                    <SelectItem value="Western Australia">WA</SelectItem>
                  </SelectContent>
                </Select>
              )}
              <span id="state-label" className="sr-only">
                Choose a state for your project
              </span>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="grid grid-flow-col gap-3 justify-stretch">
        {isLoading ? (
          <>
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
          </>
        ) : (
          <>
            <Button variant="secondary" aria-label="Cancel project creation">
              Cancel
            </Button>
            <Button variant="primary" size="lg" aria-label="Continue project creation">
              Continue
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  ),
};

// Card With Inputs Story
export const CardWithInputs: React.FC<{ isLoading?: boolean }> = ({ isLoading = false }) => (
  <Card
    className="w-[361px] overflow-hidden"
    role="region"
    aria-labelledby="login-title"
  >
    <div className="relative w-full h-[160px]">
      {isLoading ? (
        <Skeleton className="w-full h-full" />
      ) : (
        <img
          src="https://images.ctfassets.net/5lof7tf0p7b8/CmJSHTKj8v2vCcEND5Th0/6c8f717a54c9c01b8558e6dbaa5b8253/PrimaryBanner_SecondLifeShop_1800x1020px.png"
          alt=""
          className="absolute inset-0 object-cover w-full h-full rounded-t-xl"
        />
      )}
    </div>
    <CardHeader>
      <div className="mb-4">
        {isLoading ? (
          <Skeleton className="w-16 h-4 mb-1" />
        ) : (
          <Label
            htmlFor="login-progress"
            className="text-sm text-muted-foreground"
          >
            1 of 4
          </Label>
        )}
        {isLoading ? (
          <Skeleton className="w-full h-2 mt-1" />
        ) : (
          <Progress
            id="login-progress"
            value={25}
            className="h-2 mt-1"
            aria-label="Login progress"
          />
        )}
      </div>
      <CardTitle id="login-title">
        {isLoading ? <Skeleton className="w-3/4 h-6" /> : "Log in to Belong"}
      </CardTitle>
      <CardDescription>
        {isLoading ? <Skeleton className="w-full h-4" /> : "Enter your details to continue."}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form aria-labelledby="login-title">
        <div className="grid items-center w-full gap-4">
          <div className="flex flex-col space-y-1.5">
            {isLoading ? <Skeleton className="w-16 h-4" /> : <Label htmlFor="name-input">Name</Label>}
            {isLoading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <Input
                id="name-input"
                placeholder="Enter name"
                aria-required="true"
              />
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            {isLoading ? <Skeleton className="w-16 h-4" /> : <Label htmlFor="password-input">Password</Label>}
            <div className="flex flex-col space-y-1.5">
              {isLoading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <Input
                  id="password-input"
                  type="password"
                  placeholder="Enter password"
                  aria-required="true"
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="grid grid-flow-col gap-3 justify-stretch">
      {isLoading ? (
        <>
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
        </>
      ) : (
        <>
          <Button variant="secondary" aria-label="Cancel login">
            Cancel
          </Button>
          <Button variant="primary" aria-label="Log in to Belong">
            Log in
          </Button>
        </>
      )}
    </CardFooter>
  </Card>
);

// Card With Notifications Story
export const Notifications: Story = {
  render: ({ isLoading = false }) => {
    const notifications = [
      {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
      },
      {
        title: "You have a new message!",
        description: "1 hour ago",
      },
      {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
      },
    ];

    return (
      <Card
        className="w-[361px] overflow-hidden"
        role="region"
        aria-labelledby="notifications-title"
      >
        <CardHeader>
          <CardTitle id="notifications-title">
            {isLoading ? <Skeleton className="w-3/4 h-6" /> : "Notifications"}
          </CardTitle>
          <CardDescription>
            {isLoading ? <Skeleton className="w-full h-4" /> : "You have 3 unread messages."}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {isLoading ? (
            <Skeleton className="w-full h-20" />
          ) : (
            <div className="flex items-center p-4 space-x-4 border rounded-md border-zinc-800">
              <BellRing aria-hidden="true" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              <Switch aria-label="Toggle push notifications" />
            </div>
          )}
          <div>
            {isLoading
              ? Array(3).fill(0).map((_, index) => (
                  <Skeleton key={index} className="w-full h-16 mb-4" />
                ))
              : notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex w-2 h-2 translate-y-1 rounded-full bg-sky-500" aria-hidden="true" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </CardContent>
        <CardFooter>
          {isLoading ? (
            <Skeleton className="w-full h-10" />
          ) : (
            <Button className="w-full" variant="primary">
              <Check className="w-4 h-4 mr-2" aria-hidden="true" /> Mark all as read
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  },
};

// Log In Form Story
const LoginForm = ({ isLoading = false }) => (
  <Card className="max-w-[361px] w-[361px]">
    <CardHeader>
      <CardTitle className="text-2xl">
        {isLoading ? <Skeleton className="w-3/4 h-8" /> : "Log in to Belong"}
      </CardTitle>
    </CardHeader>
    <CardContent>
    <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              {isLoading ? (
                <Skeleton className="w-16 h-4" />
              ) : (
                <Label htmlFor="email">Email</Label>
              )}
              {isLoading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <Input
                  id="email"
                  type="email"
                  placeholder="user@belong.com.au"
                  required
                  aria-required="true"
                />
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                {isLoading ? (
                  <Skeleton className="w-16 h-4" />
                ) : (
                  <Label htmlFor="password">Password</Label>
                )}
                {isLoading ? (
                  <Skeleton className="w-32 h-4" />
                ) : (
                <a href="#" className="inline-block ml-auto text-sm underline">
                  Forgot your password?
                </a>
              )}
            </div>
            {isLoading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <Input id="password" type="password" required aria-required="true" />
            )}
          </div>
          <div className="pt-4 space-y-3">
            {isLoading ? (
              <>
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-10" />
              </>
            ) : (
              <>
                <Button type="submit" className="w-full" variant="primary">
                  Login
                </Button>
                <Button
                  variant="secondary"
                  className="flex items-center justify-center w-full gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Log in with Google
                </Button>
              </>
            )}
          </div>
        </div>
      </form>
      {!isLoading && (
        <div className="mt-4 text-sm text-center">
          Don&apos;t have an account?{" "}
          <a href="#" className="font-semibold underline text-ref-secondary-30">
            Sign up
          </a>
        </div>
      )}
    </CardContent>
  </Card>
);

export const LogIn: Story = {
  render: ({ isLoading = false }) => <LoginForm isLoading={isLoading} />,
};

// Sign Up Form Story
const SignUpForm = ({ isLoading = false }) => (
  <Card className="max-w-sm mx-auto" style={{ width: "361px" }}>
    <CardHeader>
      <CardTitle>
        {isLoading ? <Skeleton className="w-3/4 h-8" /> : "Sign Up"}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              {isLoading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <Input id="first-name" placeholder="John" required aria-required="true" />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              {isLoading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <Input id="last-name" placeholder="Citizen" required aria-required="true" />
              )}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            {isLoading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <Input
                id="email"
                type="email"
                placeholder="user@belong.com.au"
                required
                aria-required="true"
              />
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            {isLoading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <Input id="password" type="password" required aria-required="true" />
            )}
          </div>
          <div className="pt-4 space-y-3">
            {isLoading ? (
              <>
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-10" />
              </>
            ) : (
              <>
                <Button type="submit" className="w-full" variant="primary">
                  Sign up
                </Button>
                <Button
                  variant="secondary"
                  className="flex items-center justify-center w-full gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Sign up with Google
                </Button>
              </>
            )}
          </div>
        </div>
      </form>
      {!isLoading && (
        <div className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <a href="#" className="font-semibold underline text-sys-secondary-text">
            Sign in
          </a>
        </div>
      )}
    </CardContent>
  </Card>
);

export const SignUp: Story = {
  render: ({ isLoading = false }) => (
    <Card className="max-w-sm mx-auto" style={{ width: "361px" }}>
      <CardHeader>
        <CardTitle>
          {isLoading ? <Skeleton className="w-3/4 h-8" /> : "Sign Up"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                {isLoading ? <Skeleton className="w-16 h-4" /> : <Label htmlFor="first-name">First name</Label>}
                {isLoading ? (
                  <Skeleton className="w-full h-10" />
                ) : (
                  <Input id="first-name" placeholder="John" required aria-required="true" />
                )}
              </div>
              <div className="grid gap-2">
                {isLoading ? <Skeleton className="w-16 h-4" /> : <Label htmlFor="last-name">Last name</Label>}
                {isLoading ? (
                  <Skeleton className="w-full h-10" />
                ) : (
                  <Input id="last-name" placeholder="Citizen" required aria-required="true" />
                )}
              </div>
            </div>
            <div className="grid gap-2">
              {isLoading ? <Skeleton className="w-16 h-4" /> : <Label htmlFor="email">Email</Label>}
              {isLoading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <Input
                  id="email"
                  type="email"
                  placeholder="user@belong.com.au"
                  required
                  aria-required="true"
                />
              )}
            </div>
            <div className="grid gap-2">
              {isLoading ? <Skeleton className="w-16 h-4" /> : <Label htmlFor="password">Password</Label>}
              {isLoading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <Input id="password" type="password" required aria-required="true" />
              )}
            </div>
            <div className="pt-4 space-y-3">
              {isLoading ? (
                <>
                  <Skeleton className="w-full h-10" />
                  <Skeleton className="w-full h-10" />
                </>
              ) : (
                <>
                  <Button type="submit" className="w-full" variant="primary">
                    Sign up
                  </Button>
                  <Button
                    variant="secondary"
                    className="flex items-center justify-center w-full gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                    Sign up with Google
                  </Button>
                </>
              )}
            </div>
          </div>
        </form>
        {!isLoading && (
          <div className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <a href="#" className="font-semibold underline text-sys-secondary-text">
              Sign in
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  ),
};

// OTP Spline Story (using InputOTP)
export const OTPSpline: Story = {
  render: ({ isLoading = false }) => {
    const handleOTPChange = (value: string) => {
      console.log("OTP changed:", value);
    };

    return (
      <Card
        className="w-[350px] h-[510px] overflow-hidden"
        role="region"
        aria-labelledby="verify-otp-title"
      >
        <div className="relative w-full h-[160px]">
          {isLoading ? (
            <Skeleton className="w-full h-full" />
          ) : (
            <Spline scene="https://prod.spline.design/R04g6uynhKXmBhok/scene.splinecode" />
          )}
        </div>
        <CardHeader>
          <div className="mb-4">
            <Label
              htmlFor="password-strength"
              className="text-sm text-muted-foreground"
            >
              {isLoading ? <Skeleton className="w-16 h-4" /> : "2 of 4"}
            </Label>
            {isLoading ? (
              <Skeleton className="w-full h-2 mt-1" />
            ) : (
              <Progress
                id="password-strength"
                value={50}
                className="h-2 mt-1"
                aria-label="Progress: 2 of 4 steps completed"
              />
            )}
          </div>
          <CardTitle id="verify-otp-title">
            {isLoading ? <Skeleton className="w-3/4 h-6" /> : "Making sure you're you"}
          </CardTitle>
          <CardDescription>
            {isLoading ? <Skeleton className="w-full h-4"  /> : "We sent a code to **** *** 048"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form aria-labelledby="verify-otp-title">
            <div className="grid items-center w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                {isLoading ? (
                  <Skeleton className="w-24 h-4" />
                ) : (
                  <Label htmlFor="otp-input">Enter the code</Label>
                )}
                {isLoading ? (
                  <Skeleton className="w-full h-10" />
                ) : (
                  <InputOTP
                    id="otp-input"
                    length={6}
                    onChange={handleOTPChange}
                    aria-label="Enter 6-digit OTP code"
                  />
                )}
              </div>
            </div>
          </form>
          {isLoading ? (
            <Skeleton className="w-full h-4 mt-4" />
          ) : (
            <p className="pt-4 text-sm text-muted-foreground">
              Didn't get a code?{" "}
              <button className="font-semibold underline text-ref-secondary-30" aria-label="Send another code">
                Send another one
              </button>
            </p>
          )}
        </CardContent>
        <CardFooter className="grid grid-flow-col gap-3 justify-stretch">
          {isLoading ? (
            <>
              <Skeleton className="w-full h-10" />
              <Skeleton className="w-full h-10" />
            </>
          ) : (
            <>
              <Button variant="secondary" aria-label="Go back">
                Back
              </Button>
              <Button variant="primary" aria-label="Verify OTP code">
                Verify
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    );
  },
};


// OTP Story
export const OPTScreen1: Story = {
  render: ({ isLoading = false }) => {
    const handleOTPChange = (value: string) => {
      console.log("OTP changed:", value);
    };

    return (
      <Card
        className="w-[350px] h-[510px] overflow-hidden"
        role="region"
        aria-labelledby="verify-otp-title"
      >
        <div className="relative w-full h-[160px]">
        {isLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <img
            src="https://github.com/hellojulian/belong/blob/main/phone.jpg?raw=true"
            alt="A cool looking phone"
            className="absolute inset-0 object-cover w-full h-full rounded-t-xl"
          />
        )}
        </div>
        <CardHeader>
          <div className="mb-4">
            <Label
              htmlFor="password-strength"
              className="text-sm text-muted-foreground"
            >
              {isLoading ? <Skeleton className="w-16 h-4" /> : "2 of 4"}
            </Label>
            {isLoading ? (
              <Skeleton className="w-full h-2 mt-1" />
            ) : (
              <Progress
                id="password-strength"
                value={50}
                className="h-2 mt-1"
                aria-label="Progress: 2 of 4 steps completed"
              />
            )}
          </div>
          <CardTitle id="verify-otp-title">
            {isLoading ? <Skeleton className="w-3/4 h-6" /> : "Making sure you're you"}
          </CardTitle>
          <CardDescription>
            {isLoading ? <Skeleton className="w-full h-4"  /> : "We sent a code to **** *** 048"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form aria-labelledby="verify-otp-title">
            <div className="grid items-center w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                {isLoading ? (
                  <Skeleton className="w-24 h-4" />
                ) : (
                  <Label htmlFor="otp-input">Enter the code</Label>
                )}
                {isLoading ? (
                  <Skeleton className="w-full h-10" />
                ) : (
                  <InputOTP
                    id="otp-input"
                    length={6}
                    onChange={handleOTPChange}
                    aria-label="Enter 6-digit OTP code"
                  />
                )}
              </div>
            </div>
          </form>
          {isLoading ? (
            <Skeleton className="w-full h-4 mt-4" />
          ) : (
            <p className="pt-4 text-sm text-muted-foreground">
              Didn't get a code?{" "}
              <button className="font-semibold underline text-ref-secondary-30" aria-label="Send another code">
                Send another one
              </button>
            </p>
          )}
        </CardContent>
        <CardFooter className="grid grid-flow-col gap-3 justify-stretch">
          {isLoading ? (
            <>
              <Skeleton className="w-full h-10" />
              <Skeleton className="w-full h-10" />
            </>
          ) : (
            <>
              <Button variant="secondary" aria-label="Go back">
                Back
              </Button>
              <Button variant="primary" aria-label="Verify OTP code">
                Verify
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    );
  },
};



export const OTPScreen2: Story = {
  render: ({ isLoading = false }) => {
    const handleOTPChange = (value: string) => {
      console.log("OTP changed:", value);
    };

    return (
      <Card
        className="flex flex-col w-[350px] h-[480px] overflow-hidden"
        role="region"
        aria-labelledby="create-passcode-title"
      >
        <div className="relative w-full h-[160px] flex-shrink-0">
        {isLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <img
            src="https://github.com/hellojulian/belong/blob/main/2.jpg?raw=true"
            alt="A cool looking key"
            className="absolute inset-0 object-cover w-full h-full rounded-t-xl"
          />
        )}
        </div>
        <div className="flex flex-col flex-grow">
          <CardHeader className="flex-shrink-0">
            <div className="mb-4">
              <Label
                htmlFor="progress-v2"
                className="text-sm text-muted-foreground"
              >
                {isLoading ? <Skeleton className="w-16 h-4" /> : "3 of 4"}
              </Label>
              {isLoading ? (
                <Skeleton className="w-full h-2 mt-1" />
              ) : (
                <Progress
                  id="progress-v2"
                  value={75}
                  className="h-2 mt-1"
                  aria-label="Progress: 3 of 4 steps completed"
                />
              )}
            </div>
            <CardTitle id="create-passcode-title">
              {isLoading ? <Skeleton className="w-3/4 h-6" /> : "Create a passcode"}
            </CardTitle>
            <CardDescription>
              {isLoading ? <Skeleton className="w-full h-4" /> : "This is how you'll log into the app."}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto">
            <form aria-labelledby="create-passcode-title">
              <div className="grid items-center w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  {isLoading ? (
                    <Skeleton className="w-32 h-4" />
                  ) : (
                    <Label htmlFor="passcode-input">Enter your new code</Label>
                  )}
                  {isLoading ? (
                    <Skeleton className="w-full h-10" />
                  ) : (
                    <InputOTP
                      id="passcode-input"
                      length={6}
                      onChange={handleOTPChange}
                      aria-label="Enter 6-digit passcode"
                    />
                  )}
                </div>
              </div>
            </form>
          </CardContent>
        </div>
        <CardFooter className="grid grid-flow-col gap-3 mt-auto justify-stretch">
          {isLoading ? (
            <>
              <Skeleton className="w-full h-10" />
              <Skeleton className="w-full h-10" />
            </>
          ) : (
            <>
              <Button variant="secondary" aria-label="Go back">
                Back
              </Button>
              <Button variant="primary" aria-label="Confirm new passcode">
                Confirm
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    );
  },
};

export const OTPScreen3: Story = {
  render: ({ isLoading = false }) => {
    const handleOTPChange = (value: string) => {
      console.log("OTP changed:", value);
    };

    return (
      <Card
        className="flex flex-col w-[350px] h-[480px] overflow-hidden"
        role="region"
        aria-labelledby="reenter-passcode-title"
      >
        <div className="relative w-full h-[160px] flex-shrink-0">
        {isLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <img
            src="https://github.com/hellojulian/belong/blob/main/confirm.jpg?raw=true"
            alt="A cool looking lock"
            className="absolute inset-0 object-cover w-full h-full rounded-t-xl"
          />
        )}
        </div>
        <div className="flex flex-col flex-grow">
          <CardHeader className="flex-shrink-0">
            <div className="mb-4">
              <Label
                htmlFor="progress-v3"
                className="text-sm text-muted-foreground"
              >
                {isLoading ? <Skeleton className="w-16 h-4" /> : "4 of 4"}
              </Label>
              {isLoading ? (
                <Skeleton className="w-full h-2 mt-1" />
              ) : (
                <Progress
                  id="progress-v3"
                  value={100}
                  className="h-2 mt-1"
                  aria-label="Progress: 4 of 4 steps completed"
                />
              )}
            </div>
            <CardTitle id="reenter-passcode-title">
              {isLoading ? <Skeleton className="w-3/4 h-6" /> : "Re-enter that passcode"}
            </CardTitle>
            <CardDescription>
              {isLoading ? <Skeleton className="w-full h-4" /> : "Lock it in."}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto">
            <form aria-labelledby="reenter-passcode-title">
              <div className="grid items-center w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  {isLoading ? (
                    <Skeleton className="w-24 h-4" />
                  ) : (
                    <Label htmlFor="reenter-passcode-input">Enter the code</Label>
                  )}
                  {isLoading ? (
                    <Skeleton className="w-full h-10" />
                  ) : (
                    <InputOTP
                      id="reenter-passcode-input"
                      length={6}
                      onChange={handleOTPChange}
                      aria-label="Re-enter 6-digit passcode"
                    />
                  )}
                </div>
              </div>
            </form>
          </CardContent>
        </div>
        <CardFooter className="grid grid-flow-col gap-3 mt-auto justify-stretch">
          {isLoading ? (
            <>
              <Skeleton className="w-full h-10" />
              <Skeleton className="w-full h-10" />
            </>
          ) : (
            <>
              <Button variant="secondary" aria-label="Go back">
                Back
              </Button>
              <Button variant="primary" aria-label="Confirm re-entered passcode">
                Confirm
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    );
  },
};

// Accessibility Story
export const Accessibility: Story = {
  render: ({ isLoading = false }) => (
    <Card className="max-w-[361px] w-[361px]">
    <CardHeader>
      <CardTitle className="text-2xl">
        {isLoading ? <Skeleton className="w-3/4 h-8" /> : "Log in to Belong"}
      </CardTitle>
    </CardHeader>
    <CardContent>
    <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              {isLoading ? (
                <Skeleton className="w-16 h-4" />
              ) : (
                <Label htmlFor="email">Email</Label>
              )}
              {isLoading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <Input
                  id="email"
                  type="email"
                  placeholder="user@belong.com.au"
                  required
                  aria-required="true"
                />
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                {isLoading ? (
                  <Skeleton className="w-16 h-4" />
                ) : (
                  <Label htmlFor="password">Password</Label>
                )}
                {isLoading ? (
                  <Skeleton className="w-32 h-4" />
                ) : (
                <a href="#" className="inline-block ml-auto text-sm underline">
                  Forgot your password?
                </a>
              )}
            </div>
            {isLoading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <Input id="password" type="password" required aria-required="true" />
            )}
          </div>
          <div className="pt-4 space-y-3">
            {isLoading ? (
              <>
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-10" />
              </>
            ) : (
              <>
                <Button type="submit" className="w-full" variant="primary">
                  Login
                </Button>
                <Button
                  variant="secondary"
                  className="flex items-center justify-center w-full gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Log in with Google
                </Button>
              </>
            )}
          </div>
        </div>
      </form>
      {!isLoading && (
        <div className="mt-4 text-sm text-center">
          Don&apos;t have an account?{" "}
          <a href="#" className="font-semibold underline text-ref-secondary-30">
            Sign up
          </a>
        </div>
      )}
    </CardContent>
  </Card>
  ),

  parameters: {
    docs: {
      description: {
        story: `
The Card component incorporates several accessibility features to enhance usability for all users:

- \`role="region"\`: Indicates that the card is a distinct section of the page.
- \`aria-labelledby\`: Associates the card's title with the entire card for screen readers.
- Semantic structure: \`CardTitle\` and \`CardDescription\` components provide a clear hierarchy.
- Form labels: Each form control has an associated \`<Label>\` component.
- \`aria-required\`: Indicates that form fields are required.
- \`aria-describedby\`: Links form controls with their respective descriptions for additional context.
- \`sr-only\` class: Provides additional context for screen reader users without affecting visual layout.
- Descriptive link text: Ensures that links have clear purposes when read out of context.
- \`aria-label\`: Provides additional context for buttons and links where needed.
- \`aria-hidden="true"\`: Applied to decorative icons to prevent screen readers from announcing them.

Example usage:

\`\`\`jsx
<Card className="max-w-[361px] w-[361px]">
    <CardHeader>
      <CardTitle className="text-2xl">
        {isLoading ? <Skeleton className="w-3/4 h-8" /> : "Login to Belong"}
      </CardTitle>
    </CardHeader>
    <CardContent>
    <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              {isLoading ? (
                <Skeleton className="w-16 h-4" />
              ) : (
                <Label htmlFor="email">Email</Label>
              )}
              {isLoading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <Input
                  id="email"
                  type="email"
                  placeholder="user@belong.com.au"
                  required
                  aria-required="true"
                />
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                {isLoading ? (
                  <Skeleton className="w-16 h-4" />
                ) : (
                  <Label htmlFor="password">Password</Label>
                )}
                {isLoading ? (
                  <Skeleton className="w-32 h-4" />
                ) : (
                <a href="#" className="inline-block ml-auto text-sm underline">
                  Forgot your password?
                </a>
              )}
            </div>
            {isLoading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <Input id="password" type="password" required aria-required="true" />
            )}
          </div>
          <div className="pt-4 space-y-3">
            {isLoading ? (
              <>
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-10" />
              </>
            ) : (
              <>
                <Button type="submit" className="w-full" variant="primary">
                  Login
                </Button>
                <Button
                  variant="secondary"
                  className="flex items-center justify-center w-full gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Log in with Google
                </Button>
              </>
            )}
          </div>
        </div>
      </form>
      {!isLoading && (
        <div className="mt-4 text-sm text-center">
          Don&apos;t have an account?{" "}
          <a href="#" className="font-semibold underline text-ref-secondary-30">
            Sign up
          </a>
        </div>
      )}
    </CardContent>
  </Card>
\`\`\`

        `,
      },
    },
  },
};