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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct mailto link
        const subject = encodeURIComponent(`Message from ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open mail client immediately
        window.location.href = `mailto:info@atlanticministries.org?subject=${subject}&body=${body}`;
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                    <label className="text-xs font-black text-royal-blue uppercase tracking-widest ml-1">First Name</label>
                    <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue/40 focus:bg-white outline-none transition-all"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-black text-royal-blue uppercase tracking-widest ml-1">Last Name</label>
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue/40 focus:bg-white outline-none transition-all"
                    />
                </div>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-black text-royal-blue uppercase tracking-widest ml-1">Email Address</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue/40 focus:bg-white outline-none transition-all"
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-black text-royal-blue uppercase tracking-widest ml-1">Message</label>
                <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue/40 focus:bg-white outline-none transition-all resize-none"
                ></textarea>
            </div>
            <Button className="w-full py-6 text-lg" type="submit">
                Open Email Application
            </Button>
            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                Clicking will open your default email app to send the message.
            </p>
        </form>
    );
}
