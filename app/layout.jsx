import "../src/index.css";
import { LanguageProvider } from "../src/app/language";
import { SiteLayout } from "../src/app/site-layout";

export const metadata = {
  title: "Carlos Leal Portfolio",
  description: "Portfolio de Carlos Leal, software developer y data analyst.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <SiteLayout>{children}</SiteLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
