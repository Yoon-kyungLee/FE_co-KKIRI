import styled from "styled-components";
import SelectPositionChip from "@/components/commons/Chips/SelectPositionChip";
import { MemberReviewType, PostReviewType, ReviewType } from "@/lib/api/review/type";
import { EVALUATION_COMMENT } from "@/constants/evaluationChip";

export type Option = {
  label: string;
  value: unknown;
};
interface EvaluationPartProps {
  evaluationCategory: { [key: string]: string };
  selectedChips: MemberReviewType[] | PostReviewType[];
  onChange: (updatedOptions: MemberReviewType[] | PostReviewType[]) => void;
  selectedMemberId: number;
  type: "study" | "member";
}

export default function EvaluationPart({
  evaluationCategory,
  selectedChips = [],
  onChange,
  selectedMemberId,
  type,
}: EvaluationPartProps) {
  const onChipClick = (content: string) => {
    const isAlreadySelected = selectedChips?.some((option) => option.content === content);
    let updatedOptions;
    if (isAlreadySelected) {
      updatedOptions = selectedChips.filter((option) => option.content !== content);
    } else {
      if (type === "study") {
        updatedOptions = [...selectedChips, { content: content, type: reviewType(content) }];
      } else {
        updatedOptions = [
          ...selectedChips,
          { content: content, revieweeMemberId: selectedMemberId, type: reviewType(content) },
        ];
      }
    }
    onChange(updatedOptions);
  };

  const reviewType = (content: string): ReviewType => {
    if (
      Object.keys(EVALUATION_COMMENT.compliments.team).includes(content) ||
      Object.keys(EVALUATION_COMMENT.compliments.member).includes(content)
    ) {
      return "COMPLIMENT";
    }
    if (
      Object.keys(EVALUATION_COMMENT.improvements.team).includes(content) ||
      Object.keys(EVALUATION_COMMENT.improvements.member).includes(content)
    ) {
      return "IMPROVEMENT";
    }
    throw new Error("~");
  };

  return (
    <Box>
      {Object.entries(evaluationCategory).map(([key, value]) => (
        <SelectPositionChip
          key={key}
          label={value}
          isSelected={selectedChips.some((option) => option.content === key)}
          onClick={() => onChipClick(key)}
        />
      ))}
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
`;
