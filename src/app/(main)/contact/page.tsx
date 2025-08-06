import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help. Reach out to us with your questions, inquiries, or service requests.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <h2 className="font-headline text-3xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form, and our team will get back to you within 24 hours. For immediate assistance, please use the contact details provided.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">123 Industrial Park, Tech City, 45678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold">Email</h3>
                    <a href="mailto:info@raasem.com" className="text-muted-foreground hover:text-primary transition-colors">info@raasem.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
               <div className="bg-card p-8 rounded-lg border shadow-sm">
                 <h2 className="font-headline text-2xl font-semibold mb-6">Send Us a Message</h2>
                 <ContactForm />
               </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-[400px]">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.4734347714!2d-0.2416817!3d51.5287718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1675782534571!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RAASEM Location"
          ></iframe>
        </div>
      </section>
    </>
  )
}
