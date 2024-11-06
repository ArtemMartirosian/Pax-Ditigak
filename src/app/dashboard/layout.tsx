import { ClientSessionProvider } from "@/components/providers/ClientSessionProvider";
import { NextThemeProvider } from "@/components/providers/NextThemeProvider";
import { SonnerProvider } from "@/components/providers/SonnerProvider";
import { TanstackProvider } from "@/components/providers/TanstackProvider";
import { auth } from "@/auth";
import { Quicksand } from "next/font/google";
import { ReactNode } from "react";

const quicksand = Quicksand({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  const session = await auth();

  return (
    <ClientSessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body className={quicksand.className}>
          <TanstackProvider>
            <NextThemeProvider>{children}</NextThemeProvider>
            <SonnerProvider />
          </TanstackProvider>
        </body>
      </html>
    </ClientSessionProvider>
  );
}
