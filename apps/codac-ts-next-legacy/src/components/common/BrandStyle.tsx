import {
  Box,
  Button,
  css,
  SxProps,
  Theme,
  Typography,
  TypographyPropsVariantOverrides,
} from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import { Variant } from "@mui/material/styles/createTypography";
import localFont from "@next/font/local";
import { FC, ReactNode } from "react";
// Font files can be colocated inside of `pages`
const codacFont = localFont({ src: "../../../public/fonts/codacA2.woff2" });

const neonLight = keyframes`
       0% {
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
  1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
    1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
        1px 30px 300px #38bcc1;
          }
       90% { 
           text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
  1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
    1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
        1px 30px 400px #38bcc1;
        }
    95% {
text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
        1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
        1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
        1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2);
        }
  100%{
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
    1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
    1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 500px #38bcc1;
      }
 `;

export const BrandText = styled(Typography)`
  /* font-size: 10rem; */
  text-align: center;
  font-family: CODAC;
  color: ${({ theme }) => theme.palette.primary.main};
`;
interface Props {
  children: ReactNode;
  sx: SxProps<Theme>;
  variant?: Variant | "inherit";
  depth?: boolean;
  neon?: boolean;
}

export const BrandTextWrapper = (props: Props) => {
  const { children, depth, neon, sx, variant } = props;
  const animation = (neon && `${neonLight} 2s linear infinite alternate-reverse;`) || ``;
  const textShadow =
    (depth &&
      !neon &&
      `1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
    1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
    1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 100px #38bcc1;`) ||
    ``;

  return (
    <Box className={codacFont.className} sx={{ animation, textShadow }}>
      <BrandText variant={variant} sx={sx}>
        {children}
      </BrandText>
    </Box>
  );
};
