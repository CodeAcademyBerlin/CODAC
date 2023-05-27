// const gridStyles = {
// linear-gradient(#38bcc1 3px,transparent 3px),linear-gradient(left,#38bcc1 3px,transparent 3px)
//   backgroundImage:
//     "-webkit-linear-gradient(#38bcc1 3px, transparent 3px),-webkit-linear-gradient(left, #38bcc1 3px, transparent 3px)",
//   backgroundSize: "100px 100px, 100px 100px",
//   transform: "rotateX(85deg)",
// };
// const gridWrapperStyles = {
//   perspectiveOrigin: "50% 50%",
//   perspective: "180px",
// };
export const TronGrid = () => {
  return (
    <div className="perspective-o-50-50 perspective-180 absolute -z-10 h-full w-full">
      <div className="rotate-x-80 absolute bottom-[-35%] left-[-50%] h-[130%] w-[200%] animate-[planeMove_6s_linear_infinite] bg-[linear-gradient(#38bcc1_3px,transparent_3px)] bg-[length:100px_100px] bg-[-1px_-1px]">
        <div className="h-full w-full bg-[linear-gradient(#38bcc1_3px,transparent)]"></div>
      </div>
    </div>
  );
};
// width: 200%;
// height: 130%;
// position: absolute;
// bottom: -35%;
// left: -50%;
// color: #38bcc1;
// background-image: -webkit-linear-gradient(#38bcc1 3px, transparent 3px),
//   -webkit-linear-gradient(left, #38bcc1 3px, transparent 3px);
// background-size: 100px 100px, 100px 100px;
// background-position: -1px -1px;
// transform: rotateX(85deg);
// animation: ${planeMove} 6s linear infinite;
// `;
// export const TronGridWrapper = styled("div")`
//   z-index: -1;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   margin: 0 auto;
//   perspective: 180px;
//   perspective-origin: 50% 50%;
// `;
// export const TronGrid = () => {
//   return (
//     <TronGridWrapper>
//       <Grid />
//     </TronGridWrapper>
//   );
// };
// interface TronGridProps {
//   skyline: boolean;
//   animate?: boolean;
//   grid: boolean;
// }
// export const TronGridBerlinSkyline = ({
//   skyline = false,
//   grid = false,
//   animate = true,
// }: TronGridProps) => {
//   return (
//     <TronGridWrapper>
//       {skyline && <BerlinSkyline />}
//       {grid && <Grid />}
//     </TronGridWrapper>
//   );
// };
