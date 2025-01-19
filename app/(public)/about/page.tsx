import type { Metadata } from "next";

export default function AboutPage() {
    return (
        <>
        <span className="text-7xl">About Page</span>
        </>
    );
} 


export const metadata: Metadata = {
 title: "Yensi's about",
 description: "Yensi's about",
 keywords: ['about page', 'yensi']
};