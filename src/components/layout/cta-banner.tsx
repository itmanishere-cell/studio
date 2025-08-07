import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaBanner() {
    return (
        <div className="relative z-10">
             <div className="container mb-[-50px]">
                <div style={{ backgroundColor: '#6F95B7' }} className="rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <h3 className="font-headline text-xl font-semibold text-center md:text-left">
                        Can't find what you're looking for?
                    </h3>
                    <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Contact Our Experts</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
