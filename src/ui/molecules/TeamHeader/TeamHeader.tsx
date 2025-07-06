import Image from "next/image";

import { Row, Text } from "@/ui/atoms";

import { TeamHeaderProps } from "./types";

const TeamHeader: React.FC<TeamHeaderProps> = ({
  name,
  tag,
  imageUrl,
  universityTag,
  university,
}) => {
  return (
    <div className="flex flex-col rounded-xl bg-slate-700">
      <div className="w-full h-[200px] relative overflow-hidden rounded-t-xl bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm bg-slate-900"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>

      <Row className="px-3 mt-[-100px] z-1 gap-3">
        <div className="flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width={200}
            height={200}
            className="min-w-[200px] min-h-[200px] object-contain"
          />
        </div>

        <div className="flex flex-col gap-1 py-3 mt-[100px]">
          <Row className="items-center">
            <Text variant="titleMedium" bold className="whitespace-pre">
              {name}{" "}
            </Text>

            <Text variant="titleMedium" className="text-slate-400">
              | {tag}
            </Text>
          </Row>

          <Text variant="bodyMedium">
            {universityTag} - {university}
          </Text>
        </div>
      </Row>
    </div>
  );
};

export default TeamHeader;
