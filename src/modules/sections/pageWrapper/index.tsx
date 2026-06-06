import { AppShell, Box, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ReactNode, useEffect, useMemo } from "react";
import { Outlet } from "react-router-dom";

import Header from "../header";

// Redux
import ScrollToTop from "@common/scrollToTop";
import { AppDispatch } from "@global/store/store";
import {
  setIsBigTablet,
  setIsMobile,
  setIsSmallMobile,
  setIsTablet,
  setMainMargin,
} from "@global/store/uiSlice";
import { useDispatch } from "react-redux";

type PageWrapperProps = {
  /** Children to be rendered inside the PageWrapper */
  children?: ReactNode;
};

/**
 * PageWrapper component
 * @param {PageWrapperProps} props - Props for the PageWrapper component
 * @returns {JSX.Element}
 * This component is used to wrap the main content of the application.
 * It also pushes various UI-related flags into Redux.
 */
const PageWrapper = ({ children }: PageWrapperProps) => {
  const theme = useMantineTheme();
  const dispatch = useDispatch<AppDispatch>();

  // ----- MEDIA QUERY BOOLEANS -----
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isSmallMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const isBigTablet = useMediaQuery(`(max-width: ${theme.breakpoints.xl})`);

  const margin = useMemo(() => {
    if (isMobile) return "24px";
    if (isTablet) return "60px";
    return "100px";
  }, [isMobile, isTablet]);

  const gridCols = useMemo(() => {
    if (isTablet) return 1;
    if (isBigTablet) return 2;
    return 3;
  }, [isTablet, isBigTablet]);

  // Sync UI-related flags into Redux whenever any of these change
  useEffect(() => {
    dispatch(setIsMobile(isMobile));
    dispatch(setIsSmallMobile(isSmallMobile));
    dispatch(setIsTablet(isTablet));
    dispatch(setIsBigTablet(isBigTablet));
    dispatch(setMainMargin(margin));
  }, [
    dispatch,
    isMobile,
    isSmallMobile,
    isTablet,
    isBigTablet,
    gridCols,
    margin,
  ]);

  return (
    <>
      <ScrollToTop />
      <AppShell>
        <Header />
        <Box>
          {/* Sections own their horizontal spacing (full-bleed vs. mainMargin gutter) */}
          {children ?? <Outlet />}
        </Box>
      </AppShell>
    </>
  );
};

export default PageWrapper;
