"use client";
import styled, { keyframes } from "styled-components";

const planeMove = keyframes`
    from {
        background-position: 0px 0px, 0px 0px;
      }
    to { 
        background-position: 0px 100px, 0px 0px;
    }
 `;

export const Grid = styled("div")`
  width: 200%;
  height: 130%;
  position: absolute;
  bottom: -35%;
  left: -50%;
  color: #38bcc1;
  background-image: -webkit-linear-gradient(#38bcc1 3px, transparent 3px),
    -webkit-linear-gradient(left, #38bcc1 3px, transparent 3px);
  background-size: 100px 100px, 100px 100px;
  background-position: -1px -1px;
  transform: rotateX(85deg);
  animation: ${planeMove} 3s linear infinite;
`;
export const TronGridWrapper = styled("div")`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto;
  perspective: 180px;
  perspective-origin: 50% 50%;
`;

export const TronGrid = () => {
  return (
    <TronGridWrapper>
      <Grid />
    </TronGridWrapper>
  );
};
