import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vital Infrastructure",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
