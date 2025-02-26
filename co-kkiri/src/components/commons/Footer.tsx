import FOOTER_LINK from "@/constants/footerLink";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <LinkBox>
        {/* TODO: 노션 작성 후 링크 연결 */}
        <Link href={FOOTER_LINK.introduce} target="_blank" rel="noopener noreferrer">
          코끼리 소개
        </Link>
        <Link href={FOOTER_LINK.feedBack} target="_blank" rel="noopener noreferrer">
          사용자 피드백
        </Link>
        <Link href={FOOTER_LINK.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
      </LinkBox>
      <Organization>© 2024 CO-KKIRI</Organization>
    </Container>
  );
}

const { typography, color } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Link = styled.a`
  ${typography.font12Regular}
  color: ${color.black[3]}
`;

const Organization = styled.div`
  ${typography.font12Regular}
  color: ${color.black[3]}
`;
