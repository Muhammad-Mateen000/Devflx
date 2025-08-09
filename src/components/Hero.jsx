import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// interface Hero1Props {
//   badge?: string;
//   heading: string;
//   description: string;
//   buttons?: {
//     primary?: {
//       text: string;
//       url: string;
//     };
//     secondary?: {
//       text: string;
//       url: string;
//     };
//   };
//   image: {
//     src: string;
//     alt: string;
//   };
// }

const Hero1 = ({
  badge = "✨ Your Website Builder",
  heading = "Transforming Ideas Into Powerful Digital Solutions",
  description = "Turning ideas into powerful, scalable software that drives success and innovation for businesses worldwide.",
  buttons = {
    primary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "/images/hero.png",
    alt: "Hero section demo image showing interface components",
  },
}) => {
  return (
    <section className="py-20 px-6">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )} */}
            <h1 className="mb-6 text-pretty text-4xl font-bold lg:text-6xl font-spaceGrotesk">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto bg-secondary px-6 py-5 font-semibold">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {/* {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )} */}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero1 }  ;