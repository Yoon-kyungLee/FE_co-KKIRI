import { memberAddress } from "../address";
import { apiRequest } from "../axios";
import {
  MemberProfileApiResponseDto,
  MemberReviewListApiResponseDto,
  SearchedMemberProfileApiRequestDto,
  SearchedMemberProfileApiResponseDto,
} from "./type";

/** 유저 프로필 가져오기 */
export const getMemberProfile = (memberId: number): Promise<MemberProfileApiResponseDto> =>
  apiRequest("get", memberAddress.memberId(memberId));

/** 유저 프로필 검색
 *
 *@param {SearchedMemberProfileApiRequestDto}  qs  쿼리스트링을 객체로 받습니다.
 */
export const getSearchedMemberProfile = (
  qs: SearchedMemberProfileApiRequestDto,
): Promise<SearchedMemberProfileApiResponseDto> => apiRequest("get", memberAddress.search, null, qs);

/** 유저 리뷰 조회 */
export const getMemberReviewList = (memberId: number): Promise<MemberReviewListApiResponseDto> =>
  apiRequest("get", memberAddress.reviewList(memberId));
