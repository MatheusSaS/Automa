import { NextResponse } from "next/server"
import { openApiDocument } from "@automa/api"

// // Application Component || Define Exports
// // =================================================================================================
// // =================================================================================================
export async function GET() {
  return NextResponse.json(openApiDocument)
}
