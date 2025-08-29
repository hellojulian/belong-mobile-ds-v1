"use client"

import React, { useState, useEffect } from "react";
import { Alert, AlertTitle, AlertDescription } from "../../components/ui/alert";
import { AlertOctagon, InfoCircle, CheckCircle, AlertTriangle, AlertSquare } from "@untitled-ui/icons-react";
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
import Header from "./Header"

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState("week");
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
      <div className="flex flex-col w-full min-h-screen mt-8 mb-16 bg-white dark:bg-zinc-950">
        <div className="flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
          <main className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              {isLoading ? (
                <Skeleton className="w-full h-16" />
              ) : (
                <Alert variant="error" className="mb-4">
                  <AlertOctagon className="w-5 h-5" />
                  <AlertTitle>Bill overdue</AlertTitle>
                  <AlertDescription>
                    Please pay your bill as soon as possible
                  </AlertDescription>
                </Alert>
              )}

              {/* My Mobile section */}
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight font-proxima">
                  Mobile
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {isLoading ? (
                    <>
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
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>

              {isLoading ? (
                <Skeleton className="w-full h-16" />
              ) : (
                <Alert variant="info" className="mb-4">
                  <InfoCircle className="w-5 h-5" />
                  <AlertTitle>Upcoming outage</AlertTitle>
                  <AlertDescription>
                    Planned outage in your area on 17/10/24
                  </AlertDescription>
                </Alert>
              )}

              {/* My Internet section */}
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight font-proxima">
                  Internet
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {isLoading ? (
                    <>
                      <Card className="flex flex-col h-full">
                        <CardHeader className="flex-shrink-0 pt-6 pb-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <Skeleton className="w-32 h-6 mb-2" />
                              <Skeleton className="w-48 h-4" />
                            </div>
                            <Skeleton className="w-16 h-4" />
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow pt-6 space-y-4">
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {[...Array(3)].map((_, i) => (
                              <Skeleton key={i} className="h-16 sm:h-20" />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="flex flex-col h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div>
                                <Skeleton className="w-24 h-6 mb-1" />
                                <Skeleton className="w-32 h-4" />
                              </div>
                            </div>
                            <Skeleton className="w-16 h-6" />
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-2">
                                <Skeleton className="w-24 h-4" />
                                <Skeleton className="w-16 h-4" />
                              </div>
                              <Skeleton className="w-full h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-2">
                                <Skeleton className="w-24 h-4" />
                                <Skeleton className="w-16 h-4" />
                              </div>
                              <Skeleton className="w-full h-2" />
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="mt-auto">
                          <Skeleton className="w-full h-10" />
                        </CardFooter>
                      </Card>
                    </>
                  ) : (
                    <>
                      <Card className="flex flex-col h-full">
                        <CardHeader className="flex-shrink-0 pt-6 pb-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl font-bold sm:text-2xl">
                                Premium plan
                              </CardTitle>
                              <CardDescription className="text-sm text-gray-400 sm:text-base font-proxima dark:text-gray-300">
                                5/533 Melville Road,<br></br>Brunswick, 3055 VIC
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
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
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
                              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="text-sm">Help</span>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="flex flex-col h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div>
                                <CardTitle className="text-lg font-bold sm:text-2xl">
                                  Speed test
                                </CardTitle>
                                <CardDescription className="text-xs sm:text-sm">
                                  Presented by speedtest.net
                                </CardDescription>
                              </div>
                            </div>
                            <Badge variant="success" className="text-xs">
                              High 
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-2 text-xs font-medium sm:text-sm">
                                <span>Download speed</span>
                                <span>100 Mbps</span>
                              </div>
                              <Progress value={80} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-2 text-xs font-medium sm:text-sm">
                                <span>Upload speed</span>
                                <span>40 Mbps</span>
                              </div>
                              <Progress value={60} className="h-2" />
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="mt-auto">
                          <Button
                            className="w-full"
                            aria-label="View Usage"
                            variant="secondary"
                            size="lg"
                          >
                            Run test again{" "}
                          </Button>
                        </CardFooter>
                      </Card>
                    </>
                  )}
                </div>
              </div>

              {/* Bill History section */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex flex-col items-start mb-4 sm:flex-row sm:items-center">
                  <TabsList className="mb-2 sm:mb-0">
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                  </TabsList>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0 sm:ml-auto">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="gap-1 text-xs sm:text-sm h-7 sm:h-8"
                        >
                          <ListFilter className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          <span>Filter</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>
                          Paid
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                          Overdue
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                          Refunded
                        </DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="gap-1 text-xs sm:text-sm h-7 sm:h-8"
                    >
                      <File className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      <span>Save as PDF</span>
                    </Button>
                  </div>
                </div>
                <TabsContent value="week" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl sm:text-2xl">
                        Bill history
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm">
                        Here is your billing history
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isLoading ? (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead><Skeleton className="w-20 h-4" /></TableHead>
                              <TableHead className="hidden sm:table-cell"><Skeleton className="w-16 h-4" /></TableHead>
                              <TableHead className="hidden sm:table-cell"><Skeleton className="w-16 h-4" /></TableHead>
                              <TableHead className="hidden md:table-cell"><Skeleton className="w-24 h-4" /></TableHead>
                              <TableHead className="text-right"><Skeleton className="w-16 h-4 ml-auto" /></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {[...Array(2)].map((_, index) => (
                              <TableRow key={index}>
                                <TableCell>
                                  <Skeleton className="w-24 h-4 mb-1" />
                                  <Skeleton className="hidden w-32 h-3 md:block" />
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                  <Skeleton className="w-16 h-4" />
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                  <Skeleton className="w-16 h-6" />
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  <Skeleton className="w-24 h-4" />
                                </TableCell>
                                <TableCell className="text-right">
                                  <Skeleton className="w-16 h-4 ml-auto" />
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
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
                                <div className="text-xs font-medium sm:text-sm">
                                  NBN Premium
                                </div>
                                <div className="hidden text-xs text-muted-foreground md:inline">
                                  liam@example.com
                                </div>
                              </TableCell>
                              <TableCell className="hidden text-xs sm:table-cell sm:text-sm">
                                Sale
                              </TableCell>
                              <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs" variant="success">
                                  Paid
                                </Badge>
                              </TableCell>
                              <TableCell className="hidden text-xs md:table-cell sm:text-sm">
                                2023-06-23
                              </TableCell>
                              <TableCell className="text-xs text-right sm:text-sm">
                                $250.00
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <div className="text-xs font-medium sm:text-sm">
                                  Data only SIM
                                </div>
                                <div className="hidden text-xs text-muted-foreground md:inline">
                                  0423 324 421
                                </div>
                              </TableCell>
                              <TableCell className="hidden text-xs sm:table-cell sm:text-sm">
                                Refund
                              </TableCell>
                              <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs" variant="error">
                                  Overdue
                                </Badge>
                              </TableCell>
                              <TableCell className="hidden text-xs md:table-cell sm:text-sm">
                                2023-06-24
                              </TableCell>
                              <TableCell className="text-right">
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  className="text-xs"
                                >
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
            </div>
            <div>
              {isLoading ? (
                <Card className="relative overflow-hidden">
                  <Skeleton className="absolute inset-0" />
                  <div className="relative p-4 z-1 sm:p-5">
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
                    height="600"
                    src="https://images.ctfassets.net/5lof7tf0p7b8/2RG1IB5Au9OwSULf8X4yFU/c8ff74b89b747bfa59bff7c0d35cd495/Featured-Image-Waterbear.jpg?w=2048&fm=webp&q=70"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                  <div className="relative p-4 text-white bg-black bg-opacity-50 z-1 sm:p-5">
                    <h3 className="mb-2 text-lg font-bold sm:text-xl font-proxima">
                      Add mobile or data plan
                    </h3>
                    <p className="mb-4 text-xs sm:text-sm">
                      Need another service? Just starting out? Order a SIM today
                      and get this party going.
                    </p>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="text-xs sm:text-sm"
                    >
                      Add plan
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}