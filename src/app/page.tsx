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
            <Link href="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 border-white text-white bg-transparent shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:bg-white/10 hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
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

      {/* Campaigns Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-black text-royal-blue mb-4 uppercase tracking-tighter">Support a Campaign</h2>
            <div className="h-1.5 w-24 bg-golden-yellow mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Do Good - Featured */}
            <div className="lg:col-span-3 bg-gradient-to-r from-royal-blue to-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="text-center md:text-left space-y-4 max-w-2xl">
                  <div className="inline-block bg-golden-yellow text-royal-blue font-black px-4 py-1 rounded-full text-sm uppercase tracking-wider mb-2">
                    Featured Campaign
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl font-black uppercase tracking-tight">Do Good: Patriot Edition</h3>
                  <p className="text-blue-100 text-lg md:text-xl font-medium">One Nation—Love Over Fear. Help us reach our <span className="text-golden-yellow font-black">$25,000 Goal</span> to strengthen communities and serve our neighbors.</p>
                </div>
                <Link href="/campaigns/do-good">
                  <Button size="lg" className="bg-white text-royal-blue hover:bg-golden-yellow hover:text-royal-blue font-black text-xl px-10 py-8 shadow-lg transition-all transform group-hover:scale-105">
                    Join the Movement
                  </Button>
                </Link>
              </div>
            </div>

            {/* Other Campaigns */}
            <Link href="/campaigns/meals" className="group bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-golden-yellow hover:shadow-lg transition-all">
              <h3 className="font-serif text-2xl font-black text-royal-blue mb-3 uppercase">Meals for Families</h3>
              <p className="text-gray-600 mb-6 font-medium">Providing food and groceries to families and children in need.</p>
              <span className="font-bold text-royal-blue group-hover:text-golden-yellow uppercase tracking-wide text-sm flex items-center gap-2">
                Learn More →
              </span>
            </Link>

            <Link href="/campaigns/veterans-dogs" className="group bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-golden-yellow hover:shadow-lg transition-all">
              <h3 className="font-serif text-2xl font-black text-royal-blue mb-3 uppercase">Veterans + Dogs</h3>
              <p className="text-gray-600 mb-6 font-medium">Pairing veterans with unwanted dogs for companionship and purpose.</p>
              <span className="font-bold text-royal-blue group-hover:text-golden-yellow uppercase tracking-wide text-sm flex items-center gap-2">
                Learn More →
              </span>
            </Link>

            <Link href="/campaigns/victory-church-nigeria" className="group bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-golden-yellow hover:shadow-lg transition-all">
              <h3 className="font-serif text-2xl font-black text-royal-blue mb-3 uppercase">International Mission</h3>
              <p className="text-gray-600 mb-6 font-medium">Supporting Victory Church Nigeria with urgent relief and safety.</p>
              <span className="font-bold text-royal-blue group-hover:text-golden-yellow uppercase tracking-wide text-sm flex items-center gap-2">
                Learn More →
              </span>
            </Link>
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
