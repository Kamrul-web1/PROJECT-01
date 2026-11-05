
'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Pencil, Save } from "lucide-react"
import {
  useEffect,
  useState,
  type FormEvent,
  type ChangeEvent,
} from "react"

interface TravelPackage {
  _id?: string;
  destinationName: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
}

interface EditProps {
  destination: TravelPackage;
}

const EditDastenationdailog = ({ destination }: EditProps) => {
    console.log(destination);
    

  const [formData, setFormData] = useState<TravelPackage>(destination)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) {
      setFormData(destination)
    }
  }, [destination, open])

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!destination._id) {
      alert("Destination ID not found")
      return
    }

    try {
      setLoading(true)

      const res = await fetch(
        `http://localhost:8000/destination/${destination._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destinationName: formData.destinationName,
            country: formData.country,
            category: formData.category,
            price: formData.price,
            duration: formData.duration,
            departureDate: formData.departureDate,
            imageUrl: formData.imageUrl,
            description: formData.description,
          }),
        }
      )

      const data: { message?: string } = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Update failed")
      }

      alert("Destination updated successfully!")

      setOpen(false)
      window.location.reload()

    } catch (error: unknown) {
      console.error("Update Error:", error)

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      )

    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

     <DialogTrigger
  render={
    <Button
      variant="outline"
      className="border-black bg-transparent text-black hover:bg-gray-100 hover:text-black"
    />
  }
>
  <Pencil className="h-4 w-4" />
  Edit
</DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[570px]">

        <DialogHeader>
          <DialogTitle>
            Edit Travel Package
          </DialogTitle>

          <DialogDescription>
            Update your destination information below.
          </DialogDescription>
        </DialogHeader>

        <main className="border-t-2 border-sky-500 bg-white px-4 py-5">

          <div className="mx-auto max-w-[357px] rounded-sm border border-gray-200 bg-white p-4 shadow-sm sm:p-5">

            <form
              onSubmit={handleSubmit}
              className="space-y-3"
            >

              <div>
                <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                  Destination Name
                </label>

                <input
                  type="text"
                  name="destinationName"
                  value={formData.destinationName || ""}
                  onChange={handleChange}
                  required
                  className="h-[36px] w-full bg-slate-50 px-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">

                <div>
                  <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                    Country
                  </label>

                  <input
                    type="text"
                    name="country"
                    value={formData.country || ""}
                    onChange={handleChange}
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
                    value={formData.category || ""}
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

              <div className="grid grid-cols-2 gap-2">

                <div>
                  <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                    Price (USD)
                  </label>

                  <input
                    type="number"
                    name="price"
                    value={formData.price || ""}
                    onChange={handleChange}
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
                    value={formData.duration || ""}
                    onChange={handleChange}
                    required
                    className="h-[36px] w-full bg-slate-50 px-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

              </div>

              <div>
                <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                  Departure Date
                </label>

                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate || ""}
                  onChange={handleChange}
                  required
                  className="h-[36px] w-full bg-slate-50 px-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                  Image URL
                </label>

                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl || ""}
                  onChange={handleChange}
                  required
                  className="h-[36px] w-full bg-slate-50 px-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-semibold text-gray-800">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full resize-none bg-slate-50 p-2 text-xs outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>

              <div className="flex justify-end gap-2 pt-1">

           <DialogClose
  render={
    <button
      type="button"
      className="flex h-[36px] items-center border border-red-300 px-3 text-[11px] text-red-500 transition hover:bg-red-50"
    />
  }
>
  Cancel
</DialogClose>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-[36px] items-center gap-1 bg-cyan-600 px-3 text-[11px] text-white transition hover:bg-cyan-700 disabled:opacity-50"
                >
                  <Save size={12} />
                  {loading ? "Updating..." : "Update Travel Package"}
                </button>

              </div>

            </form>

          </div>

        </main>

      </DialogContent>
    </Dialog>
  )
}

export default EditDastenationdailog
