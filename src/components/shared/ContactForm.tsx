
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(50, { message: 'Name cannot exceed 50 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().max(100, { message: 'Company name cannot exceed 100 characters.' }).optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(1000, { message: 'Message cannot exceed 1000 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

// Dummy server action function (replace with actual implementation)
async function submitInquiry(data: FormData): Promise<{ success: boolean; message: string }> {
  // Removed console.log('Submitting inquiry:', data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500)); // Slightly longer delay

  // Simulate success/failure
  const success = Math.random() > 0.1; // 90% success rate

  if (success) {
    return { success: true, message: 'Thank you! Your inquiry has been sent successfully. We will get back to you soon.' };
  } else {
    return { success: false, message: 'Submission failed. Please check your connection and try again.' };
  }
}


export default function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const {formState: {isSubmitting}} = form; // Destructure isSubmitting

  async function onSubmit(values: FormData) {
     try {
      const result = await submitInquiry(values);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
          variant: "default", // Use default variant for success
        });
        form.reset(); // Reset form on success
      } else {
         toast({
          title: "Submission Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
       // Removed console.error("Contact form submission error:", error); 
       toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again later or contact us directly.",
          variant: "destructive",
        });
    }
  }

  return (
    // Use Card for structure and styling
    <Card className="border-border/60 shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
          {/* Optional: Add description <CardDescription>Fill out the form below...</CardDescription> */}
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Grid for name and email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                        <Input placeholder="e.g., John Doe" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="e.g., john.doe@company.com" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                {/* Company Name Field */}
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Company Name (Optional)</FormLabel>
                        <FormControl>
                        <Input placeholder="e.g., Acme Corporation" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                 {/* Message Field */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Your Message / Inquiry *</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="Tell us how we can help your business grow..."
                            className="min-h-[140px] resize-y" // Increased min-height
                            {...field}
                            disabled={isSubmitting}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                {/* Submit Button */}
                <div className="flex justify-end"> {/* Align button to the right */}
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Inquiry
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                    </Button>
                 </div>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
