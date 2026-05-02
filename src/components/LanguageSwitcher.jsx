export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="absolute top-5 right-5 flex space-x-2 z-10 bg-white/10 backdrop-blur-md p-1 rounded-full shadow-lg">
      
      <button
        onClick={() => setLang("english")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
          ${
            lang === "english"
              ? "bg-[#8b4513] text-white shadow-md scale-105"
              : "text-[#8b4513] hover:bg-[#8b4513]/20"
          }`}
      >
        English
      </button>

      <button
        onClick={() => setLang("marathi")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
          ${
            lang === "marathi"
              ? "bg-[#8b4513] text-white shadow-md scale-105"
              : "text-[#8b4513] hover:bg-[#8b4513]/20"
          }`}
      >
        मराठी
      </button>

    </div>
  );
}