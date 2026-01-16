import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 pb-16 px-4 container mx-auto animate-fade-in-up">
                <h1 className="font-serif text-3xl font-bold text-royal-blue mb-8">Privacy Policy</h1>
                <div className="prose prose-sm text-gray-600 space-y-4">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        Atlantic Ministries Trust ("we", "us", or "our") operates the website atlanticministries.org (the "Service").
                        This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
                    </p>
                    <h3>1. Information Collection</h3>
                    <p>
                        We collect several different types of information for various purposes to provide and improve our Service to you,
                        including Personal Data provided when you donate or contact us (Name, Email, etc.).
                    </p>
                    <h3>2. Use of Data</h3>
                    <p>
                        We use the collected data to provide and maintain the Service, notify you about changes, allow you to participate
                        in interactive features, provide customer care, and monitor the usage of the Service.
                    </p>
                    <h3>3. Security</h3>
                    <p>
                        The security of your data is important to us, but remember that no method of transmission over the Internet,
                        or method of electronic storage is 100% secure.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
