"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Construct mailto link
        const subject = encodeURIComponent(`Contact from ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open mail client
        window.location.href = `mailto:info@atlanticministries.org?subject=${subject}&body=${body}`;

        // Show success state locally
        setTimeout(() => {
            setStatus("success");
        }, 1000);
    };

    if (status === "success") {
        return (
            <div className="bg-white p-8 rounded-xl border-2 border-golden-yellow/20 text-center animate-fade-in-up">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="font-serif text-2xl font-black text-royal-blue mb-2">Message Prepared!</h3>
                <p className="text-gray-600 mb-6 font-medium">
                    Your default email app should have opened. Please click "Send" in your email client to complete the process.
                </p>
                <Button onClick={() => setStatus("idle")} variant="outline" className="w-full">
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-royal-blue uppercase tracking-tight">First Name</label>
                    <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all shadow-sm"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-royal-blue uppercase tracking-tight">Last Name</label>
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all shadow-sm"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-royal-blue uppercase tracking-tight">Email Address</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all shadow-sm"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-royal-blue uppercase tracking-tight">Message</label>
                <textarea
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all shadow-sm resize-none"
                ></textarea>
            </div>
            <Button className="w-full py-6 text-lg" type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Opening Email App..." : "Send Message"}
            </Button>
            <p className="text-center text-xs text-gray-400 font-medium italic">
                Note: This will open your default email application.
            </p>
        </form>
    );
}
