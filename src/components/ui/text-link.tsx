import Link from "next/link";

const TextLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link href={href} className={`text-white hover:text-white/75 ${className}`}>
      {children}
    </Link>
  );
};
TextLink.displayName = "TextLink";

export { TextLink };
