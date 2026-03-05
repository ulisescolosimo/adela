import Image from "next/image";
import Link from "next/link";
import { Header, Hero } from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative bg-white overflow-hidden">
      <Header />
      <Hero />

      {/* Sobre mí - full responsive, columna izquierda = altura de la imagen */}
      <section id="sobre-mi" className="relative w-full bg-white overflow-hidden">
        <div className="relative max-w-[1474px] mx-auto">
          {/* Overlays: cubren la sección sin altura fija */}
          <div className="absolute inset-0 opacity-30 bg-white -z-10 pointer-events-none" />
          <div className="absolute inset-0 opacity-30 bg-orange-300/25 -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch gap-8 md:gap-12 px-6 py-12 md:px-[181px] md:py-16">
            {/* Columna izquierda: misma altura que la imagen (grid la iguala) */}
            <div className="flex flex-col min-h-0">
              <h2 className="text-red-400 text-5xl md:text-6xl font-light font-poppins uppercase tracking-[2.87px] leading-tight mb-4 md:mb-6">
                Sobre mí
              </h2>
              <p className="text-black text-sm font-light font-poppins leading-7 max-w-[475px] flex-1">
                Trabajé por más de 25 años en el mundo corporativo liderando equipos y desafíos muy diversos. Un día sentí que quería probar cosas nuevas e inicié este camino de transformación que me hace muy feliz. Me especialicé en el entrenamiento de competencias socioemocionales (human skills), en neurociencias aplicadas a la educación de adultos y en el desarrollo de herramientas para promover la capacidad de resiliencia. Desde entonces facilito procesos de cambio de personas y equipos con la idea de contribuir a generar nuevos liderazgos, más humanos y sustentables.
              </p>
              <Link
                href="#mas"
                className="inline-flex items-center justify-center w-28 h-8 mt-6 md:mt-8 bg-orange-300 text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-orange-400 transition flex-shrink-0"
              >
                Leer más
              </Link>
            </div>

            {/* Columna derecha: imagen define la altura de la fila */}
            <div className="relative w-full min-h-0 aspect-[631/423]">
              <Image
                src="/images/sobre-mi/Adela Saenz Cavia62Gaudi 1.png"
                alt="Adela - Sobre mí"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿En qué estoy trabajando? */}
      <section className="relative py-24 bg-white">
        <div className="max-w-[1474px] mx-auto px-6">
          {/* Imagen decorativa + título centrados */}
          <div className="flex flex-col items-center text-center mb-12">
            <Image
              src="/images/trabajando/07 2 (1).png"
              alt=""
              width={131}
              height={131}
              className="object-contain mb-4"
            />
            <h2 className="text-stone-900 text-4xl font-light font-poppins uppercase tracking-widest">
              ¿en qué estoy trabajando?
            </h2>
          </div>

          {/* Contenedor más angosto para cada fila */}
          <div className="max-w-[900px] mx-auto space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-[#A9B8C3] pb-8">
              <div className="relative flex-shrink-0">
                <Image src="/images/trabajando/07 1.png" alt="Experiencias de aprendizaje" width={95} height={95} className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-stone-900 text-base font-light font-poppins uppercase tracking-wide mb-2">
                  EXPERIENCIAS DE APRENDIZAJE HUMAN SKILLS ACTIVE LEARNING
                </h3>
                <p className="text-black text-xs font-light font-poppins leading-6">
                  Genero experiencias de aprendizaje activo a medida para equipos y organizaciones, buscando contribuir a nuevos estilos de trabajo y liderazgo, y enfocándome en el desarrollo de las llamadas Human Skills o Brain Capital Skills (algunas de las competencias que organismos como el World Economic Forum han definido como las habilidades del futuro — en realidad, ya del presente).
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image src="/images/trabajando/BOTON EXPERIENCIAS.png" alt="" width={31} height={31} className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-[#A9B8C3] pb-8">
              <div className="relative flex-shrink-0">
                <Image src="/images/trabajando/11 1.png" alt="Procesos de cambio cultural" width={98} height={98} className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-stone-900 text-base font-light font-poppins uppercase tracking-wide mb-2">
                  Procesos de cambio cultural y desarrollo de culturas de bienestar
                </h3>
                <p className="text-black text-xs font-light font-poppins leading-6">
                  Las culturas organizacionales pueden ser aceleradores del cambio o el obstáculo intangible más poderoso. <span className="text-yellow-600">En equipo con otros profesionales</span>, contribuimos a transformar culturas, desarrollando un recorrido que hemos probado con éxito. Especializados en el bienestar humano, gran parte de nuestro foco es contribuir a que las organizaciones desarrollen culturas de bienestar sustentable.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image src="/images/trabajando/BOTON ASESOR Y FACILIT.png" alt="" width={31} height={31} className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative flex-shrink-0">
                <Image src="/images/trabajando/15 1.png" alt="Coaching y Mentoreo" width={85} height={85} className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-stone-900 text-base font-light font-poppins uppercase tracking-wide mb-2">
                  Coaching y Mentoreo
                </h3>
                <p className="text-black text-xs font-light font-poppins leading-6 text-justify">
                  Basada en una formación sólida, pero con una gran experiencia personal en liderar proyectos y personas en organizaciones diversas, acompaño procesos de desarrollo para personas en situación de liderazgo a través de la mentoría o el coaching.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image src="/images/trabajando/BOTON COACHING Y MENTOREO.png" alt="" width={31} height={31} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Human Lab */}
      <section id="we-human-lab" className="relative overflow-hidden bg-[#E6CC76]/25">
        <div className="relative max-w-[1474px] mx-auto px-6 py-12 md:py-16 lg:py-24 text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 relative mx-auto mb-6 md:mb-8">
            <Image
              src="/images/We Human 1.png"
              alt="We Human Lab"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-stone-700 text-xl sm:text-2xl font-swanky font-normal leading-tight mb-1 md:mb-2">
            Mi proyecto personal
          </p>
          <h2 className="text-yellow-600 text-3xl sm:text-4xl font-light font-poppins uppercase tracking-widest leading-tight mb-8 md:mb-12">
            WE HUMAN LAB
          </h2>
          <p className="text-black text-sm font-light font-poppins leading-7 max-w-[504px] mx-auto text-center mb-8 md:mb-10">
            La IA puede hacer arte, puede escribir &quot;al estilo&quot; de Borges y generar canciones, pero nunca será Van Gogh o Frida, nunca escribirá &quot;Las ruinas circulares&quot; o &quot;Funes el memorioso&quot;, y no podrá crear una ópera como Aida o &quot;My Universe&quot; como BTS y Coldplay pudieron hacerlo.
            <br /><br />
            A medida que la IA generativa asume muchas tareas cotidianas y entendemos que el mundo del trabajo está cambiando por completo debido a los avances de la tecnología, potenciar, cultivar y entrenar las competencias que nos hacen humanos será nuestro verdadero diferencial.
          </p>
          <Link
            href="#we-human-lab-mas"
            className="inline-flex items-center justify-center min-w-[7rem] h-8 px-4 bg-orange-300 text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-orange-400 transition"
          >
            Leer más
          </Link>
        </div>
      </section>

      {/* Red Communia */}
      <section id="red-communia" className="relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start gap-8 lg:gap-12 mb-8 lg:mb-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-yellow-600 text-3xl sm:text-4xl font-light font-poppins uppercase tracking-widest leading-tight mb-2">
                RED COMMUNIA
              </h2>
              <p className="text-stone-700 text-xl sm:text-2xl font-swanky font-normal leading-tight">
                Mi red de trabajo
              </p>
            </div>
            <p className="text-black text-sm font-light font-poppins leading-7 max-w-[604px] order-1 lg:order-2 lg:max-w-none">
              Muchos de los proyectos que desarrollamos e implementamos requieren de un gran equipo. Para ello, armé RedCommunia, una red colaborativa de trabajo conformada por psicólogos, pedagogos, sociólogos, counselors y coaches cuya filosofía es la iteración, exploración e integración de ideas, conocimientos y abordajes.
            </p>
          </div>

          <div className="relative overflow-hidden -mx-6 px-6 py-8 md:py-10">
            <div className="absolute inset-0 -z-10">
              <Image src="/images/trabajando/Vector 39.png" alt="" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 opacity-30 bg-orange-300/25 -z-10" />
            <div className="relative flex flex-wrap justify-center gap-6 sm:gap-4 md:gap-6 lg:flex-nowrap lg:justify-between lg:gap-4">
            {[
              "Ercilia Braun",
              "Adela Saénz Cavia",
              "Miguel Espeche",
              "Osvaldo Rivolt",
              "María Eugenia Barrio",
              "Lucía Franchi",
              "Fabiana García Lago",
            ].map((name, i) => (
              <div key={name} className="flex flex-col items-center flex-shrink-0">
                <div className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-stone-400 overflow-hidden ${i === 6 ? "bg-zinc-300" : "bg-stone-100"}`}>
                  <Image
                    src="https://placehold.co/133x128"
                    alt={name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <span className={`mt-2 text-base sm:text-xl font-swanky font-normal capitalize leading-tight text-center ${i === 1 ? "text-yellow-600" : "text-black"}`}>
                  {name}
                </span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué te apasiona? / Mi libro */}
      <section className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-0">
        <div className="mx-auto flex flex-col lg:flex-row">
          {/* Imagen del libro */}
          <div className="w-full aspect-[490/583] lg:w-[380px] xl:w-[490px] lg:flex-shrink-0 lg:aspect-[490/583] relative">
            <Image
              src="/images/Adela Saenz Cavia137 2.png"
              alt="Libro ¿Qué te apasiona?"
              width={490}
              height={583}
              className="w-full h-full object-cover object-top shadow-[0px_0px_23.5px_1px_rgba(0,0,0,0.05)]"
              unoptimized
            />
          </div>
          {/* Zona de contenido con fondo rosa - texto centrado verticalmente */}
          <div className="relative flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-center min-h-0 px-4 sm:px-6 lg:px-8 xl:px-12 xl:pl-[min(6rem,97px)] py-8 sm:py-10 lg:py-12">
            <div className="absolute inset-0 bg-rose-100/70 opacity-30 shadow-[0px_4px_5.1px_0px_rgba(0,0,0,0.25)] pointer-events-none" aria-hidden />
            <div className="relative z-10 flex flex-wrap items-center justify-center lg:justify-center gap-6 lg:gap-8 w-full">
              <div className="flex flex-col justify-center w-full min-w-0 max-w-[480px]">
                <h2 className="text-stone-900 text-2xl sm:text-3xl lg:text-4xl font-light font-poppins uppercase tracking-widest leading-tight mb-2">
                  ¿Qué te apasiona?
                </h2>
                <p className="text-red-400 text-xl sm:text-2xl font-swanky font-normal tracking-wide leading-none origin-top-left -rotate-[2.31deg] mb-4 sm:mb-6">
                  Mi libro
                </p>
                <div className="text-justify text-black text-sm font-light font-poppins leading-7 mb-6 sm:mb-8">
                  Siempre me ha interesado entender el motor que mueve a las personas a hacer las cosas que hacen: algunos llaman a esto sentido de vida, otros &quot;propósito&quot; y otros &quot;pasión&quot;.
                  <br /><br />
                  El tema me interesa tanto, que escribí un libro sobre ello: <strong className="font-bold"><span className="block"></span><span className="block">&quot;¿Qué te apasiona?</span><span className="block">Al encuentro de tu pasión&quot;.</span></strong>
                </div>
                <Link
                  href="#libro"
                  className="inline-flex items-center justify-center w-28 h-8 bg-[#C58770] text-white text-sm font-medium font-poppins uppercase hover:bg-[#b07860] transition"
                >
                  Conocé más
                </Link>
              </div>
              {/* Imagen decorativa - al lado del texto, hace wrap si hace falta */}
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44">
                <Image
                  src="/images/07 2 (2).png"
                  alt=""
                  width={174}
                  height={174}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mi trabajo con líderes sociales */}
      <section className="relative py-24 bg-white">
        <div className="max-w-[1474px] mx-auto px-6">
          <h2 className="text-stone-900 text-4xl font-light font-poppins uppercase tracking-widest mb-8">
            MI TRABAJO CON LÍDERES SOCIALES
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-32 h-32 relative flex-shrink-0">
              <Image src="https://placehold.co/123x123" alt="" width={123} height={123} unoptimized />
            </div>
            <p className="text-stone-900 text-sm font-light font-poppins leading-7 max-w-[478px]">
              Como me moviliza mucho la desigualdad, he diseñado, implementado y medido el impacto individual y comunitario de programas de entrenamiento socioemocional con referentes y líderes sociales de barrios populares, especialmente en la ciudad de Buenos Aires y el conurbano, pero también en Córdoba y Santiago del Estero. Los programas buscan acelerar la transformación social contribuyendo a la formación de liderazgos sociales.
            </p>
          </div>
          <Link href="#lideres" className="inline-block mt-8 px-4 py-2 bg-orange-300 text-neutral-800 text-sm font-medium font-poppins leading-7 hover:bg-orange-400 transition">
            Leer más
          </Link>
        </div>
      </section>

      {/* Aprendizaje socioemocional */}
      <section className="relative py-24 bg-orange-300/25">
        <div className="max-w-[1474px] mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-yellow-600 text-4xl font-light font-poppins uppercase tracking-widest leading-tight mb-8">
              Aprendizaje socioemocional (ASE / SEL)
            </h2>
            <div className="w-28 h-28 relative mb-6">
              <Image src="https://placehold.co/118x118" alt="" width={118} height={118} unoptimized />
            </div>
            <p className="text-black text-sm font-light font-poppins leading-7 mb-4">
              El aprendizaje socioemocional marca la diferencia. Lo sabemos por las <span className="text-yellow-600 underline">investigaciones</span>, que demuestran que una educación que promueve el aprendizaje socioemocional tiene un impacto positivo en las habilidades, actitudes y comportamiento, en el rendimiento académico, el bienestar emocional, los vínculos y los climas de aula, entre otros.
            </p>
            <Link href="#ase" className="inline-block px-4 py-2 bg-orange-300 text-neutral-800 text-sm font-medium font-poppins hover:bg-orange-400 transition">
              Leer más
            </Link>
          </div>
          <div className="w-full max-w-[507px] aspect-square relative">
            <Image src="https://placehold.co/507x526" alt="ASE" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* Publicaciones y charlas */}
      <section className="relative py-24 bg-white">
        <div className="max-w-[1474px] mx-auto px-6">
          <p className="text-stone-700 text-2xl font-swanky mb-8 text-center">Publicaciones y charlas</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[["288x378"], ["262x378"], ["434x290"], ["456x294"], ["224x293"]].map(([size], i) => (
              <div key={i} className="relative aspect-[3/4] max-h-96">
                <Image src={`https://placehold.co/${size}`} alt="" fill className="object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative py-24 bg-red-400/30">
        <div className="max-w-[1474px] mx-auto px-6">
          <p className="text-red-400 text-xs font-medium font-poppins tracking-wide text-center mb-8">@Adela.Cavia</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative w-full max-w-[705px] aspect-[705/718]">
              <Image src="https://placehold.co/705x718" alt="Contacto" fill className="object-cover" unoptimized />
            </div>
            <div>
              <h2 className="text-red-400 text-3xl font-swanky tracking-wider mb-12">¡Enviame un mensaje!</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-black/70 text-base font-light font-poppins mb-2">Nombre y Apellido</label>
                  <div className="h-px w-full max-w-[462px] bg-[#C58770]" />
                </div>
                <div>
                  <label className="block text-black/70 text-base font-light font-poppins mb-2">E-mail</label>
                  <div className="h-px w-full max-w-[462px] bg-[#C58770]" />
                </div>
                <div>
                  <label className="block text-black/70 text-base font-light font-poppins mb-2">Mensaje</label>
                  <div className="h-px w-full max-w-[462px] bg-[#C58770]" />
                </div>
                <button type="submit" className="px-6 py-2 bg-red-400 text-white text-sm font-medium font-poppins uppercase hover:bg-red-500 transition">
                  enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full h-28 bg-red-400 flex flex-wrap items-center justify-center gap-8 md:gap-16 py-6 px-6">
        <a href="https://linkedin.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">Usuario Linkedin</a>
        <a href="https://instagram.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">@cuenta instagram</a>
        <a href="https://x.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">@cuenta X</a>
        <a href="https://facebook.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">cuenta facebook</a>
        <a href="mailto:contacto@example.com" className="text-orange-100 text-lg font-poppins hover:text-white transition">@mail</a>
      </footer>
    </div>
  );
}
