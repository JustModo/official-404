import React from "react";

import "@styles/globals.css";

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-background text-text z-20">
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
            <Link href="/" className="text-text">
              Profile
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
                  <Link href="/" className="text-text">
                    Profile
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
