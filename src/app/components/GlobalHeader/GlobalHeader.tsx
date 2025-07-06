import { Row, Text } from "@/ui/atoms";
import { HeaderNav } from "@/ui/molecules";

import { NAV_ITEMS } from "./utils/constants";

const GlobalHeader: React.FC = () => {
  return (
    <header className="w-full mb-3 bg-slate-900 border-b-1 border-slate-800">
      <div className="flex items-center justify-between gap-2 max-w-[1200px] h-[60px] mx-auto">
        <Row className="items-center gap-8 h-full">
          <Text variant="titleSmall" bold>
            UniVLR
          </Text>

          <Row className="items-center gap-4 h-full">
            {NAV_ITEMS.map((item) => (
              <HeaderNav key={item.label} label={item.label} path={item.path} />
            ))}
          </Row>
        </Row>
      </div>
    </header>
  );
};

export default GlobalHeader;
