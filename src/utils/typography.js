import Typography from "typography";

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.8,
  googleFonts: [
    {
      name: "Playfair Display SC",
      styles: ["400", "700"]
    },
    {
      name: "Lato",
      styles: ["300", "300i", "400", "700"]
    }
  ],
  headerFontFamily: ["Playfair Display SC", "serif"],
  bodyFontFamily: ["Lato", "Helvetica", "sans-serif"]
});

export default typography;
