const BackgroundLights = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      <style>{`
        @keyframes torch-swing {
          0% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(80deg);
          }

          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>

      {/* Torch Beam */}
      <div
        className="
          absolute
          top-15
          right-0
          origin-top-right
          blur-[70px]
        "
        style={{
          width: "180px",
          height: "110vh",

          background: `
            linear-gradient(
              to left,
              rgba(255,255,255,2)0%,
              rgba(255,255,255,0.9) 20%,
              rgba(255,255,255,0.55) 45%,
              rgba(255,255,255,0.2) 70%,
              rgba(255,255,255,0) 100%
            )
          `,

          clipPath: "polygon(55% 0%, 75% 0%, 100% 100%, 0% 100%)",

          animation:
            "torch-swing 15s cubic-bezier(0.65, 0, 0.25, 2) infinite",
        }}
      />
    </div>
  );
};

export default BackgroundLights;