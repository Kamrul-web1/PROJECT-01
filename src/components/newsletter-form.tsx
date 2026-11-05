"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubscribed(true);
      }}
      className="mt-4"
    >
      <div className="flex items-center bg-white/10 transition-colors focus-within:bg-white/15">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Enter email"
          autoComplete="email"
          onChange={() => setSubscribed(false)}
          className="h-11 min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/45"
        />
        <button
          type="submit"
          aria-label="Subscribe to the newsletter"
          className="grid size-11 shrink-0 cursor-pointer place-items-center text-white/70 transition-colors hover:text-white"
        >
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      <p aria-live="polite" className="mt-2 min-h-4 text-xs text-brand">
        {subscribed ? "Thanks — you're on the list." : ""}
      </p>
    </form>
  );
}
