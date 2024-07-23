import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const regResponse = await registerRequest(formData);

    if (!regResponse.ok) {
      const errorData = await regResponse.text();
      console.error(errorData);
      return NextResponse.json(
        { message: errorData },
        { status: regResponse.status }
      );
    }
    
    const response = await loginRequest(formData);
    console.log(response);

    if (!response.ok) {
      const errorData = await response.text();
      console.error(errorData);
      return NextResponse.json(
        { message: errorData },
        { status: response.status }
      );
    }

    const authCookie = response.headers.get("set-cookie");

    if (!authCookie) {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Register and Login successful" },
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

const registerRequest = async (formData) => {
  try {
    const response = await fetch("https://club.modo-dev.com/register", {
      method: "POST",
      body: formData,
    });
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const loginRequest = async (formData) => {
  try {
    const response = await fetch("https://club.modo-dev.com/login", {
      method: "POST",
      body: formData,
    });
    return response;
  } catch (err) {
    console.error(err);
  }
};
