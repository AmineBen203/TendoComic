
export default function Comic() {
  const panels = [1, 2, 3, 4, 5];
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col items-center mt-10 space-y-6 px-4">
        {panels.map(i => (
          <img key={i} src={`/assets/comic/${i}.png`} alt={`Panel ${i}`} className="max-w-2xl shadow-lg" />
        ))}
      </div>
    </div>
  );
}
