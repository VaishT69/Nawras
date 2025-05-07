import Image from "next/image";

export default function About() {
  const logo = "/assets/images/vaish-sitar.jpeg";
  const shanjeet = "/assets/images/shanjeet-sitar.jpg";

  return (
    <main>
      <section className="bg-white py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start mt-8">
          {/* imagee */}
          <div className=" w-full h-full flex justify-center items-center">
            <Image
              src={logo}
              alt="Nawras"
              width={500}
              height={300}
              className=""
            />
          </div>
          <div className="w-full mt-0">
                  {/* heading */}
            <div className="px-6 max-w-6xl mx-auto text-black items-center text-center">
              <h1 className="text-3xl font-bold mb-4 ">About Us</h1>
              <p className="text-lg leading-relaxed text-blue-900">
                Welcome to Nawras Music Productions
              </p>
            </div>

            <p className="text-md tracking-tighter text-balance text-black mt-10">
              Founded by Shanjeet Teeluck, Nawras Music Productions is a
              Durban-based company dedicated to the creation and promotion of
              Indian classical and devotional music. The company serves as a hub
              for artistic collaboration, producing high-quality recordings and
              organizing live events that celebrate the richness of Indian
              musical traditions. Nawras Music Productions has been instrumental
              in bringing Indian classical music to a broader audience in South
              Africa and beyond. Through concerts, workshops, and recordings,
              the company fosters a deeper appreciation for this genre and
              supports the development of emerging artists.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-0">
       
        <div className="flex flex-col md:flex-row items-center md:items-start mt-8">
        <div className="w-full mt-20"> 
          <div className="px-6 max-w-6xl mx-auto text-black items-center text-center">
          <h1 className="text-3xl font-bold mb-4 ">The Founder </h1>
          <p className="text-lg leading-relaxed text-blue-900">
          Shanjeet Teeluck
              </p>
        </div>

            <p className="text-md tracking-tighter text-balance text-black mt-10 pl-16">
              Shanjeet Teeluck is a distinguished South African musician,
              composer, and sitar virtuoso celebrated for his mastery of Indian
              classical, devotional, and ghazal music. With a career spanning
              over two decades, he has captivated audiences locally and
              internationally through powerful live performances and soulful
              studio recordings. His musical style blends traditional Indian
              ragas with contemporary arrangements, creating a unique and
              emotive sound that resonates across generations. As the founder
              and director of Nawras Music Productions, Shanjeet has dedicated
              his life to preserving and innovating within the rich heritage of
              Indian music. His discography includes notable albums such as
              Shruti, featuring compositions like “Raag Shivranjani” and “Raag
              Darbari,” and Bhakti, a devotional collection with tracks such as
              “Jai Siya Ram” and “Shri Ram.” With his music available on major
              streaming platforms, Shanjeet continues to share the beauty of
              Indian classical music with a global audience.
            </p>
          </div>
          
          <div className=" w-full h-full flex justify-center items-center">
            <Image
              src={shanjeet}
              alt="Nawras"
              width={350}
              height={200}
              className="mt-16"
            />
          </div>

     
        </div>
      </section>
    </main>
  );
}
