import Image from "next/image";
import Link from "next/link";

export default function Album() {
  const album1 = "/assets/images/shruti.jpg";
  const album2 = "/assets/images/bhakti.png";
  const applemusic = "/assets/images/apple-music.png";
  const ytmusic = "/assets/images/yt-music.png";
  const spotify = "/assets/images/spotify.png";

  return (
    <main>
      <section className="bg-[#EFE3B5] w-full h-[300px] pb-20 relative z-0 mt-20 rounded-xl"></section>
      
      <section className="bg-transparent -mt-60 z-20 relative ">
        <div className="flex flex-col md:flex-row items-center md:items-start mt-8 ">
          <div className="w-full h-full flex justify-center items-center ">
            <Image src={album1} alt="Album 1" width={500} height={500} className="rounded-xl" />
          </div>

          <div className="w-full lg:mr-30 mt-20 bg-amber-400 p-6 rounded-xl">
            <div className=" max-w-6xl mx-auto text-black items-center text-center">
              <h1 className="text-3xl font-bold mb-4">Shruti</h1>
              <ul className="flex flex-row gap-6 list-none justify-center items-center p-0">
                <li>
                  <Link
                    href="https://music.apple.com/us/album/shruti-ep/1529172253"
                    target="_blank"
                  >
                    <Image
                      src={applemusic}
                      alt="applemusic"
                      width={75}
                      height={75}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://music.youtube.com/playlist?list=OLAK5uy_ni6qTN_R_oZyMaVYQHTRN3zgw9srzvOfk"
                    target="_blank"
                  >
                    <Image src={ytmusic} alt="ytmusic" width={75} height={75} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://music.apple.com/us/album/shruti-ep/1529172253"
                    target="_blank"
                  >
                    <Image src={spotify} alt="spotify" width={75} height={75} />
                  </Link>
                </li>
              </ul>
              <p className="text-lg leading-relaxed"></p>
            </div>
            <p className="text-md tracking-tigher text-balance text-black mt-10">
              This is album 1
            </p>
          </div>
        </div>
      </section>

{/* Album 2 */}
      <section className="bg-[#EFE3B5] w-full h-[300px] pb-20 relative z-0 mt-20 rounded-xl"></section>
      <section className="bg-transparent -mt-60 z-20 relative ">
        <div className="flex flex-col md:flex-row items-center md:items-start mt-8 ">
          <div className="order-2 lg:order-1 w-full lg:ml-30 mt-20 bg-amber-400 p-6 rounded-xl">
            <div className=" max-w-6xl mx-auto text-black items-center text-center">
              <h1 className="text-3xl font-bold mb-4">Bhakti</h1>
              <ul className="flex flex-row gap-6 list-none justify-center items-center p-0">
                <li>
                  <Link
                    href="https://music.apple.com/us/album/shruti-ep/1529172253"
                    target="_blank"
                  >
                    <Image
                      src={applemusic}
                      alt="applemusic"
                      width={75}
                      height={75}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://music.youtube.com/playlist?list=OLAK5uy_ni6qTN_R_oZyMaVYQHTRN3zgw9srzvOfk"
                    target="_blank"
                  >
                    <Image src={ytmusic} alt="ytmusic" width={75} height={75} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://music.apple.com/us/album/shruti-ep/1529172253"
                    target="_blank"
                  >
                    <Image src={spotify} alt="spotify" width={75} height={75} />
                  </Link>
                </li>
              </ul>
              <p className="text-lg leading-relaxed"></p>
            </div>
            <p className="text-md tracking-tigher text-balance text-black mt-10">
              This is album 2
            </p>
          </div>
          <div className="order-1 lg:order-2 w-full h-full flex justify-center items-center ">
            <Image src={album2} alt="Album 1" width={500} height={500} className="rounded-xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
