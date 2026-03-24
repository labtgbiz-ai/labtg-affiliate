import { trpc } from "@/lib/trpc";
import "./i18n"; // Initialize i18n with browser language detection
import { UNAUTHED_ERR_MSG } from '@shared/const';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, TRPCClientError } from "@trpc/client";
import { createRoot } from "react-dom/client";
import superjson from "superjson";
import App from "./App";
import { getLoginUrl } from "./const";
import "./index.css";

const queryClient = new QueryClient();

const redirectToLoginIfUnauthorized = (error: unknown) => {
  if (!(error instanceof TRPCClientError)) return;
  if (typeof window === "undefined") return;

  const isUnauthorized = error.message === UNAUTHED_ERR_MSG;

  if (!isUnauthorized) return;

  window.location.href = getLoginUrl();
};

queryClient.getQueryCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.query.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Query Error]", error);
  }
});

queryClient.getMutationCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.mutation.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Mutation Error]", error);
  }
});

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "/api/trpc",
      transformer: superjson,
      fetch(input, init) {
        return globalThis.fetch(input, {
          ...(init ?? {}),
          credentials: "include",
        });
      },
    }),
  ],
});

function mountApp() {
  // Inject analytics script at runtime (avoids broken %VITE_*% tokens in HTML)
  const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
  if (analyticsEndpoint && analyticsWebsiteId && !analyticsEndpoint.includes('%VITE_')) {
    const analyticsScript = document.createElement('script');
    analyticsScript.defer = true;
    analyticsScript.src = `${analyticsEndpoint}/umami`;
    analyticsScript.setAttribute('data-website-id', analyticsWebsiteId);
    document.body.appendChild(analyticsScript);
  }

  const rootEl = document.getElementById("root");
  if (!rootEl) {
    console.error("[App] #root element not found, retrying...");
    setTimeout(mountApp, 50);
    return;
  }

  createRoot(rootEl).render(
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

// Wait for DOM to be fully ready before mounting
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}
