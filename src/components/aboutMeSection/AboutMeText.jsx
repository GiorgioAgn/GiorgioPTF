import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">Chi sono?</h2>
      <p className="text-2xl">
      Sono Giorgio, studente di Ingegneria Informatica al Politecnico di Torino con una grande passione per il mondo IT. Mi piace andare oltre gli insegnamenti accademici, esplorando e ampliando le mie competenze prima di specializzarmi. Nel tempo libero do vita alle mie idee con progetti su Arduino e mi tengo aggiornato sulle ultime tecnologie del mondo dello sviluppo. La curiosità è il mio motore, e sono sempre alla ricerca di nuove sfide per crescere e migliorarmi come sviluppatore. Oltre alla tecnologia, sono una persona sportiva che ama la natura, in particolare la montagna, dove trovo energia e ispirazione per affrontare ogni nuova sfida.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          Alcuni progetti
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
