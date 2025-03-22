// LocalizedLink.tsx
import { Link, LinkProps } from "react-router-dom";
import i18n from "@global/localization";

// We extend LinkProps so our component works just like a regular Link
const LocalizedLink = ({ to, ...props }: LinkProps) => {
  const lang = i18n.language;
  // Only prepend the language if the 'to' path starts with '/'
  const localizedTo =
    typeof to === "string" && to.startsWith("/") ? `/${lang}${to}` : to;
  return <Link to={localizedTo} {...props} />;
};

export default LocalizedLink;
