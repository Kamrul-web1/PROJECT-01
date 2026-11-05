"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/testimonial-michael.jpg",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/testimonial-sarah.jpg",
  },
  {
    quote:
      "Kyoto In Cherry Blossom Season Was Pure Poetry. Every Temple, Every Meal And Every Walk Felt Thoughtfully Curated From Start To Finish.",
    name: "Emily Carter",
    location: "London, UK",
    image: "/images/testimonial-emily.jpg",
  },
  {
    quote:
      "Our Safari In Kenya Was The Trip Of A Lifetime. The Guides Knew Every Animal's Story And The Lodges Were Beyond Anything We Imagined.",
    name: "David Okafor",
    location: "Toronto, Canada",
    image: "/images/testimonial-david.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <h2 className="font-display text-4xl font-normal tracking-[-0.01em] text-foreground sm:text-5xl lg:text-6xl">
                What Travelers Say
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Real experiences from our happy travelers
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2.5 self-end sm:self-auto">
              <CarouselPrevious
                variant="outline"
                className="static size-10 rounded-full border-border bg-background text-foreground hover:border-brand hover:bg-brand hover:text-white"
              />
              <CarouselNext
                variant="outline"
                className="static size-10 rounded-full border-border bg-background text-foreground hover:border-brand hover:bg-brand hover:text-white"
              />
            </div>
          </div>

          <CarouselContent className="mt-8 -ml-4 sm:mt-10">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-4 md:basis-1/2"
              >
                <article className="flex h-full min-h-[260px] border border-border bg-white sm:min-h-[300px]">
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-8 p-6 sm:p-7">
                    <blockquote className="text-[13px] leading-6 text-foreground/85">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div>
                      <p className="text-sm text-brand">&mdash; {testimonial.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="relative w-[34%] shrink-0 overflow-hidden sm:w-[38%]">
                    <Image
                      src={testimonial.image}
                      alt=""
                      fill
                      sizes="(min-width: 1240px) 230px, (min-width: 768px) 18vw, 34vw"
                      className="object-cover object-center"
                    />
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
