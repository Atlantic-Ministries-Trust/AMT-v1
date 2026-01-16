import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CampaignCardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
    color?: string;
    featured?: boolean;
}

export function CampaignCard({ title, description, href, icon, color = "bg-royal-blue", featured = false }: CampaignCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full",
                featured
                    ? "bg-royal-blue border-royal-blue text-white shadow-lg"
                    : "bg-white border-gray-100 hover:border-golden-yellow/50"
            )}
        >
            <div className="p-8 flex flex-col h-full">
                {icon && (
                    <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                        featured ? "bg-white/10 text-golden-yellow" : "bg-gray-50 text-royal-blue"
                    )}>
                        {icon}
                    </div>
                )}

                <h3 className={cn(
                    "font-serif text-2xl font-black mb-4 uppercase tracking-tight",
                    featured ? "text-white" : "text-gray-900 group-hover:text-royal-blue transition-colors"
                )}>
                    {title}
                </h3>

                <p className={cn(
                    "mb-8 font-medium leading-relaxed flex-grow",
                    featured ? "text-blue-100" : "text-gray-600"
                )}>
                    {description}
                </p>

                <div className={cn(
                    "flex items-center gap-2 font-bold text-sm tracking-wide uppercase",
                    featured ? "text-golden-yellow" : "text-royal-blue group-hover:text-golden-yellow transition-colors"
                )}>
                    Support Campaign <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
