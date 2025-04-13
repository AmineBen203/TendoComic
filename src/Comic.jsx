export default function Comic() {
  const panels = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col items-center gap-6 px-4">
      {panels.map(i => (
        <img
          key={i}
          src={`/assets/comic/${i}.png`}
          alt={`Panel ${i}`}
          className="w-full max-w-md rounded shadow-lg"
        />
      ))}
    </div>
  );
}
