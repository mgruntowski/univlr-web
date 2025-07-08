import { Text } from "@/ui/atoms";

const GlobalFooter: React.FC = () => (
  <footer className="flex flex-col items-center justify-center py-8">
    <Text variant="bodySmall" className="text-slate-400">
      calculations, api, and data collection by kmyzth
    </Text>

    <Text variant="bodySmall" className="text-slate-400">
      website by kick
    </Text>

    <Text variant="bodySmall" className="text-slate-400">
      matches by bagres universitários
    </Text>

    <Text variant="bodySmall" className="text-slate-400">
      (:
    </Text>
  </footer>
);

export default GlobalFooter;
