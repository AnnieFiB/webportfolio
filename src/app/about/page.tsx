import { Metadata } from "next";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { getLatestSettings } from "@/lib/getSettings";
import { AboutBody } from "@/app/_components/about-body";
import { ProfilePic } from "@/app/_components/profile-pic";
import markdownToHtml from "@/lib/markdownToHtml";

export const metadata: Metadata = {
  title: "About Me",
};

export default async function AboutPage() {
  const { aboutMe } = getLatestSettings();
  
  // Convert the aboutMe text to HTML (it's plain text, but we can format it)
  const content = await markdownToHtml(aboutMe || "");

  return (
    <main>
      <Container>
        <Header />
        <ProfilePic className="absolute right-8 top-8 md:right-16 md:top-4" />
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
