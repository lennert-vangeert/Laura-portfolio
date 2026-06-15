import { Box } from "@mantine/core";
import { useSelector } from "react-redux";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandPinterest,
} from "@tabler/icons-react";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import styles from "./footer.module.css";

type FooterProps = {
  /** "big" adds the cream contact section above the navy bar; "normal" is just the bar. */
  variant?: "big" | "normal";
};

const CONTACTS = [
  {
    Icon: IconMail,
    label: "laura@lauravolkaert.be",
    href: "mailto:laura@lauravolkaert.be",
    external: false,
  },
  {
    Icon: IconBrandLinkedin,
    label: "Laura Volkaert",
    href: "https://linkedin.com/in/laura-volkaert-6b3593250",
    external: true,
  },
  {
    Icon: IconBrandPinterest,
    label: "lauravolkaert",
    href: "https://pinterest.com/lauravolkaert",
    external: true,
  },
];

const Footer = ({ variant = "normal" }: FooterProps) => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box component="footer" id="contact" className={styles.footer}>
      {variant === "big" && (
        <Box px={mainMargin} className={styles.contact}>
          <h2 className={styles.heading}>
            <span>{t("footer.heading1")}</span>
            <span className={styles.headingLine2}>{t("footer.heading2")}</span>
          </h2>

          <span className={styles.divider} aria-hidden="true" />

          <ul className={styles.links}>
            {CONTACTS.map(({ Icon, label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className={styles.contactLink}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon size={28} stroke={2} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Box>
      )}

      <Box px={mainMargin} className={styles.bar}>
        <p className={styles.copyright}>© {String(new Date().getFullYear())} - {t("footer.copyright")}</p>
        {/* <p className={styles.credit}>
          {t("footer.webDevBy")}{" "}
          <a
            href="https://lennertvg.be"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.creditLink}
          >
            lennertvg.be
          </a>
        </p> */}
      </Box>
    </Box>
  );
};

export default Footer;
