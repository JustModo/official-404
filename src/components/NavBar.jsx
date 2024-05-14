import React from "react";

import "@styles/globals.css";

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-background fixed text-text">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hidden md:inline-block">
            <Link href="/" className="text-text">
              Home
            </Link>
          </li>

          <li className="hidden md:inline-block">
            <Link href="/Dashboard" className="text-text">
              Dashboard
            </Link>
          </li>

          <li className="md:hidden dropdown">
            <details>
              <summary className="text-text">Parent</summary>

              <ul className="p-2 bg-base-100 rounded-t-none text-text">
                <li>
                  <Link href="/Dashboard" className="text-text">
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link href="/" className="text-text">
                    Home
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
