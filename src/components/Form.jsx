import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Form as ShadForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message is too short"),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values) => {
    try {
      const templateParams = {
        user_name: values.name,
        user_email: values.email,
        message: values.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY   // Public Key
      );

      alert("Email sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Email send error:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <ShadForm {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="example@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input placeholder="Write your message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-secondary">
            Send
          </Button>
        </form>
      </ShadForm>
    </div>
  );
};

export default ContactForm;
