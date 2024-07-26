import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const response = await handleRequest(req.headers);

    if (!response.ok) {
      const errorData = await response.text();
      console.error(errorData);
      return NextResponse.json(
        { message: errorData },
        { status: response.status }
      );
    }
    const bountyCookie = response.headers.get("set-cookie");
    console.log(bountyCookie);

    return NextResponse.json(
      { message: "Got Session" },
      {
        status: 200,
        headers: {
          "set-cookie": bountyCookie,
        },
      }
    );
  } catch (err) {
    console.error("An error occurred:", err);
    return NextResponse.json({ message: "Whoops" }, { status: 500 });
  }
}

export const handleRequest = async (headers) => {
  try {
    const response = await fetch(
      "https://club.modo-dev.com/create-session-for-bounty-get-random",
      {
        method: "POST",
        credentials: "include",
        headers: {
          Cookie: headers.get("cookie"),
        },
      }
    );
    return response;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
