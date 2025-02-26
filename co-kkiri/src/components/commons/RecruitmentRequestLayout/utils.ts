import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { CategoryList } from "@/types/categoryAndFilterTypes";
import { FieldErrors, FieldValues } from "react-hook-form";

// handleSubmit 조건 처리
export const validateFormData = (errors: FieldErrors<FieldValues>): boolean => {
  if (!errors.recruitEndAt && !errors.progressWay && !errors.positions && !errors.link) {
    return false;
  } else {
    return true;
  }
};
// index에 해당하는 옵션 식별
export const findOptionByValue = <ValueType, OptionType>(
  values: ValueType[],
  options: OptionType[],
  value: ValueType,
) => {
  const index = values.indexOf(value);
  return options[index];
};

// handleSubmit 요청 실패 처리
export const handleRecruitFail = (error: FieldErrors<FieldValues>) => {
  if (!validateFormData(error)) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// 모집 포지션 선택
export const handleSelectPosition = (
  position: string[],
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>,
): void => {
  setSelectedOptions((prevOptions) => ({
    ...prevOptions,
    positions: position,
  }));
};

// 기술스택 선택
export const handleSelectStack = (
  stacks: string[],
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>,
): void => {
  setSelectedOptions((prevOptions) => ({
    ...prevOptions,
    stacks: stacks,
  }));
};

// 모집 선택
export const handleSelectType = (
  type: CategoryList,
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>,
): void => {
  setSelectedOptions((prevOptions) => ({
    ...prevOptions,
    type: type,
  }));
};

// 비활성화 검사
export const isButtonDisabled = (title: string, content: string, isLoading: boolean): boolean => {
  if (
    title === "" ||
    content === "" ||
    content === "<p><br></p>" ||
    content === "<h1><br></h1>" ||
    content === "<h2><br></h2>" ||
    content === "<h3><br></h3>" ||
    isLoading === true
  ) {
    return true;
  } else {
    return false;
  }
};
