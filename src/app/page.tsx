import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projetos from "./_components/Projetos";
import Habilidades from "./_components/Habilidades";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth bg-gray-50">
      <div className="container mx-auto p-2 md:p4 min-w-[352px] tracking-wide">
        <Header />

        <main className="flex flex-col gap-12 lg:gap-16">
          <Hero />
          <Projetos />
          <Habilidades />
          <Footer />          
        </main>
      </div>
    </div>
  );
}