import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section id="book" className="relative isolate overflow-hidden">
      <Image
        src="/images/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
        <h2 className="font-display text-4xl font-normal tracking-[-0.01em] text-white sm:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm text-white/80">
          Join thousands of travelers who have discovered the world with us
        </p>

        <Link
          href="/bookings"
          className="group mt-8 inline-flex h-12 items-center gap-4 bg-white px-7 text-[11px] font-semibold tracking-[0.18em] text-foreground uppercase transition-colors hover:bg-white/90"
        >
          Book Your Trip Today
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
