import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const allProducts = [
  {
    id: "s120",
    name: "Model S-120 Autoclave",
    description: "High-capacity steam sterilizer for large medical facilities. Features advanced control systems for precise sterilization cycles.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "medical autoclave",
  },
  {
    id: "c30",
    name: "Compact Lab Sterilizer C-30",
    description: "Perfect for laboratories and small clinics. Offers fast and efficient sterilization of instruments and media.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "lab sterilizer",
  },
  {
    id: "i500",
    name: "Industrial Autoclave I-500",
    description: "Robust and reliable solution for industrial applications, including aerospace and material curing.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "industrial autoclave",
  },
  {
    id: "s200",
    name: "Model S-200 High-Pressure",
    description: "Designed for specialized medical applications requiring higher pressures and temperatures, ensuring complete sterilization.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "autoclave control panel",
  },
  {
    id: "v80",
    name: "Vertical Autoclave V-80",
    description: "Space-saving vertical design ideal for labs with limited space. Top-loading for ease of use.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "vertical autoclave",
  },
  {
    id: "p20",
    name: "Portable Sterilizer P-20",
    description: "Lightweight and portable autoclave for mobile clinics and field operations. Durable and easy to operate.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "portable sterilizer",
  },
]

export default function ProductsPage() {
  return (
    <>
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Products</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Engineered for reliability, safety, and performance. Explore our complete range of sterilization solutions.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                imageHint={product.imageHint}
                productUrl={`/products#${product.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
