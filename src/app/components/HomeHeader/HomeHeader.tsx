"use client";

import { useModals } from "@/providers/ModalProvider";
import { Text } from "@/ui/atoms";

import RatingDisclaimerModal from "../RatingDisclaimerModal";

type HomeHeaderProps = {
  lastUpdate: string;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ lastUpdate }) => {
  const { openModal, closeModal } = useModals();

  const openRatingDisclaimerModal = () => {
    openModal(
      "rating-disclaimer",
      <RatingDisclaimerModal closeModal={closeModal} />
    );
  };

  return (
    <header className="flex flex-col items-center justify-center py-4 sm:py-8 lg:py-10">
      <Text variant="titleLarge" bold className="text-center">
        Ranking Universitário de Valorant
      </Text>

      <Text
        variant="bodySmall"
        className="text-slate-300 text-center mt-1 mb-2"
      >
        Última atualização: {lastUpdate}
      </Text>

      <ul className="flex items-center justify-center gap-2 list-none">
        <li
          className="cursor-pointer hover:underline text-sky-400"
          onClick={openRatingDisclaimerModal}
        >
          <Text variant="bodyMedium" bold>
            Como é calculada a nota?
          </Text>
        </li>
      </ul>
    </header>
  );
};

export default HomeHeader;
