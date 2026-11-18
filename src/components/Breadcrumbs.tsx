import Link from "next/link";

export function Breadcrumbs({ items }: { items: Array<{ name: string; href: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#170B35]/50">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {idx > 0 && <span aria-hidden="true" className="text-[#170B35]/20">/</span>}
              {isLast ? (
                <span aria-current="page" className="font-semibold text-[#170B35]">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#7139C9] transition-colors underline-offset-4 hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
