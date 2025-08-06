import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, Wrench, ShieldQuestion, LifeBuoy } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">After-Sales Service</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our commitment to you continues long after your purchase. We provide comprehensive support to ensure your equipment runs perfectly.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-headline text-3xl font-semibold mb-6">Service & Support Details</h2>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-headline">
                  <ShieldQuestion className="mr-3 h-6 w-6 text-primary" /> Warranty Information
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12">
                  All RAASEM autoclaves come with a standard 2-year comprehensive warranty covering parts and labor. Extended warranty options are available for up to 5 years. Our warranty ensures that your investment is protected against manufacturing defects and provides peace of mind. Please register your product upon purchase to activate your warranty.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-headline">
                  <Wrench className="mr-3 h-6 w-6 text-primary" /> Maintenance & Calibration
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12">
                  Regular maintenance is key to the longevity and performance of your autoclave. We offer annual maintenance contracts (AMCs) that include preventative checks, parts replacement, and performance validation. Our certified technicians also provide on-site calibration services to ensure your equipment meets all regulatory standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-headline">
                  <LifeBuoy className="mr-3 h-6 w-6 text-primary" /> Technical Support
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12">
                  Our dedicated technical support team is available to assist you with any operational queries or troubleshooting. We offer remote assistance via phone and email, as well as on-site support for complex issues. We also maintain a comprehensive library of technical documents, manuals, and tutorials on our client portal.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-headline">
                  <Wrench className="mr-3 h-6 w-6 text-primary" /> Spare Parts
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12">
                  We guarantee the availability of genuine spare parts for all our models for at least 10 years after production. Using genuine parts ensures the safety and optimal performance of your autoclave. Parts can be ordered directly from our service department or through authorized distributors.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="md:col-span-1">
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="font-headline text-2xl font-semibold mb-6">Contact Service Team</h3>
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary shrink-0" />
                    <div>
                        <p className="font-semibold">Service Hotline</p>
                        <a href="tel:+1234567891" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-891</a>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary shrink-0" />
                     <div>
                        <p className="font-semibold">Support Email</p>
                        <a href="mailto:support@raasem.com" className="text-muted-foreground hover:text-primary transition-colors">support@raasem.com</a>
                    </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Our service team is available from 9 AM to 5 PM, Monday to Friday. For emergencies, please use our 24/7 hotline.
              </p>
              <Button asChild className="w-full mt-6">
                <Link href="/contact?service=true">Open a Service Ticket</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
