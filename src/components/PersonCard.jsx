import ImageFrame from "./ImageFrame.jsx";

export default function PersonCard({ name, role, bio, imgSrc }) {
  return (
    <div className="rounded-2xl bg-white shadow-soft border border-black/5 overflow-hidden">
      <ImageFrame
        src={imgSrc || null}
        alt={name}
        ring="ring-black/5"
        aspect="aspect-[4/3]"
        className="rounded-none border-0 shadow-none"
      />
      <div className="p-6">
        <div className="text-base font-semibold">{name}</div>
        <div className="mt-1 text-sm font-semibold text-[#702840]">{role}</div>
        {bio ? (
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">{bio}</p>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            Bio placeholder — add a short profile here.
          </p>
        )}
      </div>
    </div>
  );
}
