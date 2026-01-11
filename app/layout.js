import { Josefin_Sans } from "next/font/google";
import "@/styles/global.css";
import Header from "@/app/_components/Header";

const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: {
        template: "%s / The Wild Oasis",
        default: "Welcome / The Wild Oasis",
    },
    description: "Luxirious cabin hotel, located in the heart of the Italian Dolomites, surrounded by nature and the mountains and dark forests.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${josefinSans.className} antialiased relative bg-primary-950 text-primary-100  min-h-screen flex flex-col`}>
                <Header />
                <div className="flex-1 grid">
                    <main className="max-w-7xl w-full mx-auto px-8 py-12">{children}</main>
                </div>
            </body>
        </html>
    );
}