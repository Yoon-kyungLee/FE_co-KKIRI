import { ROUTER_PATH } from "@/lib/path";
import * as S from "./SideBar.styled";
import { ICONS } from "@/constants/icons";
import { Link } from "react-router-dom";
import useSideBarStore from "@/stores/sideBarStore";
import { useWindowSize } from "usehooks-ts";
import Footer from "../Footer";
import { useFilterSetting } from "@/hooks/useFilterSetting";
import { listPageInitialFilter } from "@/constants/categoriesAndFilters";
import { useUserInfoStore } from "@/stores/userInfoStore";

interface SideBarListProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SideBarList({ onClick }: SideBarListProps) {
  const { HOME_PATH, STUDY_LIST_PATH, SCOUT, MY_STUDY, MY_PAGE } = ROUTER_PATH;
  const { userInfo } = useUserInfoStore();
  const { width: screenWidth } = useWindowSize();
  const isTabletOrMobile = screenWidth < 1200;

  const toggleSideBar = useSideBarStore((state) => state.toggleSideBar);
  const { getFilterAction } = useFilterSetting();

  const toggleSideBarInTabletOrMobile = () => {
    if (isTabletOrMobile) {
      toggleSideBar();
    }
  };

  const handleStudyListClick = () => {
    toggleSideBarInTabletOrMobile();
    getFilterAction("studyList", { category: "ALL", filters: listPageInitialFilter })();
  };

  const handleMyStudyClick = () => {
    toggleSideBarInTabletOrMobile();
    getFilterAction("myStudy", { category: "APPLIED" })();
  };

  return (
    <S.Container>
      <S.Box>
        <S.HamburgerMenuWrapper onClick={onClick}>
          <img src={ICONS.category.src} alt={ICONS.category.alt} />
        </S.HamburgerMenuWrapper>
        <S.CategoryBox>
          <S.CategoryWrapper>
            <Link to={HOME_PATH} onClick={toggleSideBarInTabletOrMobile}>
              <S.Category>홈</S.Category>
            </Link>
            <Link to={STUDY_LIST_PATH} onClick={handleStudyListClick}>
              <S.Category>스터디/프로젝트 찾기</S.Category>
            </Link>
            <Link to={SCOUT} onClick={toggleSideBarInTabletOrMobile}>
              <S.Category>스카우트</S.Category>
            </Link>
          </S.CategoryWrapper>
          <S.CategoryWrapper>
            {userInfo && (
              <Link to={MY_STUDY} onClick={handleMyStudyClick}>
                <S.Category>나의 스터디</S.Category>
              </Link>
            )}
            {userInfo && (
              <Link to={MY_PAGE} onClick={toggleSideBarInTabletOrMobile}>
                <S.Category>마이페이지</S.Category>
              </Link>
            )}
          </S.CategoryWrapper>
        </S.CategoryBox>
      </S.Box>
      <Footer />
    </S.Container>
  );
}
