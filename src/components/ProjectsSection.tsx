import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn, Button } from './Button';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Авто підбір | Protscars",
    desc: "Сервіс індивідуального підбору автомобілів під ваші потреби.",
    link: "https://protscarsif2026.vercel.app",
    img: "prots.jpg"
  },
  {
    id: 2,
    name: "ES TRANS | Private Transfers",
    desc: "Сервіс преміальних приватних перевезень на сучасних автомобілях Mercedes-Benz.",
    link: "https://estrans.vercel.app",
    img: "1.png"
  },
  {
    id: 3,
    name: "Мережа «Могорич» та «Апріорі»",
    desc: "Локальна мережа маркетів формату «біля дому» з широким асортиментом.",
    link: "https://mogorich.com.ua",
    img: "2.png"
  },
  {
    id: 4,
    name: "Deluxe Trade",
    desc: "Імпортер та дистриб'ютор європейської побутової хімії високої якості.",
    link: "https://www.deluxtrade.com.ua",
    img: "3.png"
  },
  {
    id: 5,
    name: "ECOVLUU",
    desc: "Інтернет-магазин натуральної доглядової косметики для волосся.",
    link: "https://ecovluu.com",
    img: "4.png"
  },
  {
    id: 6,
    name: "MAMMA MIA (MMT)",
    desc: "Платформа для пошуку авторських подорожей, івентів та експертів.",
    link: "https://www.mammamiatrips.com",
    img: "5.png"
  },
  {
    id: 7,
    name: "VEX Real Estate",
    desc: "Сучасний сервіс для зручного пошуку та оренди нерухомості.",
    link: "https://vex-platforms.vercel.app",
    img: "6.png"
  },
  {
    id: 8,
    name: "UC Parts",
    desc: "Сучасний інтернет мазазин",
    link: "https://uc-parts-forge.vercel.app",
    img: "7.png"
  }
];

function ProjectItem({ project }: { project: typeof projects[0] }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div ref={ref} className="w-full flex flex-col gap-6">
      <div 
        className={cn("w-full", isInView ? "animate-fade-in-up" : "opacity-0")}
        style={{ animationDelay: '0.1s' }}
      >
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#051A24]">
          {project.name}
        </h3>
        <p className="text-sm md:text-base text-[#051A24]/70 mt-1 max-w-md">
          {project.desc}
        </p>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-3 text-black font-medium text-sm transition-colors"
        >
          Переглянути проєкт <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      
      <div 
        className={cn("w-full", isInView ? "animate-fade-in-up" : "opacity-0")}
        style={{ animationDelay: '0.2s' }}
      >
        <img 
          src={project.img} 
          alt={project.name} 
          className="w-full rounded-2xl shadow-lg object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map(p => (
          <ProjectItem key={p.id} project={p} />
        ))}
      </div>
      <div className="mt-16 md:mt-20 flex justify-center">
        <Button variant="primary" href="https://t.me/web_dev18">Замовити сайт</Button>
      </div>
    </section>
  );
}
