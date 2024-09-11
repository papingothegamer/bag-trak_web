export default function AboutSection() {
    return (
      <section className="w-11/12 max-w-7xl py-8 px-4 mx-auto mt-10 mb-14 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600">About Bag-Trak</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Born from the frustration of lost luggage, Bag-Trak was created to solve a common travel problem. Our journey began with a simple idea and has grown into a comprehensive solution trusted by travelers worldwide.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ol className="relative border-l border-muted-foreground">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-background" />
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">2020</time>
                  <h3 className="text-lg font-semibold">Idea Conception</h3>
                  <p className="mb-4 text-base font-normal text-muted-foreground">
                    Bag-Trak was born from a lost luggage experience
                  </p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-background" />
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">2021</time>
                  <h3 className="text-lg font-semibold">Product Development</h3>
                  <p className="mb-4 text-base font-normal text-muted-foreground">First prototype of Bag-Trak tracker developed</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-background" />
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">2022</time>
                  <h3 className="text-lg font-semibold">Airline Partnerships</h3>
                  <p className="text-base font-normal text-muted-foreground">Bag-Trak partners with major airlines</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    )
  }
  