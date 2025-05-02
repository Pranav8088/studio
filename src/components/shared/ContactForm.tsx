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
import { Card, CardContent } from '@/components/ui/card';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

// Dummy server action function (replace with actual implementation)
async function submitInquiry(data: FormData): Promise<{ success: boolean; message: string }> {
  console.log('Submitting inquiry:', data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate success/failure
  const success = Math.random() > 0.2; // 80% success rate

  if (success) {
    return { success: true, message: 'Inquiry submitted successfully! We will get back to you soon.' };
  } else {
    return { success: false, message: 'Failed to submit inquiry. Please try again later.' };
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

  async function onSubmit(values: FormData) {
     try {
      const result = await submitInquiry(values);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        form.reset(); // Reset form on success
      } else {
         toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
       toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
    }
  }

  return (
    <Card className="shadow-lg border border-border/50 animate-fade-in">
        <CardContent className="p-6 md:p-8">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Company Name (Optional)</FormLabel>
                        <FormControl>
                        <Input placeholder="Acme Corporation" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Your Message / Inquiry</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="Tell us how we can help your business grow..."
                            className="min-h-[120px]"
                            {...field}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="w-full md:w-auto">
                    {form.formState.isSubmitting ? "Submitting..." : "Send Inquiry"}
                    {!form.formState.isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
