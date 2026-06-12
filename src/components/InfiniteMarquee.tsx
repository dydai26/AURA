

const images = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
];

// Double it for infinite loop
const marqueeImages = [...images, ...images];

export function InfiniteMarquee() {
  return (
    <section className="w-full mt-16 md:mt-20 mb-16 overflow-hidden">
      <div className="flex w-[200%] animate-marquee">
        {marqueeImages.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-auto">
            <img 
              src={src} 
              alt="Project preview" 
              className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
