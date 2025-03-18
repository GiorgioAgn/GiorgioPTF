import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Reply Ambassador",
    company: "Reply Spa",
    date: "2021 - Present",
    responsibilities: [
      "Sviluppo front-end e back-end.",
      "Partecipazione di workshop e webinar.",
      "Gestione eventi per studenti e networking",
      "Promozione del brand.",
    ],
  },
  {
    job: "Corso - Java Developer",
    company: "Experis & Opinno",
    date: "2023",
    responsibilities: [
      "Corso di 240 ore su Java (back-end e front-end",
      "Utilizzo di Spring, Maeven e Git per il versionamento",
      "Sviluppo di progretti in team",
      "Debuggin e testing",
    ],
  },
  {
    job: "Studente di Ingegneria Informatica",
    company: "Politecnico di Torino",
    date: "2023 - Present",
    responsibilities: [
      "Tra i corsi più importanti: Basi di dati (SQL), Programmazione a Oggetti(JAVA), Tecniche di programmazione (C)",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
