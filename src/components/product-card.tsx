import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type ProductCardProps = {
  name: string
  description: string
  imageUrl: string
  imageHint: string
  productUrl: string
  useGradient?: boolean
}

export default function ProductCard({ name, description, imageUrl, imageHint, productUrl, useGradient = false }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline text-xl mb-2">{name}</CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className={`w-full ${useGradient ? 'text-white bg-gradient-to-r from-[#ed4f1b] to-[#f47c52] hover:from-[#f47c52] hover:to-[#ed4f1b]' : ''}`} variant={useGradient ? undefined : "secondary"}>
          <Link href={productUrl}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
