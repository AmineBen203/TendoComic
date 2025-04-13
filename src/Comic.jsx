export default function Comic() {
  const panels = [1, 2, 3, 4, 5];

  return (
    <div className="max-w-screen-md mx-auto px-4 py-10">
      {panels.map(i => (
        <img
          key={i}
          src={`/assets/comic/${i}.png`}
          alt={`Panel ${i}`}
           className="w-full max-w-screen-sm h-auto"
        />
      ))}
    </div>
  );
}
