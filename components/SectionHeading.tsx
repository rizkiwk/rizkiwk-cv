type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  index,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-sm text-lab">{index}</span>
        <span className="h-px w-10 bg-lab/40" />
        {subtitle && (
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
            {subtitle}
          </span>
        )}
      </div>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
