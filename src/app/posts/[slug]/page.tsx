import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import Container from "../../_components/container";
import Header from "../../_components/header";
import { PostBody } from "../../_components/post-body";
import { PostHeader } from "../../_components/post-header";
import { getLatestSettings } from "@/lib/getSettings";

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params; // ✅ Await params because it's now async (nextjs 15 change I think)
  const post = getPostBySlug(slug);

  const { metaImage } = getLatestSettings();

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <img
          src={process.env.BASE_PATH + metaImage}
          alt={"user image"}
          className="w-16 h-16 md:w-36 md:h-36 rounded-full absolute right-8 top-8 md:right-16 md:top-4"
        />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
          />
          <PostBody content={content} link={post.link || ""} />
        </article>
      </Container>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params; // ✅ Await params
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return {
    openGraph: {
      title: post.title,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
