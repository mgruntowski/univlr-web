"use client";

import { Fragment, useState } from "react";

import Image from "next/image";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Row, Text } from "@/ui/atoms";

import MatchRow from "../MatchRow";

import { TeamCardRowProps } from "./types";

const TeamCardRow: React.FC<TeamCardRowProps> = ({
  index,
  name,
  university,
  points,
  imageUrl,
  matches,
  matchesCount,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen((open) => !open);
  };

  return (
    <li onClick={handleCollapse} className="cursor-pointer">
      <Row className="items-center justify-between gap-4 bg-slate-900 px-2 py-1 w-full">
        <Row className="items-center gap-2">
          <div className="w-4 py-0.25 bg-sky-700 rounded-sm flex items-center justify-center">
            <Text variant="bodySmall" bold>
              {index}
            </Text>
          </div>

          <div className="w-6 h-6 flex items-center justify-center">
            <Image
              src={imageUrl}
              alt={name}
              width={48}
              height={48}
              className="object-contain w-6 h-6"
            />
          </div>

          <div>
            <Text variant="bodyLarge">{name}</Text>
            <Text variant="bodySmall" className="text-slate-400">
              {university.toUpperCase()}
            </Text>
          </div>

          <Text variant="bodySmall" className="text-slate-400">
            ({matchesCount} {matchesCount === 1 ? "partida" : "partidas"})
          </Text>

          <Row className="gap-0.5">
            {matches.slice(0, 5).map((match) => (
              <Fragment key={match.id}>
                <div
                  className={`w-3 h-3 rounded-sm flex items-center justify-center ${
                    match.isVictory ? "bg-green-700" : "bg-red-700"
                  }`}
                >
                  <Text variant="bodyXSmall" bold>
                    {match.isVictory ? "V" : "D"}
                  </Text>
                </div>
              </Fragment>
            ))}
          </Row>
        </Row>

        <Row className="gap-2 items-center">
          <Text variant="bodyLarge">{points.toFixed(2)}</Text>

          <FontAwesomeIcon
            icon={faAngleDown}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Row>
      </Row>

      {isOpen && (
        <ul className="bg-slate-800 py-1 w-full flex flex-col gap-0.5">
          {matches.map((match) => (
            <MatchRow key={match.id} {...match} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TeamCardRow;
