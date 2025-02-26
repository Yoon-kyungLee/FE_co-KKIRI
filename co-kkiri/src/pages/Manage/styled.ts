import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import Detail from "@/components/domains/manage/Detail";
import Buttons from "@/components/domains/manage/Buttons";

const { mediaQueries, typography, color } = DESIGN_TOKEN;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 9.1rem 0;

  ${mediaQueries.mobile} {
    padding: 5.1rem 0;
  }
`;

export const Box = styled.div`
  row-gap: 3rem;
  display: grid;
  column-gap: 6rem;
  grid-template:
    "detail list"
    "button list";

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

export const LinkTitleWrapper = styled.div`
  ${typography.font16Bold}
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${color.gray[1]};
`;

export const Title = styled.div`
  ${typography.font24Bold}
  color: ${color.black[2]};
  width: 50rem;

  ${mediaQueries.tablet} {
    width: 32rem;
  }

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

export const DetailCard = styled(Detail)`
  grid-area: detail;
`;

export const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  grid-area: list;

  ${mediaQueries.mobile} {
    margin-top: 5rem;
  }
`;

export const ButtonSection = styled(Buttons)`
  grid-area: button;
`;
