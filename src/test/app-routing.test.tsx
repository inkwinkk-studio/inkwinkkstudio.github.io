import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches a page for /visual-art", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/visual-art");

    expect(matches.at(-1)?.routeId).toBe("/visual-art");
  });

  it("matches a page for /wordsmith-studio", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/wordsmith-studio");

    expect(matches.at(-1)?.routeId).toBe("/wordsmith-studio");
  });

  it("matches a page for /testimonials", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/testimonials");

    expect(matches.at(-1)?.routeId).toBe("/testimonials");
  });

  it("matches a page for /pricing", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/pricing");

    expect(matches.at(-1)?.routeId).toBe("/pricing");
  });
});
