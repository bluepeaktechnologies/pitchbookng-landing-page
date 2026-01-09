import { Images } from "../assets";

export const Contact = () => {
  return (
    <div className="relative min-h-[calc(100vh-90px)] overflow-hidden">
      {/* Base: textured background (100%) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 h-[50vh]"
        style={{
          backgroundImage: `url(${Images.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Top: pitch background (fades in diagonally from right) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 h-[50vh]"
        style={{
          backgroundImage: `url(${Images.pitchImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          // ✅ This creates the *soft diagonal fade* (not a sharp clip)
          // Black = visible, Transparent = hidden
          WebkitMaskImage:
            "linear-gradient(115deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)",
          maskImage:
            "linear-gradient(115deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />

      {/* Optional: slight overlay to unify both images */}
      {/* <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(16,185,129,0.10) 0%, rgba(16,185,129,0.05) 55%, rgba(0,0,0,0.05) 100%)",
          pointerEvents: "none",
        }}
      /> */}

      {/* Your content */}
      <div className="relative z-10">{/* ... */}</div>
    </div>
  );
};
