"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Product Strategy",
    description:
      "Strategic planning and market positioning to ensure your product meets user needs and business goals.",
    items: ["Market Research", "User Personas", "Competitive Analysis"],
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Beautiful, user-centered designs that create engaging experiences across all platforms.",
    items: ["UI/UX Design", "Prototyping", "Interaction Design"],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Modern, scalable web applications built with the latest technologies and best practices.",
    items: ["Frontend Dev", "Backend Dev", "API Integration"],
  },
  {
    icon: Shrub,
    title: "Marketing",
    description:
      "Data-driven strategies to launch successfully and scale your product efficiently.",
    items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
  },
];

const Services4 = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="mx-auto space-y-12 px-6">
          {/* Heading */}
          <div className="space-y-4 text-center">
            <h2 className="font-spaceGrotesk text-4xl font-bold text-secondary">
              Services
            </h2>
            <p className="mx-auto font-poppins text-muted-foreground max-w-2xl">
              We craft digital experiences that captivate and convert, bringing
              your vision to life.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {services.map(({ icon: Icon, title, description, items }, index) => (
              <div
                key={index}
                className="space-y-6 rounded-lg border border-border p-8 transition-all duration-300 hover:shadow-lg hover:border-secondary hover:-translate-y-1 shadow-md bg-gray-100"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-tr from-secondary to-primary p-3 text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-spaceGrotesk text-xl font-semibold text-secondary">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  {description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-secondary to-primary" />
                      <span className="font-poppins text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services4 };
