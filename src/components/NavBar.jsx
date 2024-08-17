import React from "react";
import "@styles/globals.css";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function NavBar() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session");
  const isAuthenticated = await checkAuth(sessionCookie);

  return (
    <div className="navbar bg-neutral text-text z-20">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Club404</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hidden md:inline-block">
            <Link href="/" className="text-text">
              Home
            </Link>
          </li>
          <li className="hidden md:inline-block">
            <Link href="/Bounty" className="text-text">
              Bounty
            </Link>
          </li>
          <li className="hidden md:inline-block">
            <Link href="/" className="text-text">
              Timeline
            </Link>
          </li>
          <li className="hidden md:inline-block">
            <Link href="/Auth/Login" className="text-text">
              {isAuthenticated ? "Profile" : "Login"}
            </Link>
          </li>
          <li className="md:hidden dropdown">
            <details>
              <summary className="text-text">Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none text-text">
                <li>
                  <Link href="/" className="text-text">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/Bounty" className="text-text">
                    Bounty
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-text">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link href="/Auth/Login" className="text-text">
                    Profilee
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

async function checkAuth(cookie) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/validate-login`, {
      method: "POST",
      headers: {
        Cookie: `${cookie?.name}=${cookie?.value}`,
      },
    });

    if (response.ok) {
      return true;
    }
    const error = await response.text();
    console.error(error);
    return false;
  } catch (error) {
    // console.error("Error checking authentication");
    return false;
  }
}
