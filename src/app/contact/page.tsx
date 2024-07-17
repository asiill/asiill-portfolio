import ContactForm from "../components/contactForm";

export default function Contact() {
  return (
    <main className="flex flex-col gap-4">
      <h1>Send me a message</h1>
      <ContactForm />
    </main>
  );
}
