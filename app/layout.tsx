import "./globals.css";
import type { Metadata } from "next";
import { IChildren } from "@/types";

export const metadata: Metadata = {
  title: "Gym Class Scheduling and Membership Management System Task",
};

const RootLayout = ({ children }: Readonly<IChildren>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;