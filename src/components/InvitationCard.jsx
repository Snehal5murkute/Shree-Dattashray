import ganpati from "../assets/bgg4.PNG";
import house from "../assets/houseimg.jpeg";
import { content } from "../data/content";

export default function InvitationCard({ lang }) {
  const data = content[lang] || content.english;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">

       {/* Logo */}
      <div className=" mt-10">
        <img
          src={ganpati}
          alt="Logo"
          className="w-20 sm:w-10 md:w-15 
                     mx-auto 
                     drop-shadow-xl 
                     
                     transition duration-500 z-index:[-15]"
        />
      </div>

      {/* Ganesh Line */}
      <p className="text-center 
                     
                     font-semibold 
                     text-[#191970]
                     tracking-wide pb-3">
        {data.topNames}
      </p>

    <div className="flex items-center justify-center my-3 animate-fadeSlide">
  <div className="h-[1px] w-10 bg-[#c89b3c]"></div>

  <h2 className="mx-3 text-3xl text-[#994d00] font-bold  tracking-wide"
  style={{ fontFamily: "Raleway, sans-serif" }}>
    {data.topheading}
  </h2>

  <div className="h-[1px] w-10 bg-[#c89b3c]"></div>
</div>




     {/* ✨ Main Card */}
<div className="relative w-[360px] bg-[#fdfaf6] border-[1px] border-[#c89b3c]  text-center shadow-xl rounded-xl mt-4">

  {/* 🏡 House Name */}
  <h1 className="text-3xl text-[#cc9900]  tracking-wide mb-3 pt-5 font-extralight"
   style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
    {data.housename}
  </h1>

  {/* 🏠 Full Width House Image */}
  <img
    src={house}
    alt="house"
    className="w-full  object-cover rounded-sm mb-4"
  />

  {/* 🎉 Ceremony Heading */}
  <h2 className="text-xl text-rose-800 font-semibold tracking-wide mb-2"
  style={{ fontFamily: "Raleway, sans-serif" }}>
    {data.celebratetionname }
  </h2>

  {/* 👨‍👩‍👧 Names */}
  <p className="text-sm text-[#ffbf00] font-medium mb-3 leading-relaxed"
  style={{ fontFamily: "'Tapestry', cursive" }}>
    {data.hostnames}
  </p>

  {/* 📜 Invitation Paragraph */}
  <p className="text-sm text-gray-800 px-4 italic leading-relaxed mb-4"
  style={{ fontFamily: "Amaranth , sans-serif" }}
>
    {data.invitepara}
  </p>

  {/* 📅 Date Section */}
  <div className="flex justify-between items-center my-5 text-[#7a3e1d] px-7">

    <div className="text-sm text-center">
      <div className="w-10 h-[1px] bg-[#c89b3c] mb-1 mx-auto"></div>
      Sunday
      <div className="w-10 h-[1px] bg-[#c89b3c] mt-1 mx-auto"></div>
    </div>

    <div className="text-center">
      <p className="text-xs tracking-widest text-gray-500">MAY</p>
      <h2 className="text-4xl font-bold text-[#c89b3c] leading-none">03</h2>
      <p className="text-xs text-gray-500">2026</p>
    </div>

    <div className="text-sm text-center">
      <div className="w-10 h-[1px] bg-[#c89b3c] mb-1 mx-auto"></div>
      AT 12:30 PM
      <div className="w-10 h-[1px] bg-[#c89b3c] mt-1 mx-auto"></div>
    </div>

  </div>

  {/* 📍 Address */}
  <p className="text-sm text-[#7a3e1d] leading-relaxed mb-2">
    {data.address}
  </p>

 {/* 📞 Phone */}
<a
  href="tel:+918277223434"
  className="text-sm text-[#7a3e1d] font-medium hover:underline"
>
  📞 +91 82772 23434
</a>

  {/* 🌸 Bottom Decoration */}
  <div className="w-16 h-[2px] bg-[#c89b3c] mx-auto mt-4"></div>

</div>
    </div>
  );
}
