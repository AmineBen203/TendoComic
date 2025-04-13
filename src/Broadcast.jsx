export default function Broadcast() {
    return (
      <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/public/assets/videos/UFO.mp4"
        autoPlay
        loop
        muted
        playsInline
        />
      </div>
    );
  }
  