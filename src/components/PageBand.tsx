export default function PageBand({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-zinc-200 bg-emerald-50/60">
      <div className="mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
