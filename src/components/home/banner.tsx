import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const searchFields = [
  {
    id: "location",
    label: "Location",
    placeholder: "Address, City Or Zip",
  },
  {
    id: "date",
    label: "Date/Duration",
    placeholder: "Anytime/3 Days",
  },
  {
    id: "budget",
    label: "Budget",
    placeholder: "$0-$3000",
  },
  {
    id: "people",
    label: "People",
    placeholder: "5-10",
  },
];

export function Banner() {
  return (
    <section className="relative flex min-h-[calc(100svh-72px)] flex-col overflow-hidden">
      <Image
        src="/images/Banner.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55" />

      <div className="relative flex flex-1 flex-col">
        <div className="flex w-full flex-1 flex-col items-center justify-center px-6 pt-14 pb-10 text-center">
          <h1 className="font-display w-full max-w-4xl text-[clamp(2.75rem,7.2vw,6.25rem)] leading-[1.02] font-normal tracking-[-0.02em] text-white">
            Discover Your
            <br />
            Next Adventure
          </h1>

          <p className="mt-6 w-full max-w-[37rem] text-pretty text-sm leading-6 text-white/85 sm:text-base">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>

          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3">
            <Link
              href="#destinations"
              className="group inline-flex h-11 items-center gap-4 bg-brand px-7 text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-brand/90"
            >
              Explore Now
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="#destinations"
              className="inline-flex h-11 items-center border border-white/20 bg-white/10 px-7 text-[11px] font-semibold tracking-[0.18em] text-white/90 uppercase backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              View Destination
            </Link>
          </div>
        </div>

        <div className="w-full px-4 pb-4 sm:px-6 sm:pb-6">
          <div
            role="search"
            aria-label="Search destinations"
            className="grid w-full overflow-hidden border border-white/10 bg-black/35 backdrop-blur-md lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]"
          >
            {searchFields.map((field, index) => (
              <div
                key={field.id}
                className={
                  index > 0
                    ? "flex min-h-20 min-w-0 flex-col justify-center gap-2 border-t border-white/10 px-5 py-4 lg:min-h-24 lg:border-t-0 lg:border-l"
                    : "flex min-h-20 min-w-0 flex-col justify-center gap-2 px-5 py-4 lg:min-h-24"
                }
              >
                <label
                  htmlFor={field.id}
                  className="text-xs font-medium text-white/55"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type="text"
                  placeholder={field.placeholder}
                  autoComplete="off"
                  className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/90"
                />
              </div>
            ))}

            <button
              type="button"
              className="h-14 bg-brand text-sm font-semibold text-white transition-colors hover:bg-brand/90 lg:h-auto lg:min-h-24 lg:w-56 lg:border-l lg:border-white/10"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
