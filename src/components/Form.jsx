import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form as ShadForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Validation Schema
const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  // React Hook Form setup
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Submit handler with resend.com API call
  const onSubmit = async (values) => {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `re_8WqNRK6a_FzBFQJcfogyZFbvzKLGLoG9T`, // <-- Yahan apni API key lagao
        },
        body: JSON.stringify({
          from: "liaqatmateen304@gmail.com", // <-- Yahan verified email lagao
          to: [values.email],
          subject: `Message from ${values.name}`,
          html: `
            <h1>New message from contact form</h1>
            <p><strong>Name:</strong> ${values.name}</p>
            <p><strong>Email:</strong> ${values.email}</p>
            <p><strong>Password:</strong> ${values.password}</p>
          `,
        }),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        form.reset();
      } else {
        const errorData = await response.json();
        alert(`Failed to send email: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg p-10 space-y-6">
      <h2 className="text-2xl font-bold text-center font-spaceGrotesk">Contact Us</h2>
      <ShadForm {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormDescription>Enter your full name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@mail.com"
                    {...field}
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormDescription>We will not share your email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...field}
                      className="focus:ring-2 focus:ring-blue-500 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-2 text-gray-500 hover:text-black"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </FormControl>
                <FormDescription>Choose a strong password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Submit
          </Button>
        </form>
      </ShadForm>
    </div>
  );
};

export default Form;
