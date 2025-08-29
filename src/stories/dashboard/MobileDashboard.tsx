"use client"

import React, { useState, useEffect } from "react";
import { Alert, AlertTitle, AlertDescription } from "../../components/ui/alert";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";
import {
  TrendingUp,
  ListFilter,
  File,
  ChevronRight,
  Settings,
  Gift,
  BarChart,
  CreditCard,
  PlusCircle,
  Plane,
  HelpCircle,
  Wifi,
  Download,
  Upload,
  Activity,
} from "lucide-react";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Progress } from "../../components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { TooltipProvider } from "../../components/ui/tooltip";
import { Skeleton } from "../../components/ui/skeleton";

export default function MobileDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TooltipProvider>
      <div className="flex flex-col w-full h-full bg-white dark:bg-zinc-950">
        <header className="z-10 flex items-center justify-center w-full h-20 px-4 bg-black border-b-2 border-zinc-800">
          <svg focusable="false" fill="currentColor" role="presentation" viewBox="0 0 144 24" version="1.1" xmlns="http://www.w3.org/2000/svg" className="text-sys-secondary w-36 h-9">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 4H8.66102C10.5593 4 12.0169 4.52577 12.9661 5.50722C13.7119 6.27835 14.0847 7.22474 14.0847 8.41649V8.45155C14.0847 10.3794 13.1017 11.4309 11.9153 12.132C13.8136 12.9031 15 14.0247 15 16.3031V16.3381C15 19.4577 12.5593 21 8.83051 21H1V4ZM10.4915 9.04742C10.4915 7.92577 9.64407 7.29485 8.11864 7.29485H4.52542V10.9052H7.88136C9.47458 10.9052 10.4915 10.3794 10.4915 9.11753V9.04742ZM4.52542 13.9897H8.72881C10.5932 13.9897 11.4068 14.6907 11.4068 15.8474V15.8825C11.4068 17.1443 10.4237 17.7402 8.83051 17.7402H4.52542V13.9897Z"></path>
            <path d="M39 21H26.1054V17.677H35.2405V14.214H27.2297V10.8909H35.2757V7.32305H26V4H39V21Z"></path>
            <path d="M52 4H55.6791V17.607H64V21H52V4H52Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M72 12.5V12.5339C72 17.241 75.7602 21 80.9826 21C86.205 21 90 17.1733 90 12.5V12.4661C90 7.79283 86.2398 4 81.0174 4C75.795 4 72 7.82669 72 12.5ZM86.1006 12.5V12.5339C86.1006 15.3785 84.0116 17.6813 81.0174 17.6474C78.0232 17.6474 75.8994 15.2769 75.8994 12.4661V12.4323C75.8994 9.62151 77.9884 7.31873 80.9826 7.31873C83.9768 7.31873 86.1006 9.68924 86.1006 12.5Z"></path>
            <path d="M101 4H104.43L112.328 14.4588V4H116V21H112.848L104.707 10.1914V21H101.035V4H101Z"></path>
            <path d="M138.18 9.31673C138.11 8.97809 137.97 8.67331 137.794 8.40239C137.619 8.13147 137.374 7.89442 137.058 7.7251C136.778 7.52191 136.428 7.38645 136.042 7.28486C135.657 7.18327 135.236 7.1494 134.815 7.1494C133.484 7.1494 132.467 7.58964 131.766 8.50398C131.065 9.41833 130.75 10.739 130.75 12.4661C130.75 14.2271 131.065 15.5478 131.731 16.4622C132.397 17.3765 133.414 17.8167 134.745 17.8167C135.376 17.8167 135.902 17.749 136.357 17.5797C136.813 17.4104 137.199 17.2072 137.479 16.9363C137.759 16.6653 138.005 16.3606 138.145 16.0219C138.285 15.6833 138.355 15.3108 138.355 14.9721V14.1255H134.535V11.0438H142V14.2948C142 15.2092 141.86 16.0558 141.579 16.8685C141.299 17.6813 140.879 18.3924 140.283 19.002C139.687 19.6116 138.951 20.0857 138.005 20.4582C137.093 20.8307 136.007 21 134.71 21C133.449 21 132.327 20.7968 131.381 20.3904C130.435 19.9841 129.629 19.4084 128.963 18.6633C128.332 17.9183 127.841 17.0378 127.491 15.988C127.175 14.9382 127 13.7869 127 12.4661C127 11.1793 127.175 9.99402 127.491 8.97809C127.841 7.92829 128.332 7.04781 128.998 6.30279C129.664 5.55777 130.47 5.01594 131.416 4.60956C132.397 4.20319 133.484 4 134.745 4C135.762 4 136.708 4.13546 137.514 4.40637C138.355 4.67729 139.056 5.08367 139.652 5.55777C140.248 6.03187 140.738 6.60757 141.124 7.251C141.509 7.89442 141.755 8.60558 141.86 9.3506H138.18V9.31673Z"></path>
          </svg>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4 p-4 pb-16">
            {isLoading ? (
              <Skeleton className="w-full h-20" />
            ) : (
              <Alert variant="warning">
                <ExclamationTriangleIcon className="w-4 h-4" />
                <AlertTitle>You have an upcoming bill</AlertTitle>
                <AlertDescription>
                  Just a reminder, your bill is due in two weeks.
                </AlertDescription>
              </Alert>
            )}

            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight font-proxima">
                Mobile
              </h2>

              <div className="grid gap-4 sm:grid-row-2">
                {isLoading ? (
                  <Card className="flex flex-col h-full">
                    <CardHeader className="flex-shrink-0 pt-6 pb-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <Skeleton className="w-32 h-6 mb-2" />
                          <Skeleton className="w-24 h-4" />
                        </div>
                        <Skeleton className="w-16 h-4" />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow pt-6 space-y-4">
                      <div>
                        <Skeleton className="w-24 h-4 mb-1" />
                        <Skeleton className="w-40 h-10 mb-2" />
                        <Skeleton className="w-48 h-4" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {[...Array(6)].map((_, i) => (
                          <Skeleton key={i} className="h-16 sm:h-20" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="flex flex-col h-full">
                    <CardHeader className="flex-shrink-0 pt-6 pb-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold sm:text-2xl">
                            Data plan
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-400 sm:text-base font-proxima dark:text-gray-300">
                            0423 324 421
                          </CardDescription>
                        </div>
                        <a
                          href="#"
                          className="text-xs font-bold underline sm:text-sm text-sky-600 dark:text-sys-secondary"
                        >
                          Manage
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow pt-6 space-y-4">
                      <div>
                        <CardDescription className="mb-1 text-base font-medium tracking-tight text-gray-600 sm:text-lg font-proxima dark:text-gray-300">
                          Balance
                        </CardDescription>
                        <CardTitle className="text-4xl font-bold tracking-tighter sm:text-6xl">
                          500GB
                        </CardTitle>
                        <CardDescription>
                          In 10 days you'll get another 40GB.
                        </CardDescription>
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        <Button
                          variant="quicklink"
                          className="flex flex-col items-center justify-center h-16 space-y-1 rounded-lg sm:h-20"
                        >
                          <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm">Share data</span>
                        </Button>
                        <Button
                          variant="quicklink"
                          className="flex flex-col items-center justify-center h-16 space-y-1 rounded-lg sm:h-20"
                        >
                          <BarChart className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm">Usage</span>
                        </Button>
                        <Button
                          variant="quicklink"
                          className="flex flex-col items-center justify-center h-16 space-y-1 rounded-lg sm:h-20"
                        >
                          <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm">Billing</span>
                        </Button>
                        <Button
                          variant="quicklink"
                          className="flex flex-col items-center justify-center h-16 space-y-1 rounded-lg sm:h-20"
                        >
                          <PlusCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm">Top up data</span>
                        </Button>
                        <Button
                          variant="quicklink"
                          className="flex flex-col items-center justify-center h-16 space-y-1 rounded-lg sm:h-20"
                        >
                          <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm">Roaming</span>
                        </Button>
                        <Button
                          variant="quicklink"
                          className="flex flex-col items-center justify-center h-16 space-y-1 rounded-lg sm:h-20"
                        >
                          <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm">Help</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {isLoading ? (
                  <Card className="flex flex-col h-full">
                    <CardHeader className="flex-shrink-0 pt-6 pb-0">
                      <div className="flex items-center justify-between">
                        <Skeleton className="w-24 h-6" />
                        <Skeleton className="w-16 h-4" />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-0">
                      <div className="w-full overflow-auto">
                        <div className="grid w-full grid-cols-1 gap-4 p-4 sm:p-6">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-4">
                              <Skeleton className="w-10 h-10 rounded-full" />
                              <div className="flex-grow min-w-0">
                                <Skeleton className="w-24 h-4 mb-1" />
                                <Skeleton className="w-16 h-3" />
                              </div>
                              <Skeleton className="w-8 h-8" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Skeleton className="w-full h-10" />
                    </CardFooter>
                  </Card>
                ) : (
                  <Card className="flex flex-col h-full">
                    <CardHeader className="flex-shrink-0 pt-6 pb-0">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold sm:text-2xl">
                          Friends
                        </CardTitle>
                        <a
                          href="#"
                          className="text-xs font-bold underline sm:text-sm text-sky-600 dark:text-sys-secondary"
                        >
                          Edit
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-0">
                      <div className="w-full overflow-auto">
                        <div className="grid w-full grid-cols-1 gap-4 p-4 sm:p-6">
                          <div className="flex items-center space-x-4">
                            <Avatar className="w-10 h-10">
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
                              <p className="text-xs font-medium leading-none text-gray-500 sm:text-sm dark:text-gray-400">
                                300GB
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-8 h-8"
                              aria-label="View iPad account details"
                            >
                              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Button>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Avatar className="w-10 h-10">
                              <AvatarImage
                                src="https://i.pinimg.com/474x/2b/64/85/2b6485e915fd46fd8022d1fc34512aaa.jpg"
                                alt="Jules"
                              />
                              <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow min-w-0">
                              <h3 className="pb-1 text-sm font-bold leading-none">
                                Jules
                              </h3>
                              <p className="text-xs font-medium leading-none text-gray-500 sm:text-sm dark:text-gray-400">
                                3GB{" "}
                                <Badge className="ml-2" variant="warning">
                                  Data low
                                </Badge>
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-8 h-8"
                              aria-label="View Jules' account details"
                            >
                              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Button>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Avatar className="w-10 h-10">
                              <AvatarImage
                                src="https://i.pinimg.com/564x/db/5d/ac/db5dac24913fd008681b2262d7127ad3.jpg"
                                alt="Sarah"
                              />
                              <AvatarFallback>S</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow min-w-0">
                              <h3 className="pb-1 text-sm font-bold leading-none">
                                Sarah
                              </h3>
                              <p className="text-xs font-medium leading-none text-gray-500 sm:text-sm dark:text-gray-400">
                                20GB
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-8 h-8"
                              aria-label="View Sarah's account details"
                            >
                              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Button>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Avatar className="w-10 h-10">
                              <AvatarImage
                                src="https://i.pinimg.com/474x/91/73/4c/91734c0b0e7641ed32b73ad50867e8f5.jpg"
                                alt="Jack"
                              />
                              <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow min-w-0">
                              <h3 className="pb-1 text-sm font-bold leading-none">
                                Jack
                              </h3>
                              <p className="text-xs font-medium leading-none text-gray-500 sm:text-sm dark:text-gray-400">
                                100GB
                                <Badge className="ml-2" variant="info">
                                  Admin
                                </Badge>
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-8 h-8"
                              aria-label="View Jack's account details"
                            >
                              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button
                        className="w-full"
                        aria-label="View Usage"
                        variant="primary"
                        size="lg"
                      >
                        View Usage
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </div>
            </div>

            <Tabs defaultValue="week" className="w-full">
              <div className="flex items-center mb-4 max-w-[960px]">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="week" className="mt-0">
                <Card className="max-w-[970px]">
                  <CardHeader>
                    <CardTitle>Bill history</CardTitle>
                    <CardDescription>
                      Here is your billing history
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="space-y-2">
                        <Skeleton className="w-full h-8" />
                        <Skeleton className="w-full h-8" />
                        <Skeleton className="w-full h-8" />
                      </div>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Account</TableHead>
                            <TableHead className="hidden sm:table-cell">
                              Type
                            </TableHead>
                            <TableHead className="hidden sm:table-cell">
                              Status
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Date
                            </TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">NBN Premium</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                liam@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Sale
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="success">
                                Paid
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2023-06-23
                            </TableCell>
                            <TableCell className="text-right">
                              $250.00
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Mobile SIM</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                0400 312 121
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Refund
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="error">
                                Overdue
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="secondary">
                                Pay bill
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {isLoading ? (
              <Card className="relative overflow-hidden">
                <Skeleton className="absolute inset-0" />
                <div className="relative z-10 p-5">
                  <Skeleton className="w-48 h-6 mb-2" />
                  <Skeleton className="w-64 h-4 mb-4" />
                  <Skeleton className="w-24 h-10" />
                </div>
              </Card>
            ) : (
              <Card className="relative overflow-hidden">
                <img
                  alt="Colorful tardigrade"
                  className="absolute inset-0 object-cover w-full h-full"
                  height="300"
                  src="https://images.ctfassets.net/5lof7tf0p7b8/2RG1IB5Au9OwSULf8X4yFU/c8ff74b89b747bfa59bff7c0d35cd495/Featured-Image-Waterbear.jpg?w=2048&fm=webp&q=70"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="relative z-10 p-5 text-white bg-black bg-opacity-50">
                  <h3 className="mb-2 text-xl font-bold font-proxima">
                    Add mobile or data plan
                  </h3>
                  <p className="mb-4 text-sm">
                    Need another service? Just starting out? Order a SIM today
                    and get this party going.
                  </p>
                  <Button variant="secondary">Add plan</Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}