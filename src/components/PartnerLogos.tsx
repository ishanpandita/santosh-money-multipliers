import Image from "next/image";

const partners = [
  { name: "ICICI Lombard", logo: "/logos/icici.png" },
  { name: "HDFC ERGO", logo: "/logos/hdfc.png" },
  { name: "NIPPON INDIA", logo: "/logos/nippon.png" },
  { name: "IFFCO Tokio", logo: "/logos/iffco.png" },
  { name: "Go Digit", logo: "/logos/digit.png" },
  { name: "New India Assurance", logo: "/logos/newindia.png" },
  { name: "Star Health", logo: "/logos/starhealth.png" },
  { name: "Tata AIG", logo: "/logos/tataaig.png" },
  { name: "Care Health Insurance", logo: "/logos/care.png" },
];

export default function PartnerLogos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Our Trusted Partners
        </h2>
        <p className="text-slate-600 mt-3 mb-14">
          We work with India&apos;s leading insurance companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 items-center">
  {partners.map((partner) => (
    <div
      key={partner.name}
      className="flex justify-center items-center h-32"
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={220}
        height={100}
        className="object-contain max-h-24 w-auto opacity-70 hover:opacity-100 transition duration-300"
      />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}