import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormData) {
    console.log("Contact form submitted:", data);
    toast({
      title: "Message sent!",
      description: "We will get back to you soon.",
    });
    form.reset();
  }

  return (
    <div>
      {/* Page Header - simple, warm */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h1 
            className="mb-5 text-3xl sm:text-4xl font-semibold text-foreground"
            data-testid="text-contact-title"
          >
            Get in Touch
          </h1>
          <p 
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="text-contact-intro"
          >
            Not sure which session is right for you? Feeling nervous about signing up? Just curious? Send us a note and we will get back to you.
          </p>
        </div>
      </section>

      {/* Contact Form - simpler, no card wrapper */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-md px-4 sm:px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} data-testid="input-name" />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} data-testid="input-email" />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What would you like to know?"
                        className="min-h-[120px] resize-none"
                        {...field}
                        data-testid="input-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" data-testid="button-submit">
                Send Message
              </Button>
            </form>
          </Form>

          <p className="mt-8 text-center text-sm text-muted-foreground/70" data-testid="text-response-time">
            We read every message.
          </p>
        </div>
      </section>
    </div>
  );
}
