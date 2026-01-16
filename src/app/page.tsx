import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Sunrise over the Atlantic with Cross and Flag"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-royal-blue/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg tracking-tight animate-fade-in-up">
            Faith, Family, and Freedom
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md font-light animate-fade-in-up delay-100">
            Serving the Great Commission from Schenectady to the Ends of the Earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link href="/donate">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                Partner With Us
              </Button>
            </Link>
            <Link href="/who-we-are">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 border-white text-white hover:bg-white/20 hover:text-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-royal-blue mb-8">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            We are dedicated to spreading the Light of Christ, preserving our godly heritage, and empowering the next generation of believers.
            Through discipleship, community outreach, and patriotic education, we stand firm on the rock of ages.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
