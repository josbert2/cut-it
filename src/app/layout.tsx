import "~/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Provider } from "~/components/provider";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} flex min-h-screen flex-col`}
      >
        <Provider>
          <Header />
          <main className="mx-auto max-w-5xl flex-1 px-4">{children}</main>
          <Footer />
        </Provider>
      </body>
      <Toaster theme="dark" position="bottom-center" richColors closeButton />
    </html>
  );
}
