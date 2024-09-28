const Satellite = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src="satellite1.png" // Replace with your image path or URL
        alt="Rotating"
        className="w-32 h-32 animate-spin" // Tailwind utilities for size and animation
      />
    </div>
  );
};

export default Satellite;

// apps/client/src/assets/satellite1.png
