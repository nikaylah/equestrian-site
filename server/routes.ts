import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({
        success: true,
        message: "Thank you for reaching out. We'll get back to you within 24 hours.",
        id: submission.id,
      });
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An error occurred while submitting your message.",
        });
      }
    }
  });

  return httpServer;
}
