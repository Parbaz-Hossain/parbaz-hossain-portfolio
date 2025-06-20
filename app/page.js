import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/social";
import Photo from "@/components/photo";
import Stats from "@/components/stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-16">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl"> Software Engineer</span>
              <h1 className="h2 mb-6 mt-2">
                Hello I&apos;m <br /> <span className="text-accent">Parbaz Hossain</span>
              </h1>
              <p className="max-w-[600px] mb-9 text-white/100">
               I specialize in building clean, scalable, and high-performance 
               digital solutions using modern technologies and best coding practices.
              </p>

              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <a href="/assets/resume/Parbaz_Hossain.pdf" download>
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </a>
                </Button>
                <div className="mb-8 xl:mb-0">
                    <Social
                      containerStyles="flex gap-6"
                      iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                      items-center text-accent text-base hover:bg-accent hover:text-primary 
                      hover:transition-all duration-500"
                    />
                </div>
              </div>
            </div>

            {/* photo */}
            <div className="order-one xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
