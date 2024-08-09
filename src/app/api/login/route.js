import { log } from "console";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const response = await loginRequest(formData);

    if (!response.ok) {
      const errorData = await response.text();
      console.error(errorData);
      return NextResponse.json(
        { message: errorData },
        { status: response.status }
      );
    }

    const authCookie = response.headers.get("set-cookie");
    // console.log(authCookie);

    if (!authCookie) {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 500 }
      );
    }

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

const loginRequest = async (formData) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/login`, {
      method: "POST",
      body: formData,
    });
    return response;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
