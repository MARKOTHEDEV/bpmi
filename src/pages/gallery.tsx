import Head from "next/head";
import { LayoutFn } from "@/components/Layout";
import { Hero, styles } from "@/components";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>BPMI | Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <LayoutFn>
          <Hero img={"reel"} title={"GALLERY"}></Hero>
          <div className={`mb-10 md:mb-20 ${styles.paddingX}`}>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((a, idx) => (
                <img
                  src={`/gal-${idx + 1}.jpg`}
                  alt={""}
                  key={a}
                  style={{'width':'100%',height:'100%'}}
                  className="object-cover"
                />
              ))}
            </div>
          </div>
        </LayoutFn>
      </main>
    </>
  );
}
