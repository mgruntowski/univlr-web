"use client";

import { useMemo } from "react";

import Image from "next/image";

import { AgentsRowProps } from "./types";
import { orderAgentsByRole } from "./utils/functions";

const AgentsRow: React.FC<AgentsRowProps> = ({ agents, matchId }) => {
  const orderedAgents = useMemo(() => orderAgentsByRole(agents), [agents]);

  return (
    <>
      {orderedAgents.map((agent) => (
        <Image
          key={`${matchId}-${agent}`}
          src={`/images/agents/${agent}.png`}
          alt={agent ?? ""}
          width={24}
          height={24}
          className="object-contain w-3 h-3"
        />
      ))}
    </>
  );
};

export default AgentsRow;
