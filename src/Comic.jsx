
export default function Comic() {
  const panels = [1, 2, 3, 4, 5];
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col items-center mt-10 space-y-6 px-4">
        {panels.map(i => (
          <img key={i} src={`/assets/comic/${i}.png`} alt={`Panel ${i}`} className="w-full max-w-md mx-auto px-4 sm:px-0"w" />
        ))}
      </div>
    </div>
  );
}
