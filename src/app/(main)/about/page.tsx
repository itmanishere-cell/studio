import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Target, Eye, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About RAASEM Technologies</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Pioneering sterilization and safety through precision engineering.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-semibold mb-4 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" /> Our Mission
            </h2>
            <p className="text-muted-foreground mb-4">
              To design, manufacture, and deliver the world's most reliable and efficient sterilization solutions. We empower our clients in the medical and industrial sectors to achieve the highest standards of safety and operational excellence by providing them with innovative technology and unwavering support.
            </p>
            <h2 className="font-headline text-3xl font-semibold mb-4 mt-8 flex items-center gap-3">
              <Eye className="w-8 h-8 text-primary" /> Our Vision
            </h2>
            <p className="text-muted-foreground">
              To be the global leader in sterilization technology, recognized for our commitment to quality, sustainability, and customer-centric innovation. We envision a future where advanced sterilization is accessible to all, contributing to a safer and healthier world.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://placehold.co/800x800.png"
              alt="RAASEM team discussing plans"
              fill
              className="object-cover rounded-lg shadow-lg"
              data-ai-hint="engineering team"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-semibold">Our History & Achievements</h2>
            <p className="mt-2 text-muted-foreground">
              A legacy of innovation and excellence spanning over two decades.
            </p>
          </div>
          <div className="mt-12 relative">
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
             <div className="space-y-12">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                    <div className="md:text-right md:pr-8">
                        <p className="font-headline text-lg font-semibold text-primary">2001</p>
                        <h3 className="font-headline text-xl font-semibold mt-1">Company Founded</h3>
                        <p className="mt-2 text-sm text-muted-foreground">RAASEM was established with a small team of engineers passionate about improving sterilization technology.</p>
                    </div>
                    <div className="hidden md:block"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary hidden md:block"></div>
                </div>
                 <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                    <div className="hidden md:block"></div>
                    <div className="md:text-left md:pl-8">
                        <p className="font-headline text-lg font-semibold text-primary">2010</p>
                        <h3 className="font-headline text-xl font-semibold mt-1">First International Patent</h3>
                        <p className="mt-2 text-sm text-muted-foreground">We received our first international patent for a high-efficiency rapid cooling system, revolutionizing cycle times.</p>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary hidden md:block"></div>
                </div>
                 <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                    <div className="md:text-right md:pr-8">
                        <p className="font-headline text-lg font-semibold text-primary">2018</p>
                        <h3 className="font-headline text-xl font-semibold mt-1">ISO 13485 Certification</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Achieved ISO 13485 certification, demonstrating our commitment to the highest quality standards for medical devices.</p>
                    </div>
                    <div className="hidden md:block"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary hidden md:block"></div>
                </div>
                 <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                    <div className="hidden md:block"></div>
                    <div className="md:text-left md:pl-8">
                        <p className="font-headline text-lg font-semibold text-primary">2023</p>
                        <h3 className="font-headline text-xl font-semibold mt-1">Expansion to New Facility</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Moved into a new state-of-the-art 50,000 sq. ft. manufacturing facility to meet growing global demand.</p>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary hidden md:block"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-semibold">Our Expert Team & Facility</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                Our success is driven by our dedicated team of professionals and our world-class manufacturing environment.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image src="https://placehold.co/800x600.png" alt="RAASEM team photo" fill className="object-cover" data-ai-hint="diverse team meeting" />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image src="https://placehold.co/800x600.png" alt="RAASEM factory interior" fill className="object-cover" data-ai-hint="factory interior" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
