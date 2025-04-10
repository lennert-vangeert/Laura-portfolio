import type {
  MantineBreakpointsValues,
  MantineThemeOverride,
} from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import type * as React from "react";

// Color information
// Change for each project
const colors = {
  text: "#FFFFFF",
  white: "#FFFFFF",
  black: "#000000",
  dark: "#293644",
  medium: "#6F7881",
  light: "#B9C2CC",
  mainBackground: "#293644", // background for mantine components
  backgroundTransparent: "transparent",
  warning: "#FFD676",
  default: {
    primary: "#0A78F2",
    hover: "#1562B7",
    focus: "#489DFC",
    active: "#048C8C",
    disabled: "#E0E7F0",
  },
};

const breakpoints: MantineBreakpointsValues = {
  xs: "20rem",
  sm: "36rem",
  md: "48rem",
  lg: "58.75rem",
  xl: "87.5rem",
};

// Distances between components.
const spacing: MantineBreakpointsValues = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
};

const borderRadii = {
  button: "4px",
  input: "4px", // All Mantine inputs, excluding checkboxes
};

const borderWidths = {
  buttonOutlineVariant: "2px", // Button when used in variant "outline"
  input: "1px", // All Mantine inputs, including checkboxes
};

// Theme
// /////

const theme: MantineThemeOverride = {
  // Colors
  ...{ primaryColor: "default", primaryShade: 5 }, // Sets --mantine-primary-color-X,
  white: colors.mainBackground, // Sets --mantine-color-white, --mantine-color-body
  black: colors.text, // Sets --mantine-color-black, --mantine-color-text
  colors: {
    default: [
      colors.default.disabled, // Shade 1 is used for subtle elements
      colors.default.hover, // Shade 2 is used for default, active NavLink components when hovered over
      "#FFFF03", // Shade 3 is unused. You should never see this color
      "#FFFF04", // Shade 4 is unused. You should never see this color
      colors.default.focus, // Shade 5 is used for focused elements
      colors.default.primary, // Shade 6 is 'default' for filled elements and outlines
      colors.default.hover, // Shade 7 is used for hover states of some elements
      colors.default.primary, // Shade 8 is used for hyperlinks
      "#FFFF05", // Shade 9 is unused. You should never see this color
      "#FFFF06", // Shade 10 is unused. You should never see this color
    ],
    error: [
      "#ffebee",
      "#fbd8da",
      "#edb0b3",
      "#df858a",
      "#d46167",
      "#cd4950",
      "#cb3d45",
      "#b42f36",
      "#a1262f",
      "#8e1c26",
    ],
    success: [
      "#f3faed",
      "#e8f0de",
      "#cfe1bc",
      "#b4cf97",
      "#9ec078",
      "#90b764",
      "#88b458",
      "#759e47",
      "#678c3e",
      "#567930",
    ],
  },
  // Typography
  fontFamily: "Roboto, sans-serif",
  fontSizes: {
    xs: "0.6875rem",
    sm: "0.875rem",
    md: "0.875rem",
    lg: "1rem",
    xl: "1.25rem",
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.5",
    lg: "1.6",
    xl: "1.65",
  },
  headings: {
    fontFamily: "Roboto Mono, monospace",
    textWrap: "wrap",
    sizes: {
      h1: {
        fontSize: "5rem",
        fontWeight: "100",
        lineHeight: "1.5",
      },
      h2: {
        fontSize: "3rem",
        fontWeight: "400",
        lineHeight: "1.5",
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: "100",
        lineHeight: "1.5",
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: "900",
        lineHeight: "1.5",
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: "900",
        lineHeight: "1.5",
      },
      h6: {
        fontSize: "1rem",
        fontWeight: "900",
        lineHeight: "1.5",
      },
    },
  },
  // Distances
  spacing,
  // Breakpoints
  breakpoints,
  // Other settings
  focusRing: "auto",
  defaultRadius: borderRadii.input,
  // Component-specific overrides
  components: {
    Input: {
      styles: {
        input: {
          borderWidth: borderWidths.input,
          borderColor: colors.light,
        },
        invalid: {
          color: "error",
        },
      },
    },
    Checkbox: {
      styles: {
        input: {
          borderWidth: borderWidths.input,
          borderColor: colors.medium,
        },
      },
    },
    Radio: {
      styles: {
        radio: {
          borderWidth: borderWidths.input,
          borderColor: colors.medium,
        },
      },
    },
    Button: {
      styles: {
        root: {
          borderRadius: borderRadii.button,
        },
        outline: {
          borderRadius: borderRadii.button,
          borderImage: borderWidths.buttonOutlineVariant,
        },
      },
    },
    Modal: {
      styles: {
        header: {
          left: 0,
          right: 0,
        },
        title: {
          fontWeight: "bold",
          fontSize: "1.375rem",
          lineHeight: "1.5",
        },
        body: {
          // There is some point at which it does not make sense to make the browser window smaller.
          // A horizontal scrollbar looks to me the only solution.
          minWidth: "15rem",
        },
      },
    },
    AppShell: {
      styles: {
        main: {
          // There is some point at which it does not make sense to make the browser window smaller.
          // A horizontal scrollbar looks to me the only solution.
          minWidth: breakpoints.xs,
        },
      },
    },
  },
};

type MantineStylesProps = {
  children: React.ReactNode;
};
export const MantineStyles = ({ children }: MantineStylesProps) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);
