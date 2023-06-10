import Header from "@/Components/Header";
import "../Sass/index.scss";
import Footer from "@/Components/Footer";
import Sidebar from "@/Components/Sidebar";
export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Sidebar />
				<main className="MainSite">
					<Header />

					<section className="MainSection">{children}</section>

					<Footer />
				</main>
			</body>
		</html>
	);
}
