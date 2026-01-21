export default function ImageFrame({
  src,
  alt = "",
  caption,
  className = "",
  ring = "ring-black/5",
  aspect = "aspect-[16/10]",
}) {
  return (
    <figure className={`rounded-2xl bg-white shadow-soft border border-black/5 overflow-hidden ${className}`}>
      <div className={`w-full ${aspect} bg-brand-50 ring-1 ${ring} flex items-center justify-center`}>
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <div className="text-sm text-slate-500 px-6 text-center">
            Image placeholder (drop an image in <span className="font-semibold">src/assets/images</span>)
          </div>
        )}
      </div>

      {caption ? (
        <figcaption className="px-5 py-4 text-sm text-slate-600">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
