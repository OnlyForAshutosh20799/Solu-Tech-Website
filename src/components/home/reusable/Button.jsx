export default function Button({ name, className = "", onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#FF3B00] text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-[#e83700] transition ${className}`}
    >
      {name}
    </button>
  );
}
