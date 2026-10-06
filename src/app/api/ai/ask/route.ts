import { NextResponse } from "next/server";
import { askSanskritiAI } from "@/lib/ai/sanskriti-engine";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { query, categoryFilter, stateSlugFilter } = body;

    if (!query || typeof query !== "string" || query.trim().length === 0) {
      return NextResponse.json(
        { error: "A valid query is required for Sanskriti AI." },
        { status: 400 }
      );
    }

    const response = await askSanskritiAI({
      query: query.trim(),
      categoryFilter,
      stateSlugFilter,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error in /api/ai/ask:", error);
    return NextResponse.json(
      { error: "Failed to process Sanskriti AI inquiry." },
      { status: 500 }
    );
  }
}
