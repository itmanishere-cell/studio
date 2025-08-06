import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProductCard from "@/components/product-card"
import { CheckCircle, ArrowRight, ShieldCheck, Zap, Factory } from "lucide-react"

const featuredProducts = [
  {
    name: "Model S-120 Autoclave",
    description: "High-capacity steam sterilizer for large medical facilities. Features advanced control systems for precise sterilization cycles.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "medical autoclave",
    productUrl: "/products#s120",
  },
  {
    name: "Compact Lab Sterilizer C-30",
    description: "Perfect for laboratories and small clinics. Offers fast and efficient sterilization of instruments and media.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "lab sterilizer",
    productUrl: "/products#c30",
  },
  {
    name: "Industrial Autoclave I-500",
    description: "Robust and reliable solution for industrial applications, including aerospace and material curing.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "industrial autoclave",
    productUrl: "/products#i500",
  },
]

const whyChooseUs = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Uncompromising Quality",
        description: "We adhere to the strictest international standards to deliver products of the highest quality and reliability."
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Innovative Technology",
        description: "Our R&D team continuously innovates to bring you the most efficient and advanced sterilization solutions."
    },
    {
        icon: <Factory className="h-8 w-8 text-primary" />,
        title: "State-of-the-Art Manufacturing",
        description: "Our modern facility is equipped with cutting-edge technology to ensure precision and excellence."
    },
]

export default function Home() {
  return (
    <>
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="RAASEM factory background"
          fill
          priority
          className="object-cover -z-10"
          data-ai-hint="autoclave factory"
        />
        <div className="absolute inset-0 bg-black/50 -z-10" />
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
            Advanced Sterilization Solutions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
            RAASEM delivers cutting-edge autoclaves and sterilization technology for medical and industrial excellence.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/products">Explore Our Products</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video">
                <Image src="https://placehold.co/800x600.png" alt="Company introduction" fill className="object-cover rounded-lg shadow-md" data-ai-hint="autoclave manufacturing" />
            </div>
            <div>
              <h2 className="font-headline text-3xl font-semibold mb-4">Welcome to RAASEM Technologies</h2>
              <p className="text-muted-foreground mb-4">
                For over two decades, RAASEM has been a pioneer in the design and manufacture of high-performance autoclaves and sterilizers. Our commitment to innovation, quality, and customer satisfaction has made us a trusted partner for hospitals, laboratories, and industrial clients worldwide.
              </p>
              <p className="text-muted-foreground mb-6">
                We blend precision engineering with state-of-the-art technology to create sterilization solutions that are not only effective but also efficient and easy to use.
              </p>
               <Button asChild>
                  <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-semibold">Featured Products</h2>
            <p className="mt-2 text-muted-foreground">
              Discover our range of autoclaves designed for performance, reliability, and safety across various applications.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
          <div className="mt-12 text-center">
             <Button asChild size="lg" variant="outline">
                <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-semibold">Why Choose RAASEM?</h2>
            <p className="mt-2 text-muted-foreground">
              Our dedication to excellence sets us apart.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item) => (
                  <Card key={item.title} className="text-center">
                      <CardHeader>
                          <div className="mx-auto bg-secondary rounded-full w-16 h-16 flex items-center justify-center">
                            {item.icon}
                          </div>
                      </CardHeader>
                      <CardContent>
                          <h3 className="font-headline text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                  </Card>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 text-center">
          <h2 className="font-headline text-3xl font-bold">Ready to Enhance Your Sterilization Process?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
            Contact our experts today for a personalized consultation or to request a quote for your specific needs.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
