import { Text } from "@/ui/atoms";

type HomeHeaderProps = {
  lastUpdate: string;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ lastUpdate }) => (
  <div className="flex flex-col items-center justify-center py-4">
    <Text size="titleLarge" weight="bold" align="center">
      Ranking Universitário de Valorant
    </Text>

    <Text size="bodySmall" color="gray" align="center" mt="1" mb="2">
      Última atualização: {lastUpdate}
    </Text>
  </div>
);

export default HomeHeader;
