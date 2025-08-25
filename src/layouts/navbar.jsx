import CardNav from "../components/CardNav.jsx";
import logo from "/logo.svg";

const navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Me", ariaLabel: "About Me" },
        { label: "Education", ariaLabel: "About Careers" },
        { label: "Experience", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Websites", ariaLabel: "Featured Projects" },
        { label: "UI & UX", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Featured Projects" },

      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "GitHub", ariaLabel: "GitHub" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};
export default navbar;