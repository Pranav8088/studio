
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const servicesOptions = [
  "Digital Marketing Suite",
  "Web Development",
  "Mobile App Development",
  "SEO Services",
  "Social Media Marketing",
  "PPC Management (Google Ads)",
  "Content Creation & Strategy",
  "Marketing Technologies",
  "ORM (Online Reputation Management)",
  "Design Thinking Workshops",
  "Video Production",
  "Website Maintenance",
  "Hosting & Support",
  "Government Tenders & Documentation",
  "Other/Not Sure",
];


const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(50, { message: 'Name cannot exceed 50 characters.' }),
  companyName: z.string().max(100, { message: 'Company name cannot exceed 100 characters.' }).optional(),
  contactNo: z.string().min(10, { message: 'Contact number must be at least 10 digits.' }).max(15, {message: 'Contact number cannot exceed 15 digits.'}).regex(/^\+?[0-9\s-()]+$/, {message: "Please enter a valid phone number."}),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  servicesYouWant: z.string().min(1, { message: 'Please select a service or type your requirement.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(1000, { message: 'Message cannot exceed 1000 characters.' }).optional(),
});

type FormData = z.infer<typeof formSchema>;

// Dummy server action function (replace with actual implementation)
async function submitInquiry(data: FormData): Promise<{ success: boolean; message: string }> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));

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
      companyName: '',
      contactNo: '',
      email: '',
      servicesYouWant: '',
      message: '',
    },
  });

  const {formState: {isSubmitting}} = form;

  async function onSubmit(values: FormData) {
     try {
      const result = await submitInquiry(values);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
          variant: "default",
        });
        form.reset();
      } else {
         toast({
          title: "Submission Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
       toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again later or contact us directly.",
          variant: "destructive",
        });
    }
  }

  return (
    <Card className="border-border/60 shadow-md w-full">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-foreground">Send us Your Inquiry</CardTitle>
          <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    name="companyName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                        <Input placeholder="e.g., Acme Corporation" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="contactNo"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Contact No. *</FormLabel>
                        <FormControl>
                        <Input type="tel" placeholder="e.g., +91 98765 43210" {...field} disabled={isSubmitting} />
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
                        <FormLabel>Email ID *</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="e.g., john.doe@company.com" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                 <FormField
                    control={form.control}
                    name="servicesYouWant"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Services You Want *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a service you're interested in" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            {servicesOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                {option}
                                </SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Any Message (Optional)</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="Share any specific details or questions..."
                            className="min-h-[120px] resize-y"
                            {...field}
                            disabled={isSubmitting}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <div className="flex justify-end">
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
