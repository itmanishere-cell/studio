import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import CtaBanner from "@/components/layout/cta-banner";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <div className="mt-5">
        <CtaBanner />
      </div>
      <Footer />
    </div>
  );
}
