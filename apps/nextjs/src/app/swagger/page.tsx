"use client"
import React from "react"
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

// Application Component || Define Exports
// =================================================================================================
// =================================================================================================
export default function PageSwagger() {
  return <SwaggerUI url="/api/openapi" />
}
