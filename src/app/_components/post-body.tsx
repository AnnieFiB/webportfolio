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
      {link && (
        <Link
          className="border border-[var(--color-mm-border)] bg-[var(--color-mm-link)] hover:opacity-90 text-white font-medium py-2 px-4 rounded mt-4 inline-block transition-opacity"
          href={link}
        >
          Check it out!
        </Link>
      )}
    </div>
  );
}
