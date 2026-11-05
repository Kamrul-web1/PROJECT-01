
import { IDestenation } from "@/components/type/destination";
import Link from "next/link";

const DestenationPage = async () => {
  const res = await fetch("http://localhost:8000/destination", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch destinations");
  }

  const result = await res.json();

  const destinations = Array.isArray(result)
    ? result
    : Array.isArray(result.data)
      ? result.data
      : result.data
        ? [result.data]
        : [];

  return (
    <main className="min-h-screen bg-white px-5 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Explore All Destinations
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filter Design */}
        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded border border-gray-200 px-4 py-3 text-sm text-gray-500">
            CATEGORY
          </div>
          <div className="rounded border border-gray-200 px-4 py-3 text-sm text-gray-500">
            PRICE RANGE
          </div>
          <div className="rounded border border-gray-200 px-4 py-3 text-sm text-gray-500">
            SORT BY
          </div>
        </div>

        <p className="mb-5 text-xs text-gray-500">
          Showing {destinations.length} destinations
        </p>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {destinations.map((destination: IDestenation) => (
            <div
              key={destination._id}
              className="group overflow-hidden border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-sky-100 to-emerald-100">

                {destination.imageUrl ? (
                  <img
                    src={destination.imageUrl}
                    alt={destination.destinationName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-5xl">🌴</span>
                  </div>
                )}

                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow">
                  {destination.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-4">

                <p className="mb-2 text-xs font-medium text-gray-400">
                  📍 {destination.country}
                </p>

                <h2 className="text-lg font-semibold text-gray-900">
                  {destination.destinationName}
                </h2>

                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">

                  <p className="text-sm text-gray-500">
                    🗓 {destination.duration}
                  </p>

                  <Link
                    href={`/destination/${destination._id}`}
                    className="text-sm font-semibold text-sky-600 transition-colors hover:text-sky-800"
                  >
                    BOOK NOW ↗
                  </Link>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Empty State */}
        {destinations.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-gray-700">
              No destinations found!
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Please add some destinations first.
            </p>
          </div>
        )}

      </div>
    </main>
  );
};

export default DestenationPage;
