// 1. Define the Card component (exactly as seen in your photo line 16)
const Card = ({ name }: { name: string }) => {
  return (
    <div className="bg-green-500 w-40 h-40 text-white flex flex-col items-center justify-center rounded-lg shadow-lg">
      <span className="text-xl font-semibold">{name}</span>
      <span className="text-5xl font-bold">01</span>
    </div>
  );
};

// 2. Your main export
export const Detail = () => {
  return (
    <div className="p-10 min-h-screen bg-transparent">
      <h1 className="text-white text-3xl font-bold mb-6">Pokemon</h1>
      
      {/* 3. This adds the single card with the name inside */}
      <Card name="Geodude" />
    </div>
  );
};
