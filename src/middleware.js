// middleware.js
import { NextResponse } from "next/server";

export async function middleware(req) {
  const isLoggedIn = await checkAuth(req.headers);

  if (req.nextUrl.pathname === "/Profile" && !isLoggedIn) {
    return NextResponse.redirect(new URL("/Auth/Login", req.url));
  }

  if (req.nextUrl.pathname === "/Bounty/CreateBounty" && !isLoggedIn) {
    return NextResponse.redirect(new URL("/Auth/Login", req.url));
  }

  const bountyAddSolutionPattern = /^\/Bounty\/[^/]+\/AddSolution$/;
  if (bountyAddSolutionPattern.test(req.nextUrl.pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/Auth/Login", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/Auth") && isLoggedIn) {
    return NextResponse.redirect(new URL("/Profile", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/Profile",
    "/Auth/:path*",
    "/Bounty/CreateBounty",
    "/Bounty/:path*/AddSolution",
  ],
};

async function checkAuth(headers) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/validate-login`, {
      method: "POST",
      headers: {
        Cookie: headers.get("cookie") || "",
      },
    });

    if (response.ok) {
      return true;
    }
    const error = await response.text();
    // console.error(error);
    console.error("Denied");
    return false;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
}
