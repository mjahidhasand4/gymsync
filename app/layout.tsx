import "./globals.css";
import type { Metadata } from "next";
import { IChildren } from "@/types";
import { Toaster } from "sonner";
import { Providers } from "@/contexts";

export const metadata: Metadata = {
  title: "GymSync",
};

const RootLayout = ({ children }: Readonly<IChildren>) => {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
