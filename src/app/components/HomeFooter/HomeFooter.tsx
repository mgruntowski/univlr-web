"use client";

import { useModals } from "@/providers/ModalProvider";
import { Text } from "@/ui/atoms";

import RatingDisclaimerModal from "../RatingDisclaimerModal";

const HomeFooter: React.FC = () => {
  const { openModal, closeModal } = useModals();

  const openRatingDisclaimerModal = () => {
    openModal(
      "rating-disclaimer",
      <RatingDisclaimerModal closeModal={closeModal} />
    );
  };

  return (
    <footer className="flex flex-col items-center justify-center py-8">
      <Text
        variant="bodySmall"
        className="text-slate-300 text-center mb-3 max-w-[1200px]"
      >
        Esse site tenta prever a força das equipes do cenário universitário de
        Valorant através de seus resultados nos campeonatos do cenário. Tudo não
        passa de uma tentativa de previsão feita por um algoritmo, e não
        necessariamente reflete a realidade da equipe. O algoritmo também não
        leva em consideração pontos importantes como quem foram os jogadores que
        jogaram as partidas, mapas, fases, etc...
        <br />
        <br />O site não possui nenhum objetivo em ofender ou elogiar nenhuma
        equipe, organização ou jogador. Todos os dados são obtidos através de
        cálculos e algoritmos e não possuem nenhum viés de opinião. Você pode
        conferir as métricas{" "}
        <span
          className="text-sky-400 cursor-pointer hover:underline"
          onClick={openRatingDisclaimerModal}
        >
          clicando aqui.
        </span>
      </Text>

      <Text variant="bodySmall" className="text-slate-400">
        calculations, api, and data collection by kmyzth
      </Text>

      <Text variant="bodySmall" className="text-slate-400">
        website by kick
      </Text>

      <Text variant="bodySmall" className="text-slate-400">
        (:
      </Text>
    </footer>
  );
};

export default HomeFooter;
