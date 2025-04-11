import Image from "next/image";

export default function About() {
  const logo = "/assets/images/vaish-sitar.jpeg";
  const shanjeet = "/assets/images/shanjeet-sitar.jpg";

  return (
    <main>
    <section>
    <div className="p-6 max-w-4xl mx-auto text-black items-center text-center">
      <h1 className="text-3xl font-bold mb-4 ">About Us</h1>
      <p className="text-lg leading-relaxed">
        Welcome to Nawras Music Productions
      </p>

      <div className=" w-full h-full flex justify-center items-center">
        <Image
          src={logo}
          alt="Nawras"
          width={700}
          height={200}
          className="mt-16"
        />
      </div>

      <p className="p-20 w-1/2text-lg leading-relaxed">
        Founded by Shanjeet Teeluck, Nawras Music Productions is a Durban-based
        company dedicated to the creation and promotion of Indian classical and
        devotional music. The company serves as a hub for artistic
        collaboration, producing high-quality recordings and organizing live
        events that celebrate the richness of Indian musical traditions. Nawras
        Music Productions has been instrumental in bringing Indian classical
        music to a broader audience in South Africa and beyond. Through
        concerts, workshops, and recordings, the company fosters a deeper
        appreciation for this genre and supports the development of emerging
        artists.{" "}
      </p>

   

      
    </div>
    </section>
    <section className="bg-gray-50">
    <div className="p-6 max-w-4xl mx-auto text-black items-center text-center">
      <h1 className="text-3xl font-bold mb-4 ">Shanjeet Teeluck</h1>
      <div className=" w-full h-full flex justify-center items-center">
        <Image
          src={shanjeet}
          alt="Nawras"
          width={500}
          height={200}
          className="mt-16"
        />
      </div>
      <p className="p-10 text-lg leading-relaxed">
        Shanjeet Teeluck is a distinguished South African musician, composer,
        and sitar virtuoso celebrated for his mastery of Indian classical,
        devotional, and ghazal music. With a career spanning over two decades,
        he has captivated audiences locally and internationally through powerful
        live performances and soulful studio recordings. His musical style
        blends traditional Indian ragas with contemporary arrangements, creating
        a unique and emotive sound that resonates across generations. As the
        founder and director of Nawras Music Productions, Shanjeet has dedicated
        his life to preserving and innovating within the rich heritage of Indian
        music. His discography includes notable albums such as Shruti, featuring
        compositions like “Raag Shivranjani” and “Raag Darbari,” and Bhakti, a
        devotional collection with tracks such as “Jai Siya Ram” and “Shri Ram.”
        With his music available on major streaming platforms, Shanjeet
        continues to share the beauty of Indian classical music with a global
        audience.
      </p>

      
    </div>
    </section>
    </main>
    
  );
}
