import { NextResponse } from "next/server";

export async function GET({ params }) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/profile-picture/${params.id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  } catch (err) {
    console.error("An error occurred:", err);
    return NextResponse.json({ message: "Whoops" }, { status: 500 });
  }
}
