import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Atlantic Ministries Trust ✝️ Faith, Family, Freedom 🇺🇸",
  description: "Serving the Great Commission from Schenectady to the ends of the earth. Join us in our mission of faith and service. 🙏",
});

import { campaigns } from "@/data/campaigns";

export default function Home() {
  const featuredCampaigns = campaigns.slice(0, 3);

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
            <Link href="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 border-white text-white bg-transparent shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:bg-white/10 hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-black text-royal-blue mb-8 uppercase tracking-tight">Our Mission</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              We are a faith-based trust dedicated to serving the physical and spiritual needs of our community and the global church.
              Through local outreach and international missions, we aim to be the hands and feet of Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Discover Campaigns */}
      <section className="py-24 bg-royal-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Support a Campaign</h2>
              <p className="text-xl text-blue-100 max-w-2xl font-medium">Direct your support where it's needed most today.</p>
            </div>
            <Link href="/campaigns">
              <Button variant="secondary" size="lg" className="font-black px-10 shadow-lg whitespace-nowrap">
                Join our Mission ✝️
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCampaigns.map((c) => (
              <Link key={c.slug} href={`/campaigns/${c.slug}`} className="group bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-golden-yellow hover:shadow-lg transition-all">
                <h3 className="font-serif text-2xl font-black text-royal-blue mb-3 uppercase">{c.heroTitle}</h3>
                <p className="text-gray-600 mb-6 font-medium line-clamp-2">{c.description.split('.')[0]}.</p>
                <span className="font-bold text-royal-blue group-hover:text-golden-yellow uppercase tracking-wide text-sm flex items-center gap-2">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/campaigns">
              <Button variant="outline" size="lg" className="font-black text-lg px-8 border-2">
                View All Campaigns
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
