
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Star,
  X,
} from "lucide-react";

import DeletDEstenation from "@/components/destenation/DeletDEstenation";
import EditDastenationdailog from "@/components/destenation/EditDestinationDilog";

const highlights = [
  "Luxury beachfront accommodation",
  "Traditional Balinese spa treatment",
  "Sunrise trek to Mount Batur",
  "Visit Uluwatu Temple at sunset",
  "Private beach dinner experience",
];

interface Destination {
  _id?: string;
  destinationName: string;
  country: string;
  category: string;
  price: string | number;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
}

async function getDestination(id: string): Promise<Destination | null> {
  try {
    const res = await fetch(
      `http://localhost:8000/destination/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    const result = await res.json();
    const destination = result?.data ?? result;

    return destination && typeof destination === "object"
      ? destination
      : null;
  } catch {
    return null;
  }
}

function formatDeparture(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value ?? "");

  if (match) {
    return `${match[2]}/${match[3]}/${match[1]}`;
  }

  return value || "TBA";
}

const DestinationDetailPage = async (
  props: PageProps<"/destination/[id]">
) => {
  const { id } = await props.params;
  const destination = await getDestination(id);

  if (!destination) {
    notFound();
  }

  const {
    destinationName,
    country,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;

  return (
    <main className="min-h-screen bg-white px-4 py-8">
      <div className="mx-auto max-w-5xl border border-dotted border-sky-400 p-3 sm:p-4">

        {/* Toolbar */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <Link
            href="/destination"
            className="inline-flex items-center gap-1.5 text-[11px] text-gray-600 transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-3" aria-hidden="true" />
            Back to Destinations
          </Link>

          <div className="flex items-center gap-2">
            <EditDastenationdailog destination={destination} />

          <DeletDEstenation id={id}/>
          </div>
        </div>

        {/* Hero */}
        <div className="overflow-hidden rounded-sm bg-sky-50">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={destinationName}
              className="aspect-[16/9] w-full object-cover sm:aspect-[2.6/1]"
            />
          ) : (
            <div className="flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-sky-100 to-emerald-100 sm:aspect-[2.6/1]">
              <span className="text-6xl">🌴</span>
            </div>
          )}
        </div>

        <div className="my-4 border-t border-dotted border-sky-300" />

        {/* Body */}
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="flex items-center gap-1 text-xs text-gray-500">
              <MapPin className="size-3" aria-hidden="true" />
              {country}
            </p>

            <h1 className="mt-1 font-display text-3xl leading-tight tracking-tight text-gray-900 sm:text-4xl">
              {destinationName}
            </h1>

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
              <span className="flex items-center gap-1 font-semibold text-gray-800">
                <Star
                  className="size-3 fill-emerald-500 text-emerald-500"
                  aria-hidden="true"
                />
                4.9
              </span>
              <span>(234 reviews)</span>
              <span className="h-3 w-px bg-gray-200" aria-hidden="true" />
              <span className="flex items-center gap-1">
                <Clock3 className="size-3" aria-hidden="true" />
                {duration}
              </span>
            </div>

            <section className="mt-4 border-t border-dotted border-sky-300 pt-4">
              <h2 className="font-display text-xl text-gray-900">
                Overview
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {description ||
                  "Discover pristine beaches, ancient temples, and a vibrant local culture on this unforgettable escape."}
              </p>
            </section>

            <section className="mt-4 border-t border-dotted border-sky-300 pt-4">
              <h2 className="font-display text-xl text-gray-900">
                Highlights
              </h2>
              <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-1.5 text-xs leading-relaxed text-gray-600"
                  >
                    <Check
                      className="mt-0.5 size-3 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Booking sidebar */}
          <aside className="h-fit rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <p className="text-[11px] text-gray-400">
              Starting from
            </p>
            <p className="mt-1 text-3xl font-semibold leading-none text-brand">
              ${price}
            </p>
            <p className="mt-1 text-[11px] text-gray-400">
              per person
            </p>

            <div className="mt-3 flex h-9 items-center justify-between rounded-md bg-slate-50 px-2.5 text-xs text-gray-700">
              {formatDeparture(departureDate)}
              <CalendarDays
                className="size-3.5 text-gray-400"
                aria-hidden="true"
              />
            </div>

            <Link
              href="/bookings"
              className="mt-3 flex h-9 items-center justify-center gap-1.5 rounded-md bg-brand text-xs font-medium text-white transition-colors hover:bg-brand/85"
            >
              Book Now
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>

            <ul className="mt-4 space-y-2 border-t border-dotted border-gray-300 pt-3">
              {[
                "Free cancellation up to 7 days",
                "Travel insurance included",
                "24/7 customer support",
              ].map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-1.5 text-[11px] text-gray-500"
                >
                  <Check
                    className="size-3 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  {perk}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default DestinationDetailPage;
