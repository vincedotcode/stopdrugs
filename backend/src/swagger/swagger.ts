import swaggerJSDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.3",
    info: { title: "StopDrugs API", version: "1.0.0" },
    servers: [{ url: "/api" }],
    components: {
      securitySchemes: {
        cookieAuth: { type: "apiKey", in: "cookie", name: "sd_admin" },
        csrf: { type: "apiKey", in: "header", name: "x-csrf-token" }
      }
    }
  },
  apis: ["./src/modules/**/*.routes.ts", "./src/modules/**/*.controller.ts"]
};

export const swaggerSpec = swaggerJSDoc(options);
export { swaggerUi };
