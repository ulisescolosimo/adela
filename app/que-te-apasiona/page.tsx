
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function QueTeApasionaPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      <Header />

      <main className="pt-16">
        {/* HERO */}
        <section className="relative bg-[#F4DFD8] overflow-hidden">
          <div className="max-w-[1474px] mx-auto px-6 lg:px-[92px] py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <AnimatedSection direction="right">
                <h1 className="text-stone-900 text-4xl lg:text-6xl font-light font-poppins uppercase tracking-[0.16em] leading-tight mb-6">
                  ¿Qué te apasiona?
                </h1>

                <p className="text-stone-900 text-sm lg:text-base font-light font-poppins leading-7 max-w-[620px] mb-6">
                  Siempre me ha interesado entender el motor que mueve a las personas
                  a hacer las cosas que hacen: algunos llaman a esto sentido de vida,
                  otros propósito y otros pasión.
                </p>

                <p className="text-stone-900 text-sm lg:text-base font-light font-poppins leading-7 max-w-[620px] mb-8">
                  El tema me interesa tanto, que escribí un libro sobre ello:
                  “¿Qué te apasiona? Al encuentro de tu pasión”.
                </p>

                <a
                  href="https://www.galernaweb.com/productos/que-te-apasiona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-w-[120px] h-10 px-5 bg-[#C58770] text-white text-sm font-medium font-poppins uppercase hover:bg-[#b07860] transition"
                >
                  Comprar
                </a>
              </AnimatedSection>

              <AnimatedSection direction="left" className="relative">
                <div className="relative w-full max-w-[520px] aspect-[520/320] mx-auto">
                  <Image
                    src="/images/libro/book-hero.png"
                    alt="Libro ¿Qué te apasiona?"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white">
          <div className="max-w-[1474px] mx-auto px-6 lg:px-[92px] py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
              <AnimatedSection direction="right">
                <p className="text-stone-900 text-sm font-light font-poppins leading-7 mb-5">
                  No busco con este libro proponer una visión simplista de la pasión,
                  del tipo “la tienes o no la tienes”. Lo que ofrezco es un mapa,
                  un camino, una guía para intentar conectar con ella y recuperarla.
                </p>

                <p className="text-stone-900 text-sm font-light font-poppins leading-7 mb-5">
                  Descubrir lo que nos apasiona puede ser un camino muy directo y
                  llano para algunos, pero sinuoso y con vueltas para otros.
                </p>

                <p className="text-stone-900 text-sm font-light font-poppins leading-7">
                  Este libro es tu viaje; yo solo estoy para guiarte y compartir
                  algunos aprendizajes con la idea de que te los apropies,
                  los adaptes y los uses de la forma más personal posible.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="left">
                <div className="relative w-full aspect-[420/260]">
                  <Image
                    src="/images/libro/book-side.png"
                    alt="Libro"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* BLOQUE CENTRAL */}
        <section className="bg-[#F6F6F4]">
          <div className="max-w-[1100px] mx-auto px-6 py-16 text-center">
            <AnimatedSection>
              <h2 className="text-stone-900 text-3xl lg:text-5xl font-light font-poppins uppercase tracking-[0.16em] mb-4">
                Lo que te apasiona
              </h2>
              <p className="text-[#C58770] text-xl font-swanky mb-8">
                un viaje al centro de ti mismo
              </p>
              <p className="text-stone-900 text-sm font-light font-poppins leading-7 max-w-[760px] mx-auto">
                Deseo que este libro te inspire y pueda contribuir a tu transformación,
                la que necesites para ir descubriendo y poniendo en práctica lo que te apasiona.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* TEMAS DEL LIBRO */}
        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-stone-900 text-xl font-light font-poppins uppercase mb-6">
                    El libro plantea una aventura
                  </h3>
                  <div className="space-y-5 text-stone-900 text-sm font-light font-poppins leading-7">
                    <p><strong>Primera parte.</strong> Sobre la aventura de descubrir y hacer lo que te apasiona.</p>
                    <p><strong>Segunda parte.</strong> El método 3. El inicio del camino.</p>
                    <p><strong>Tercera parte.</strong> Conectar con la pasión.</p>
                  </div>
                </div>

                <div className="space-y-3 text-stone-900 text-sm font-light font-poppins leading-7">
                  <p>Formas de encontrar la pasión</p>
                  <p>(Re)encontrarnos con nuestra pasión</p>
                  <p>¿Seguir tu pasión o buscar tu pasión?</p>
                  <p>Mentores y guías</p>
                  <p>El impacto de tu pasión en los demás y en tu comunidad</p>
                  <p>Cómo usar este libro</p>
                  <p>Breve historia de la pasión</p>
                  <p>Reconectar con nuestra identidad profunda</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ACTIVIDAD 1 */}
        <section className="bg-[#F6F4EF]">
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
                <div>
                  <h3 className="text-[#C8A93A] text-3xl font-light font-poppins uppercase leading-tight">
                    Actividad 1
                  </h3>
                  <p className="text-stone-900 text-xl font-swanky mt-2">Visualización</p>
                </div>
                <div className="text-stone-900 text-sm font-light font-poppins leading-7 space-y-4">
                  <p>
                    En esta etapa del camino te propongo reconstruir y recuperar tus redes interiores.
                  </p>
                  <p>
                    Necesitas un momento de calma, silencio y paz.
                  </p>
                  <p>
                    Te invito a hacer una lista de las diez o quince personas que te inspiran.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ACTIVIDAD 2 */}
        <section className="bg-[#F2EEE6]">
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-[#C8A93A] text-4xl font-light font-poppins uppercase mb-6">
                    Actividad sobre tu universo emocional
                  </h3>

                  <div className="relative w-full max-w-[440px] aspect-[440/340] mb-8">
                    <Image
                      src="/images/libro/medidor-emocional.png"
                      alt="Medidor emocional"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center min-w-[130px] h-10 px-5 bg-[#C8A93A] text-white text-sm font-medium font-poppins uppercase"
                  >
                    Descargar
                  </a>
                </div>

                <div className="text-stone-900 text-sm font-light font-poppins leading-7 space-y-4">
                  <p>
                    Para identificar las emociones y los sentimientos que estamos experimentando
                    te propongo una herramienta llamada “Medidor emocional”.
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Reconoce lo que estás sintiendo.</li>
                    <li>Intenta entender con qué se conecta.</li>
                    <li>Valida esas emociones.</li>
                    <li>Busca herramientas para gestionarlas mejor.</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ACTIVIDAD 3 */}
        <section className="bg-[#ECEDEF]">
          <div className="max-w-[1200px] mx-auto px-6 py-16 text-center">
            <AnimatedSection>
              <p className="text-stone-700 text-xl font-swanky mb-3">
                Desarrollando nuestra regulación emocional
              </p>
              <h3 className="text-stone-900 text-3xl lg:text-5xl font-light font-poppins uppercase tracking-[0.12em] leading-tight mb-6">
                Del miedo y la frustración a la resiliencia y la esperanza
              </h3>
              <p className="text-stone-900 text-sm font-light font-poppins leading-7 max-w-[780px] mx-auto mb-10">
                Hemos llegado hasta este punto y nos parece importante hacer un reconocimiento.
              </p>

              <div className="relative w-full max-w-[760px] aspect-[760/460] mx-auto mb-8">
                <Image
                  src="/images/libro/diploma.png"
                  alt="Diploma de reconocimiento"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <a
                href="#"
                className="inline-flex items-center justify-center min-w-[180px] h-10 px-5 bg-[#C8A93A] text-white text-sm font-medium font-poppins uppercase"
              >
                Descargar diploma
              </a>
            </AnimatedSection>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
