"use client";
import type { Metadata } from "next";
import "@/public/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const metadata: Metadata = {
	title: "Digital Signage",
	description: "Digital Signage Web Application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const paths = ["/login", "/view", "/slideshow"];
	const pathname = usePathname();
	console.log(pathname);
	const useComponent = !paths.some((suffix) => pathname.endsWith(suffix));

	return (
		<html lang="en">
			<body>
				{useComponent && <Navbar />}
				  {children}
				{useComponent && <Footer />}
			</body>
		</html>
	);
}
