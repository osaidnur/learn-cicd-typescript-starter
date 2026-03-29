import { describe, expect, it } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  it("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  it("returns null when auth scheme is not ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer token-123" })).toBeNull();
  });

  it("returns null when auth header does not contain a key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  it("returns the API key when header uses ApiKey scheme", () => {
    expect(getAPIKey({ authorization: "ApiKey token-123" })).toBe(
      "token-123",
    );
  });
});