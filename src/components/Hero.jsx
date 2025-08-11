import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero1() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="" />

      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="white" className="mb-6 px-4 py-1.5 font-sans">
            New Release
          </Badge>

          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Transforming Ideas Into {" "}
            <span className="bg-gradient-to-r from-secondary to-secondary/60 bg-clip-text text-transparent">
              Powerful
            </span>{" "}
             Digital Solutions
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Turning ideas into powerful, scalable software that drives success and innovation for businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="secondary" size="lg" className="group px-8 py- text-white shadow-md">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="group px-8 py- bg-transparent shadow-md">
              {/* <Play className="mr-2 h-4 w-4" /> */}
              Learn More
            </Button>
          </div>

          {/* Powered by section */}
          <div className="mt-20">
            <p className="mb-8 text-center text text-muted-foreground">
              Powering the next generation of digital products
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
                </svg>
                <span className="text-sm font-medium">shadcn/ui</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
                </svg>
                <span className="text-sm font-medium">Vercel</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
                <span className="text-sm font-medium">React</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
                </svg>
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" /> */}
    </section>
  )
}

export default Hero1
