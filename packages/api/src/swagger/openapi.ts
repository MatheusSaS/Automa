import { generateOpenApiDocument } from "trpc-swagger"

import { appRouter } from "../root"

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "CRUD API",
  description: "OpenAPI REST API para o teste da Automa Trade",
  version: "1.0.0",
  baseUrl: "http://localhost:4000/api",
  docsUrl: "https://github.com/vercjames/package-trpc-swagger",
})
