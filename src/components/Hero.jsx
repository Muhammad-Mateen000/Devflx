import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Cloud,
  Database,
  MonitorCheck,
  Shield,
  SquarePen,
  Users,
  Wrench,
} from "lucide-react";

export function Hero1() {
  const services = [
    { icon: MonitorCheck, text: "Software Development" },
    { icon: Cloud, text: "Cloud Services" },
    { icon: Brain, text: "Artificial Intelligence" },
    { icon: Shield, text: "Cyber Security" },
    { icon: Database, text: "Data Engineering" },
    { icon: SquarePen, text: "UI/UX Design" },
    { icon: Users, text: "IT Consulting" },
    { icon: Wrench, text: "Maintenance & Support" },
  ];

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          {/* Badge */}
          <Badge variant="white" className="mb-6 px-4 py-1.5 font-sans">
            New Release
          </Badge>

          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-bold sm:text-6xl lg:text-7xl font-secondaryfont">
            Transforming Ideas Into{" "}
            <span className="bg-gradient-to-r from-secondary to-secondary/60 bg-clip-text text-transparent">
              Powerful
            </span>{" "}
            Digital Solutions
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-2xl font-poppins text-muted-foreground sm:text-lg">
            Turning ideas into powerful, scalable software that drives success
            and innovation for businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="group px-8 py-3 text-white font-poppins font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 bg-transparent font-poppins shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Services */}
          <div className="mt-20">
            <p className="mb-8 text-center text-muted-foreground font-poppins">
              Powering the next generation of digital products
            </p>
            <div className="flex flex-wrap max-w-[80%] m-auto items-center justify-center gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-secondary"
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                    <span className="text-sm font-poppins">{service.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero1;
