import NavBar from "@/components/NavBar";
import "@styles/globals.css";

export const metadata = {
  title: "Club 404",
  description: "Offical Club 404 Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col w-screen h-screen relative overflow-hidden">
          <NavBar />
          <div
            id="mainwindow"
            className="relative w-full h-full overflow-y-auto"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
