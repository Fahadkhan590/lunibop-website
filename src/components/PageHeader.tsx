import { Breadcrumbs } from "./Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Array<{ name: string; href: string }>;
};

export function PageHeader({ eyebrow, title, description, breadcrumbs }: Props) {
  return (
    <div className="relative overflow-hidden bg-[#0F0728] border-b border-white/5">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[min(500px,60vh)] bg-[#7139C9]/15 blur-[100px] rounded-full max-w-[900px]" />
        <div className="absolute -bottom-40 -right-40 w-[min(600px,80vw)] h-[min(600px,80vw)] bg-[#FFB9DE]/5 blur-[80px] rounded-full max-w-[600px] max-h-[600px]" />
      </div>
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 sm:pb-14">
        {breadcrumbs && (
          <div className="mb-6 overflow-x-auto scrollbar-hide">
            <div className="inline-flex px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur whitespace-nowrap">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          </div>
        )}
        {/* Fix breadcrumb text color on dark */}
        <style>{`.dark-bc ol{color:rgba(255,255,255,0.6)} .dark-bc ol a{color:rgba(255,255,255,0.75)} .dark-bc ol a:hover{color:white} .dark-bc span[aria-current]{color:white}`}</style>
        <div className={breadcrumbs ? "dark-bc" : ""}>
          {breadcrumbs && <span className="hidden">{/* style wrapper */}</span>}
        </div>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#FFD76A] animate-pulse shrink-0" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80 truncate">{eyebrow}</span>
          </div>
        )}
        <h1 className="mt-4 font-display font-extrabold text-[28px] xs:text-[30px] sm:text-[42px] lg:text-[52px] leading-[0.95] tracking-tight text-white max-w-[880px] break-words">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-[15px] sm:text-[17px] leading-relaxed text-white/60 max-w-[720px] break-words">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
