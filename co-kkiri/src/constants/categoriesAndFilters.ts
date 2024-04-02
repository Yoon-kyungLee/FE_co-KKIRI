import { CategoryList, CategoryStudyStatus } from "@/types/categoryAndFilterTypes";

export type CategoryListFilter = "ALL" | CategoryList;

export const categoryListFilter: { [key in CategoryListFilter]: string } = {
  ALL: "전체",
  STUDY: "스터디",
  PROJECT: "프로젝트",
};

export const categoryStudyStatusFilter: { [key in CategoryStudyStatus]: string } = {
  APPLIED: "신청중",
  RECRUITING: "모집중",
  WAITING: "대기중",
  ON_GOING: "진행중",
  COMPLETED: "완료",
};

export const listPageInitialFilter = {
  stacks: [],
  position: "",
  progressWay: "",
  sortBy: "LATEST",
};
