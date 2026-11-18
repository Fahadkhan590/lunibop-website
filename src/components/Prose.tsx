export function Prose({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`prose prose-zinc max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#170B35] prose-p:text-[#170B35]/70 prose-p:leading-relaxed prose-a:text-[#7139C9] prose-a:underline-offset-4 hover:prose-a:text-[#8B5CF6] prose-strong:text-[#170B35] prose-li:text-[#170B35]/70 prose-ul:list-disc prose-ol:list-decimal prose-blockquote:border-l-[#7139C9] prose-blockquote:text-[#170B35]/70 ${className}`}>
      {children}
    </div>
  );
}
