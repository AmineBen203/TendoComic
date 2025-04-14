export default function Broadcast() {
  return (
    <div className="relative z-0 pt-24 px-4 min-h-screen bg-black text-white">
      <h1 className="text-3xl text-center mb-8">Live Broadcast 🎥</h1>

      <div className="relative w-full aspect-video max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/UFO.mp4"
          autoPlay
          loop
          playsInline
        />
      </div>
    </div>
  );
}
