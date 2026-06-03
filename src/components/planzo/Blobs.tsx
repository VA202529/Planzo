export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-24 size-[28rem] rounded-full bg-brand/30 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-32 size-[26rem] rounded-full bg-pink/25 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 size-[22rem] rounded-full bg-lime/20 blur-3xl animate-blob"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}
