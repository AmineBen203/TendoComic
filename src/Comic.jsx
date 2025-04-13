
export default function Comic() {
  const panels = [1, 2, 3, 4, 5];
  return (
      <div className="w-full max-w-md mx-auto px-4 sm:px-0">
        {panels.map(i => (
          <img key={i} src={`/assets/comic/${i}.png`} alt={`Panel ${i}`} className="w-full max-w-md mx-auto px-4 sm:px-0"w" />
        ))}
      </div>
  );
}
