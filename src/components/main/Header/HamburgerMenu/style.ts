import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
export const MainButton = styled.button`
  background-color: #ff8a00;
  cursor: pointer;
  width: 100%;
  height: 64px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  line-height: 64px;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  :focus {
    outline: none;
  }
`;
export const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const MenuTextContainer = styled.ul`
  list-style: none;
  padding-top: 3vh;
  display: flex;
  flex-direction: column;
`;
export const MenuText = styled.li`
  font-size: 1.3rem;
  padding: 2.5vh 0;
  font-weight: 700;
`;
export const MenuTextLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const BottomButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  @media (max-height: 580px) {
    display: none;
  }
`;
export const LogoutButton = styled.button`
  color: #ff8a00;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  :focus {
    outline: none;
  }
  background-color: white;
`;
export const SignUpButton = styled(Link)`
  text-decoration: none;
  color: #ff8a00;
`;
