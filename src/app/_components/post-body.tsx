import Link from "next/link";
import markdownStyles from "./markdown-styles.module.css";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  content: string;
  link: string;
};

export function PostBody({ content, link }: Props) {
  // Use DOMPurify to sanitize the HTML content
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div className="max-w-full mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
      <Link
        className="
              bordr-1 
              bordr-solid
              bordr-gray-200
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2 px-4
              rounded
              mt-4
              inline-block"
        href={link}
      >
        Check it out!
      </Link>
    </div>
  );
}
