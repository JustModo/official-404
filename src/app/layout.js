import NavBar from "@/components/NavBar";
import "@styles/globals.css";

export const metadata = {
  title: "Club 404",
  description: "Offical Club 404 Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen container mx-auto">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
