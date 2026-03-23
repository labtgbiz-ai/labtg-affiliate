import { describe, expect, it } from "vitest";
import { isValidTelegramUsername } from "./telegram";

describe("Telegram Integration", () => {
  describe("isValidTelegramUsername", () => {
    it("should accept valid Telegram usernames", () => {
      expect(isValidTelegramUsername("labtg_manager")).toBe(true);
      expect(isValidTelegramUsername("@labtg_manager")).toBe(true);
      expect(isValidTelegramUsername("user123")).toBe(true);
      expect(isValidTelegramUsername("test_user_123")).toBe(true);
    });

    it("should reject invalid Telegram usernames", () => {
      expect(isValidTelegramUsername("ab")).toBe(false); // Too short
      expect(isValidTelegramUsername("a".repeat(33))).toBe(false); // Too long
      expect(isValidTelegramUsername("user-name")).toBe(false); // Invalid character
      expect(isValidTelegramUsername("user name")).toBe(false); // Space
      expect(isValidTelegramUsername("user@name")).toBe(false); // Invalid character
    });

    it("should handle edge cases", () => {
      expect(isValidTelegramUsername("a".repeat(5))).toBe(true); // Minimum valid length
      expect(isValidTelegramUsername("a".repeat(32))).toBe(true); // Maximum valid length
      expect(isValidTelegramUsername("_username_")).toBe(true); // Underscores allowed
    });
  });
});
