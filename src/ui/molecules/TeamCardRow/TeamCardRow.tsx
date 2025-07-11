import Image from "next/image";

import { Card, Row, Text } from "@/ui/atoms";

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
    <Card isClickable>
      <Row
        justifyContent="between"
        alignItems="center"
        fullWidth
        gap="4"
        px="2"
        py="1"
      >
        <Row alignItems="center" gap="2">
          <div className="w-3 py-0.25 bg-accent rounded-sm flex items-center justify-center sm:w-4">
            <Text size="bodySmall" weight="bold">
              {index}
            </Text>
          </div>

          <div className="w-4 py-0.25 flex items-center justify-center">
            {isNew ? (
              <Text size="bodyXXSmall" color="accent">
                NOVO
              </Text>
            ) : variation !== 0 ? (
              <Text
                size="bodySmall"
                weight="bold"
                color={variation > 0 ? "success" : "error"}
              >
                {variation > 0 ? "+" : ""}
                {variation}
              </Text>
            ) : (
              <Text size="bodySmall" weight="bold">
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
            <Row alignItems="center" gap="1">
              <Text size="bodyLarge" className="text-nowrap">
                {name}
              </Text>
              <Text
                size="bodySmall"
                color="gray"
                className="hidden text-nowrap sm:block"
              >
                ({matchesCount} {matchesCount === 1 ? "partida" : "partidas"})
              </Text>
            </Row>
            <Text size="bodySmall" color="gray">
              {universityTag}
            </Text>
          </div>
        </Row>

        <Text size="bodyLarge">{points.toFixed(2)}</Text>
      </Row>
    </Card>

    {shouldDisplayAdvancedScores && (
      <Row fullWidth px="2" className="hidden xl:flex">
        <Row
          fullWidth
          px="2"
          py="0.5"
          gap="1"
          className="bg-slate-700 rounded-b-md"
        >
          <Text size="bodyXSmall">
            r_colley: {advancedScores?.colley.toFixed(2)}
          </Text>
          <Text size="bodyXSmall">
            r_massey: {advancedScores?.massey.toFixed(2)}
          </Text>
          <Text size="bodyXSmall">
            r_elo_final: {advancedScores?.elo.toFixed(2)}
          </Text>
          <Text size="bodyXSmall">
            r_elo_mov: {advancedScores?.elo_mov.toFixed(2)}
          </Text>
          <Text size="bodyXSmall">
            ts_score: {advancedScores?.trueskill.toFixed(2)}
          </Text>
          <Text size="bodyXSmall">
            r_pagerank: {advancedScores?.pagerank.toFixed(2)}
          </Text>
          <Text size="bodyXSmall">
            r_bt_pois: {advancedScores?.bradley_terry.toFixed(2)}
          </Text>
          <Text size="bodyXSmall">
            sos_score: {advancedScores?.sos.toFixed(2)}
          </Text>
          <Text size="bodyXSmall">
            consistency: {advancedScores?.consistency.toFixed(2)}
          </Text>
          <Text size="bodyXSmall">
            pca_score: {advancedScores?.pca.toFixed(2)}
          </Text>
        </Row>
      </Row>
    )}
  </>
);

export default TeamCardRow;
