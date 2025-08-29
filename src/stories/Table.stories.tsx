import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
    Check,
    CheckCircle,
    Eye,
    InfoCircle,
    AlertTriangle,
    Trash01,
    AlertOctagon,
    X,
  } from "@untitled-ui/icons-react";



  
  import { Badge } from '@/components/ui/badge';
  import { Button } from "@/components/ui/button";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Dots } from "@mynaui/icons-react";

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An accessible table component with various sub-components for structuring tabular data.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table aria-label="List of fruits and their characteristics">
      <TableCaption>List of fruits and their characteristics</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Fruit</TableHead>
          <TableHead>Color</TableHead>
          <TableHead>Taste</TableHead>
          <TableHead>Calories (per 100g)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Apple</TableCell>
          <TableCell>Red/Green</TableCell>
          <TableCell>Sweet</TableCell>
          <TableCell>52</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Banana</TableCell>
          <TableCell>Yellow</TableCell>
          <TableCell>Sweet</TableCell>
          <TableCell>89</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Lemon</TableCell>
          <TableCell>Yellow</TableCell>
          <TableCell>Sour</TableCell>
          <TableCell>29</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Average Calories</TableCell>
          <TableCell>56.67</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic table with header, body, footer, and caption.',
      },
    },
  },
};

export const NotificationTable: Story = {
    render: () => (
      <div className="w-full max-w-6xl mx-auto overflow-x-auto">
        <Table aria-label="Notification list">
          <TableHeader>
            <TableRow>
              <TableHead className="w-32">Type</TableHead>
              <TableHead>Message</TableHead>
              <TableHead className="w-32">Status</TableHead>
              <TableHead className="w-32">Date</TableHead>
              <TableHead className="w-32">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-sys-success size-5" aria-hidden="true" />
                  Success
                </div>
              </TableCell>
              <TableCell>Your order has been shipped!</TableCell>
              <TableCell>
                <Badge variant="outline">Unread</Badge>
              </TableCell>
              <TableCell>2023-06-01</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" aria-label="Mark as read">
                    <Check className="size-5" />
                    <span className="sr-only">Mark as read</span>
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Delete">
                    <Trash01 className="size-5" />
                    <span className="sr-only">Delete</span>
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="View details">
                    <Eye className="size-5" />
                    <span className="sr-only">View details</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="text-sys-warning size-5" aria-hidden="true" />
                  Warning
                </div>
              </TableCell>
              <TableCell>Your subscription is about to expire.</TableCell>
              <TableCell>
                <Badge variant="outline">Unread</Badge>
              </TableCell>
              <TableCell>2023-05-28</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" aria-label="Mark as read">
                    <Check className="size-5" />
                    <span className="sr-only">Mark as read</span>
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Delete">
                    <Trash01 className="size-5" />
                    <span className="sr-only">Delete</span>
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="View details">
                    <Eye className="size-5" />
                    <span className="sr-only">View details</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <AlertOctagon className="text-sys-error size-5" aria-hidden="true" />
                  Error
                </div>
              </TableCell>
              <TableCell>There was an error processing your payment.</TableCell>
              <TableCell>
                <Badge variant="outline">Read</Badge>
              </TableCell>
              <TableCell>2023-05-15</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" aria-label="Mark as read">
                    <Check className="size-5" />
                    <span className="sr-only">Mark as read</span>
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Delete">
                    <Trash01 className="size-5" />
                    <span className="sr-only">Delete</span>
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="View details">
                    <Eye className="size-5" />
                    <span className="sr-only">View details</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <InfoCircle className="text-sys-information size-5" aria-hidden="true" />
                  Info
                </div>
              </TableCell>
              <TableCell>Your account has been updated.</TableCell>
              <TableCell>
                <Badge variant="outline">Read</Badge>
              </TableCell>
              <TableCell>2023-04-30</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" aria-label="Mark as read">
                    <Check className="size-5" />
                    <span className="sr-only">Mark as read</span>
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Delete">
                    <Trash01 className="size-5" />
                    <span className="sr-only">Delete</span>
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="View details">
                    <Eye className="size-5" />
                    <span className="sr-only">View details</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  }
  
  export const ResourceSharingTable: Story = {
    render: () => (
      <div className="w-full mx-auto overflow-x-auto max-w-7xl">
        <Table aria-label="Resource sharing list">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Shared By</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Date Shared</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Tailwind CSS Documentation</div>
              </TableCell>
              <TableCell>Praveen Juge</TableCell>
              <TableCell>Development</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge>CSS</Badge>
                  <Badge>Utility</Badge>
                  <Badge>Framework</Badge>
                </div>
              </TableCell>
              <TableCell>2023-04-15</TableCell>
              <TableCell>View</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Actions">
                      <Dots className="size-6" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">React Documentation</div>
              </TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Development</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge>JavaScript</Badge>
                  <Badge>Library</Badge>
                  <Badge>UI</Badge>
                </div>
              </TableCell>
              <TableCell>2023-03-20</TableCell>
              <TableCell>Edit, View</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Actions">
                      <Dots className="size-6" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Figma Design Handbook</div>
              </TableCell>
              <TableCell>Michael Johnson</TableCell>
              <TableCell>Design</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge>Design</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Guide</Badge>
                </div>
              </TableCell>
              <TableCell>2023-02-10</TableCell>
              <TableCell>View</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Actions">
                      <Dots className="size-6" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Vercel Deployment Guide</div>
              </TableCell>
              <TableCell>Sarah Lee</TableCell>
              <TableCell>Development</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge>Deployment</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>Guide</Badge>
                </div>
              </TableCell>
              <TableCell>2023-01-25</TableCell>
              <TableCell>Edit, View</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Actions">
                      <Dots className="size-6" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  }
  
  export const EmptyTable: Story = {
    render: () => (
      <div className="w-full max-w-6xl mx-auto overflow-x-auto">
        <Table aria-label="Empty user list">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  }
  
  export const LoadingTable: Story = {
    render: () => {
      const isLoading = true
  
      return (
        <div className="w-full max-w-6xl mx-auto overflow-x-auto">
          <Table aria-label="Loading fruit characteristics" aria-busy={isLoading}>
            <TableCaption>List of fruits and their characteristics</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Fruit</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Taste</TableHead>
                <TableHead>Calories (per 100g)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <>
                  {[...Array(3)].map((_, index) => (
                    <TableRow key={index}>
                      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-[40px]" /></TableCell>
                    </TableRow>
                  ))}
                </>
              ) : (
                <>
                  <TableRow>
                    <TableCell>Apple</TableCell>
                    <TableCell>Red/Green</TableCell>
                    <TableCell>Sweet</TableCell>
                    <TableCell>52</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Banana</TableCell>
                    <TableCell>Yellow</TableCell>
                    <TableCell>Sweet</TableCell>
                    <TableCell>89</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lemon</TableCell>
                    <TableCell>Yellow</TableCell>
                    <TableCell>Sour</TableCell>
                    <TableCell>29</TableCell>
                  </TableRow>
                </>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-[40px]" />
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      )
    },
  }

  