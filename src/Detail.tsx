export const Detail = () => {
  return (
    // This main div covers the screen and shows your background
    <div className="min-h-screen p-10 font-sans">
      
      {/* This is the white card shown in your Pikachu screenshot */}
      <div className="bg-white/90 w-80 rounded-xl shadow-2xl p-6 flex flex-col gap-4">
        
        {/* The Title Section */}
        <h1 className="text-2xl font-bold text-gray-800">
          Pikachu - 0
        </h1>

        {/* The 400x400 Image Placeholder */}
        <div className="bg-gray-200 w-full aspect-square flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400">
          <span className="text-gray-500 font-medium text-xl">400x400</span>
        </div>

        {/* The Type Tag (The green button at the bottom) */}
        <div className="flex justify-end">
          <span className="bg-green-500 text-white px-4 py-1 rounded-md text-sm font-bold">
            grass
          </span>
        </div>
        
      </div>
    </div>
  );
};