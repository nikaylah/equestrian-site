import { ContactFormSection } from "@/components/contact-form-section";

export default function Contact() {
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
        <ContactFormSection introText="There are no wrong questions here." />
      </section>
    </div>
  );
}
