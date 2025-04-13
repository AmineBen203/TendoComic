export default function Broadcast() {
    return (
      <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          src="/videos/spooky.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    );
  }
  