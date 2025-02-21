import { beforeEach, afterEach, vi } from "vitest";

beforeEach(() => {
  document.body.innerHTML = "";
});

afterEach(() => {
  vi.clearAllMocks();
});
