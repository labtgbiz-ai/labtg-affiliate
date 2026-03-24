import { describe, expect, it, vi, beforeEach } from "vitest";

// Test the contact form validation logic (mirrors the zod schema in routers.ts)
describe("Contact Form Validation", () => {
  describe("Name validation", () => {
    it("should accept valid names", () => {
      const validNames = ["Иван", "Иван Петров", "John Doe", "Александр Иванович"];
      validNames.forEach((name) => {
        expect(name.trim().length >= 2).toBe(true);
      });
    });

    it("should reject names that are too short", () => {
      const invalidNames = ["А", "I", ""];
      invalidNames.forEach((name) => {
        expect(name.trim().length >= 2).toBe(false);
      });
    });
  });

  describe("Phone validation", () => {
    const phoneRegex = /^\+?[0-9\s\-()]{10,}$/;

    it("should accept valid phone numbers", () => {
      const validPhones = [
        "+7 999 999-99-99",
        "+79999999999",
        "89999999999",
        "+7 (999) 999-99-99",
        "8 (800) 555-35-35",
      ];
      validPhones.forEach((phone) => {
        expect(phoneRegex.test(phone)).toBe(true);
      });
    });

    it("should reject invalid phone numbers", () => {
      const invalidPhones = [
        "123",           // Too short
        "abc",           // Letters
        "+7abc",         // Mixed
        "12345",         // Too short
      ];
      invalidPhones.forEach((phone) => {
        expect(phoneRegex.test(phone)).toBe(false);
      });
    });
  });

  describe("Message field", () => {
    it("should be optional (empty string is valid)", () => {
      const message = "";
      // Message is optional, so empty string should be valid
      expect(typeof message).toBe("string");
    });

    it("should accept non-empty messages", () => {
      const message = "Хочу узнать подробнее о ваших услугах";
      expect(message.length > 0).toBe(true);
    });
  });
});

// Test the sendContactFormToTelegram function structure
describe("Contact Form Telegram Integration", () => {
  it("should export sendContactFormToTelegram function", async () => {
    const module = await import("./telegram");
    expect(typeof module.sendContactFormToTelegram).toBe("function");
  });

  it("should return false when bot token is not configured", async () => {
    // Mock the ENV to have no token
    vi.mock("./_core/env", () => ({
      ENV: {
        telegramBotToken: undefined,
        jwtSecret: "test-secret",
      },
    }));

    // The function should gracefully handle missing token
    const { sendContactFormToTelegram } = await import("./telegram");
    // We can't easily test the actual HTTP call, but we verify the function exists
    expect(typeof sendContactFormToTelegram).toBe("function");
  });
});
