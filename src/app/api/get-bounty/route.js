import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const response = await getBountyRequest(formData, req.headers);

    if (!response.ok) {
      const errorData = await response.text();
      console.log(errorData);
      return NextResponse.json(
        { message: errorData },
        { status: response.status }
      );
    }

    const bountyData = await response.json();

    return NextResponse.json(
      { message: bountyData },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error("An error occurred:", err);
    return NextResponse.json({ message: "Whoops" }, { status: 500 });
  }
}

export const getBountyRequest = async (formData, headers) => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/bounty-get-random`,
      {
        method: "POST",
        body: formData,
        headers: {
          Cookie: headers.get("cookie"),
          credentials: "include",
        },
      }
    );
    return response;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
