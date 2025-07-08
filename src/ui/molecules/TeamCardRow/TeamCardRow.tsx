import Image from "next/image";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Row, Text } from "@/ui/atoms";

import { TeamCardRowProps } from "./types";

const TeamCardRow: React.FC<TeamCardRowProps> = ({
  index,
  name,
  universityTag,
  points,
  imageUrl,
  matchesCount,
  isOpen,
  isCollapsible,
  advancedScores,
  shouldDisplayAdvancedScores,
}) => (
  <Row className="items-center justify-between gap-4 bg-slate-800 px-2 py-1 w-full rounded-md hover:bg-slate-700 transition-colors duration-300">
    <Row className="items-center gap-2">
      <div className="w-3 py-0.25 bg-sky-700 rounded-sm flex items-center justify-center sm:w-4">
        <Text variant="bodySmall" bold>
          {index}
        </Text>
      </div>

      <div className="w-4 h-4 flex items-center justify-center sm:w-6 sm:h-6">
        <Image
          src={imageUrl}
          alt={name}
          width={48}
          height={48}
          className="object-contain w-4 h-4 sm:w-6 sm:h-6"
        />
      </div>

      <div>
        <Row className="items-center gap-1">
          <Text variant="bodyLarge" className="text-nowrap">
            {name}
          </Text>
          <Text
            variant="bodySmall"
            className="text-slate-400 hidden text-nowrap sm:block"
          >
            ({matchesCount} {matchesCount === 1 ? "partida" : "partidas"})
          </Text>
        </Row>
        <Text variant="bodySmall" className="text-slate-400">
          {universityTag}
        </Text>
      </div>
    </Row>

    <Row className="gap-2 items-center">
      <div className="flex flex-col items-end">
        <Text variant="bodyLarge">{points.toFixed(2)}</Text>

        {shouldDisplayAdvancedScores && (
          <Row className="gap-1 w-full justify-end flex-wrap hidden xl:flex">
            <Text variant="bodyXSmall">
              r_colley: {advancedScores?.colley.toFixed(2)}
            </Text>
            <Text variant="bodyXSmall">
              r_massey: {advancedScores?.massey.toFixed(2)}
            </Text>
            <Text variant="bodyXSmall">
              r_elo_final: {advancedScores?.elo.toFixed(2)}
            </Text>
            <Text variant="bodyXSmall">
              r_elo_mov: {advancedScores?.elo_mov.toFixed(2)}
            </Text>
            <Text variant="bodyXSmall">
              ts_score: {advancedScores?.trueskill.toFixed(2)}
            </Text>
            <Text variant="bodyXSmall">
              r_pagerank: {advancedScores?.pagerank.toFixed(2)}
            </Text>
            <Text variant="bodyXSmall">
              r_bt_pois: {advancedScores?.bradley_terry.toFixed(2)}
            </Text>
            <Text variant="bodyXSmall">
              sos_score: {advancedScores?.sos.toFixed(2)}
            </Text>
            <Text variant="bodyXSmall">
              consistency: {advancedScores?.consistency.toFixed(2)}
            </Text>
            <Text variant="bodyXSmall">
              pca_score: {advancedScores?.pca.toFixed(2)}
            </Text>
          </Row>
        )}
      </div>

      {isCollapsible && (
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      )}
    </Row>
  </Row>
);

export default TeamCardRow;
