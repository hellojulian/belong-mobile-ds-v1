import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InputOTP } from "@/components/ui/input-otp"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,    
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Form>

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Please enter your first name.",
  }),
  lastName: z.string().min(2, {
    message: "Please enter your last name.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

const FormDemo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card className="w-[393px]">
      <CardHeader>
        <CardTitle>Registration Form</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-foreground">First Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter first name" 
                      variant={form.formState.errors.firstName ? "error" : "default"}
                      className="w-full"
                      {...field} 
                    />
                  </FormControl>
                  {/* <FormDescription>
                    {form.formState.errors.firstName ? null : "Your first name"}
                  </FormDescription> */}
                  <FormMessage className="text-sys-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-foreground">Last Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter last name" 
                      variant={form.formState.errors.lastName ? "error" : "default"}
                      className="w-full"
                      {...field} 
                    />
                  </FormControl>
                  {/* <FormDescription>
                    {form.formState.errors.lastName ? null : "Your last name"}
                  </FormDescription> */}
                  <FormMessage className="text-sys-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-foreground">Password</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="Enter password" 
                      variant={form.formState.errors.password ? "error" : "default"}
                      className="w-full"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    {form.formState.errors.password ? null : "Password must be at least 8 characters"}
                  </FormDescription>
                  <FormMessage className="text-sys-error" />
                </FormItem>
              )}
            />
            <Button variant="primary" type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export const Default: Story = {
  render: () => <FormDemo />,
}

export const Accessibility: Story = {
  render: () => <FormDemo />,
  parameters: {
    docs: {
      description: {
        story: `
The Form component incorporates several ARIA attributes and accessibility features to enhance usability for all users:

1. \`role="group"\`: Added to the FormItem component to indicate that it's a group of related form controls.
2. \`aria-describedby\`: Used in the FormControl component to link the form control with its description and error message.
3. \`aria-invalid\`: Used in the FormControl component to indicate when the input is invalid.
4. \`role="alert"\`: Added to the FormMessage component to ensure that error messages are announced by screen readers.
5. \`aria-live="assertive"\`: Added to the FormMessage component to ensure that error messages are announced immediately when they appear.
6. Proper labeling: The FormLabel component uses the \`htmlFor\` attribute to associate the label with its form control.
7. Unique IDs: The FormDescription and FormMessage components use unique IDs that are referenced by the form control's \`aria-describedby\`.
8. Dynamic content: The FormDescription is conditionally rendered based on the form state, providing context-sensitive information to users.
9. Error styling: Error messages are styled with the "text-sys-error" class for consistent and accessible error presentation.
10. Consistent label color: The label color remains consistent regardless of the form's error state.
11. Visual error indication: The Input component changes to an 'error' variant when there's an error, providing a clear visual cue to users.
12. Structured layout: The form is wrapped in a Card component, providing a clear visual boundary and structure to the form.
13. Consistent field width: All form fields are set to full width within their container for a uniform appearance.
14. Compact layout: The vertical spacing between form fields is reduced for a more compact design.

These accessibility features ensure that the Form component is usable by people relying on assistive technologies, providing better context, feedback, and navigation options.
        `,
      },
    },
  },
}

const otpFormSchema = z.object({
  otp: z.string().length(6, {
    message: "OTP must be exactly 6 digits.",
  }),
})

const OTPFormDemo = () => {
  const [otpError, setOtpError] = React.useState<string | null>(null)

  const form = useForm<z.infer<typeof otpFormSchema>>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      otp: "",
    },
  })

  function onSubmit(values: z.infer<typeof otpFormSchema>) {
    console.log(values)
    // Simulating an API call to verify OTP
    if (values.otp !== "123456") {
      setOtpError("Invalid OTP. Please try again.")
    } else {
      setOtpError(null)
    }
  }

  return (
    <Card className="w-[393px]">
      <CardHeader>
        <CardTitle>OTP Verification</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-foreground">Enter OTP</FormLabel>
                  <FormControl>
                    <InputOTP
                      length={6}
                      onChange={field.onChange}
                      variant={form.formState.errors.otp || otpError ? "error" : "default"}
                    />
                  </FormControl>
                  <FormDescription>
                    {form.formState.errors.otp || otpError ? null : "Enter the 6-digit OTP sent to your device"}
                  </FormDescription>
                  <FormMessage className="text-sys-error">
                    {form.formState.errors.otp?.message || otpError}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button variant="primary" type="submit" className="w-full">Verify OTP</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export const OTPForm: Story = {
  render: () => <OTPFormDemo />,
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the use of the InputOTP component within a form, including error states and error messaging.

Key features:
1. Uses the InputOTP component for entering a 6-digit OTP.
2. Implements form validation using Zod schema.
3. Displays error messages for invalid input (less than 6 digits).
4. Simulates an API call to verify the OTP and shows an error for incorrect OTP.
5. Uses the 'error' variant of InputOTP to visually indicate errors.
6. Provides accessible error messaging using FormMessage component.
7. Conditionally renders form description based on error state.

Accessibility features:
1. Proper labeling with FormLabel.
2. Error messages are associated with the input using aria-describedby (handled by FormControl).
3. InputOTP component includes aria-label for screen reader context.
4. Error messages are styled consistently and placed in a logical reading order.
5. The form is structured using semantic Card components for clear visual boundaries.

To test error states:
1. Submit the form without entering all 6 digits to see the Zod validation error.
2. Enter any 6-digit OTP other than "123456" to see the simulated API error.
3. Enter "123456" to see the form submit successfully (check console for output).
        `,
      },
    },
  },
}