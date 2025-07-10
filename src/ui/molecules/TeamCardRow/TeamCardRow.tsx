import Image from "next/image";

import { Row, Text } from "@/ui/atoms";

import { TeamCardRowProps } from "./types";

const TeamCardRow: React.FC<TeamCardRowProps> = ({
  index,
  name,
  universityTag,
  points,
  imageUrl,
  matchesCount,
  advancedScores,
  shouldDisplayAdvancedScores,
  isNew,
  variation,
}) => (
  <>
    <Row className="items-center justify-between gap-4 bg-slate-800 px-2 py-1 w-full rounded-md hover:bg-slate-700 transition-colors duration-300">
      <Row className="items-center gap-2">
        <div className="w-3 py-0.25 bg-sky-700 rounded-sm flex items-center justify-center sm:w-4">
          <Text variant="bodySmall" bold>
            {index}
          </Text>
        </div>

        <div className="w-4 py-0.25 flex items-center justify-center">
          {isNew ? (
            <Text variant="bodyXXSmall" className="text-sky-400">
              NOVO
            </Text>
          ) : variation !== 0 ? (
            <Text
              variant="bodySmall"
              bold
              className={variation > 0 ? "text-green-500" : "text-red-500"}
            >
              {variation > 0 ? "+" : ""}
              {variation}
            </Text>
          ) : (
            <Text variant="bodySmall" bold>
              -
            </Text>
          )}
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
        <Text variant="bodyLarge">{points.toFixed(2)}</Text>
      </Row>
    </Row>

    {shouldDisplayAdvancedScores && (
      <Row className="w-full px-2">
        <Row className="w-full bg-slate-700 px-2 py-0.5 rounded-b-md">
          <Row className="gap-1 w-full flex-wrap hidden xl:flex">
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
        </Row>
      </Row>
    )}
  </>
);

export default TeamCardRow;
