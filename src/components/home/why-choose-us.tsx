import Image from "next/image";

const features = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-brand-soft py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-normal tracking-[-0.01em] text-foreground sm:text-5xl lg:text-6xl">
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6 lg:mt-12">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-white p-6 shadow-sm lg:p-8"
            >
              <Image
                src={feature.icon}
                alt=""
                width={48}
                height={48}
                className="size-10 lg:size-12"
              />
              <h3 className="mt-6 text-xl font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
