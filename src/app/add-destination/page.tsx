
"use client";

import { useState, type FormEvent } from "react";
import { Save, Trash2 } from "lucide-react";

interface TravelPackage {
  destinationName: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
}

const initialForm: TravelPackage = {
  destinationName: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

export default function AddTravelPackagePage() {
  const [formData, setFormData] = useState<TravelPackage>(initialForm);
  const [addedPackage, setAddedPackage] =
    useState<TravelPackage | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const res = await fetch('http://localhost:8000/add-destination', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  console.log(data);

  console.log("New Travel Package:", formData);

  setAddedPackage({ ...formData });
};

  const handleCancel = () => {
    setFormData(initialForm);
    setAddedPackage(null);
  };

  return (
    <main className="min-h-screen border-t-2 border-sky-500 bg-white px-4 py-9">
      <div className="mx-auto max-w-[570px] border border-dotted border-sky-400 p-4 sm:p-5">

        <h1 className="mb-8 font-serif text-2xl tracking-tight text-gray-800">
          Add New Travel Package
        </h1>

        <div className="mx-auto max-w-[357px] rounded-sm border border-gray-200 bg-white p-4 shadow-sm sm:p-5">

        <form
  onSubmit={handleSubmit}
  noValidate
  className="space-y-3"
>

            {/* Destination Name */}
            <div>
              <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                Destination Name
              </label>
              <input
                type="text"
                name="destinationName"
                value={formData.destinationName}
                onChange={handleChange}
                placeholder="Bali Paradise"
                required
                className="h-[36px] w-full bg-slate-50 px-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
              />
            </div>

            {/* Country & Category */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Indonesia"
                  required
                  className="h-[36px] w-full bg-slate-50 px-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="h-[36px] w-full bg-slate-50 px-2 text-xs text-gray-600 outline-none focus:ring-1 focus:ring-sky-400"
                >
                  <option value="">Select</option>
                  <option value="Beach">Beach</option>
                  <option value="Mountain">Mountain</option>
                  <option value="Adventure">Adventure</option>
                  <option value="City Tour">City Tour</option>
                  <option value="Cultural">Cultural</option>
                </select>
              </div>
            </div>

            {/* Price & Duration */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                  Price (USD)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="e.g., 1299"
                  min="1"
                  required
                  className="h-[36px] w-full bg-slate-50 px-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g., 7 Days/6 Nights"
                  required
                  className="h-[36px] w-full bg-slate-50 px-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div>
              <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                Departure Date
              </label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                required
                className="h-[36px] w-full bg-slate-50 px-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                Image URL
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
                className="h-[36px] w-full bg-slate-50 px-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the travel experience..."
                required
                rows={4}
                className="w-full resize-none bg-slate-50 p-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={handleCancel}
                className="flex h-[36px] items-center gap-1 border border-red-300 px-3 text-[11px] text-red-500 transition hover:bg-red-50"
              >
                <Trash2 size={12} />
                Cancel
              </button>

              <button
                type="submit"
                className="flex h-[36px] items-center gap-1 bg-cyan-600 px-3 text-[11px] text-white transition hover:bg-cyan-700"
              >
                <Save size={12} />
                Add Travel Package
              </button>
            </div>

          </form>
          
        </div>

      

      </div>
    </main>
  );
}
