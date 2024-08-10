import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const response = await handleLogout(req.headers);

    if (!response.ok) {
      const errorData = await response.text();
      console.error(errorData);
      return NextResponse.json(
        { message: errorData },
        { status: response.status }
      );
    }

    const authCookie = response.headers.get("set-cookie");

    return NextResponse.json(
      { message: "Login successful" },
      {
        status: 200,
        headers: {
          "set-cookie": authCookie,
        },
      }
    );
  } catch (err) {
    console.error("An error occurred:", err);
    return NextResponse.json({ message: "Whoops" }, { status: 500 });
  }
}

const handleLogout = async (headers) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/logout`, {
      method: "POST",
      headers: {
        Cookie: headers.get("cookie"),
        credentials: "include",
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
