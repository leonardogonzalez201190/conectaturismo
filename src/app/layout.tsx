import { Montserrat, Titillium_Web } from "next/font/google";
import Providers from "./providers"
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const titillium_web = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: "300",
});

export const metadata = {
  title: 'Conectaturismo',
  icons: {
    icon: '/favicon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${titillium_web.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
