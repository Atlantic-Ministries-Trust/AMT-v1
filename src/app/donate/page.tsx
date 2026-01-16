import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

const donationOptions = [
    {
        title: "Simple",
        description: "A one-time gift to support general operations."
    },
    {
        title: "Formal",
        description: "Recurring monthly support to sustain our long-term mission."
    },
    {
        title: "Eternal Value",
        description: "Sponsor specific discipleship materials and bibles."
    },
    {
        title: "Memo Line",
        description: "Direct your gift to a specific cause: Outreach, Building, or Patriotism."
    },
];

export const metadata: Metadata = {
    title: "Donate | Atlantic Ministries Trust",
    description: "Support the mission of Atlantic Ministries Trust. Your giving helps us advance the Kingdom and preserve our heritage.",
};

export default function Donate() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 pb-16 px-4 container mx-auto animate-fade-in-up">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue mb-4">Make a Donation</h1>
                    <div className="h-1 w-24 bg-golden-yellow mx-auto rounded-full" />
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Partner with us to advance the Kingdom and preserve our heritage.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
                    {donationOptions.map((opt, index) => (
                        <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1 text-center flex flex-col">
                            <h3 className="font-serif text-xl font-bold text-royal-blue mb-4">{opt.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{opt.description}</p>
                            <Button className="w-full">
                                Donate {opt.title === "Simple" ? "Once" : "Now"}
                            </Button>
                        </div>
                    ))}
                </div>

                {/* PayPal / Payment Area */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-3xl mx-auto text-center mb-16">
                    <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Secure Online Giving</h3>
                    <p className="text-gray-600 mb-8">
                        All transactions are processed securely via PayPal. You can use a Credit Card, Debit Card, or PayPal account.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button size="lg" className="px-12 py-6 text-lg shadow-lg" asChild>
                            <a href="https://www.paypal.com/donate" target="_blank" rel="noopener noreferrer">Proceed to PayPal</a>
                        </Button>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">
                        *You will be redirected to PayPal's secure portal.
                    </p>
                </div>

                {/* Legal Disclaimer */}
                <div className="max-w-4xl mx-auto text-center text-sm text-gray-500 border-t pt-8">
                    <p className="mb-2 font-bold">Legal Compliance</p>
                    <p>
                        Atlantic Ministries Trust is a registered 501(c)(3) non-profit organization.
                        No goods or services were provided in exchange for this contribution.
                        Your donation is tax-deductible to the full extent allowed by law.
                        Please retain your email receipt for tax purposes.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
