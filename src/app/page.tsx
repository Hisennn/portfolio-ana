import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projetos from "./_components/Projetos";
import Habilidades from "./_components/Habilidades";
import Formacao from "./_components/Formacao";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 min-w-[352px]">
      <div className="container mx-auto w-[95%] max-w-[1200px] p-2 md:p4 min-w-[352px] tracking-wide">
        <div className="h-24" /> {/* Espaço para o header */}
        <Header />
        <main className="flex flex-col gap-12 lg:gap-16">
          <Hero />
          <Projetos />
          <Habilidades />
          <Formacao />
          <Footer />          
        </main>
      </div>
    </div>
  );
}