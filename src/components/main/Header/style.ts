import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Container = styled.div`
  background-color: black;
  height: 47px;
  width: 100%;
`;
export const HeaderContents = styled.div`
  padding: 0px 1rem;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled(Link)`
  color: white;
  font-size: 22px;
  font-weight: 800;
  font-family: Gilroy;
  text-decoration: none;
`;
export const IconContainer = styled.div`
  vertical-align: middle;
  display: flex;
`;
export const HamburgerContainer = styled(motion.div)`
  min-width: 250px;
  width: 31%;
  min-height: 447px;
  height: 100%;
  background-color: white;
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.4em;
`;
export const MenuContent = styled.div`
  padding: 3vh 0 0 2vw;
`;
export const ProfileContainer = styled.div`
  padding-bottom: 3vh;
  display: flex;
  align-items: center;
`;
export const UserImg = styled.img`
  border-radius: 50%;
`;
export const NickName = styled.div`
  font-size: 1.3rem;
  padding-left: 2vw;
  font-weight: bold;
`;
export const OrangeButton = styled.div`
  background-color: #ff8a00;
  cursor: pointer;
  width: 100%;
  height: 64px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  line-height: 64px;
`;
export const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const MenuTextContainer = styled.div`
  padding-top: 3vh;
  display: flex;
  flex-direction: column;
`;
export const MenuText = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: black;
  padding: 2.5vh 0;
  font-weight: 700;
  font: Noto Sans KR;
`;
export const BottomButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  @media (max-height: 580px) {
    display: none;
  }
  color: #ff8a00;
  font-weight: 700;
  font: Noto Sans KR;
  font-size: 1rem;
  cursor: pointer;
`;
export const SignUpButton = styled(Link)`
  text-decoration: none;
  color: #ff8a00;
`;
