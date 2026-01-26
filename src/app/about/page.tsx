import { Metadata } from "next";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { getLatestSettings } from "@/lib/getSettings";
import { AboutBody } from "@/app/_components/about-body";
import markdownToHtml from "@/lib/markdownToHtml";

export const metadata: Metadata = {
  title: "About Me",
};

export default async function AboutPage() {
  const { aboutMe, metaImage, userName } = getLatestSettings();
  
  // Convert the aboutMe text to HTML (it's plain text, but we can format it)
  const content = await markdownToHtml(aboutMe || "");

  return (
    <main>
      <Container>
        <Header />
        <img
          src={process.env.BASE_PATH + metaImage}
          alt={userName}
          className="w-16 h-16 md:w-36 md:h-36 rounded-full absolute right-8 top-8 md:right-16 md:top-4 object-cover"
        />
        <article className="mb-32">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
            About Me
          </h1>
          <div className="max-w-3xl">
            <AboutBody content={content} />
          </div>
        </article>
      </Container>
    </main>
  );
}
