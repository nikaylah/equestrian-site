import { ContactFormSection } from "@/components/contact-form-section";

export default function Contact() {
  return (
    <div>
      {/* Page Header - simple, warm */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <h1 
            className="mb-[var(--space-md)] text-3xl sm:text-4xl font-semibold text-foreground"
            data-testid="text-contact-title"
          >
            Get in Touch
          </h1>
          <p 
            className="text-lg text-muted-foreground leading-[1.7]"
            data-testid="text-contact-intro"
          >
            Not sure which session is right for you? Feeling nervous about signing up? Just curious? Send us a note and we will get back to you.
          </p>
        </div>
      </section>

      {/* Contact Form - simpler, no card wrapper */}
      <section className="py-[var(--space-xl)]">
        <ContactFormSection introText="There are no wrong questions here." />
      </section>
    </div>
  );
}
