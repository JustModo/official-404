import { NextResponse } from "next/server";
import { loginRequest } from "@utils/apis";

export async function POST(req) {
  const formData = await req.formData();
  // console.log(formData);

  const authResponse = await loginRequest(formData);

  if (!authResponse.success) {
    return NextResponse.json({ message: authResponse.data }, { status: 401 });
  }

  const authCookie = authResponse.headers.get("set-cookie");

  if (!authCookie) {
    return NextResponse.json(
      { message: "Authentication failed" },
      { status: 500 }
    );
  }

  const response = NextResponse.json({ message: "Logged in" });

  response.headers.set("Set-Cookie", authCookie);

  return response;
}
