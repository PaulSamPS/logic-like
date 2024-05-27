import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { AppProvider } from "@/shared/context/appContext";
import "./styles/globals.scss";

const nunito = Nunito({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "KidsTech - Обучение детей 5-12 лет",
  description:
    "KidsTech - обучаем детей 5-12 лет думать и использовать время за экраном с пользой.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
