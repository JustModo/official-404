// src/app/layout.js
import NavBar from "@/components/NavBar";
import CanvasEffect from "@/components/CanvasEffect.jsx";
import "@styles/globals.css";

export const metadata = {
  title: "Club 404",
  description: "Official Club 404 Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="club404">
      <body>
        <div className="flex flex-col w-screen h-screen relative overflow-hidden">
          <NavBar />
          <CanvasEffect />
          <div
            id="mainwindow"
            className="relative w-full h-full overflow-y-auto overflow-x-hidden"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
