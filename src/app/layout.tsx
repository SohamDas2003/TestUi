
'use client';

import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <head>
      <style>
      @import url(&apos;https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap&apos;);
      </style>
    </head>
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
    </>
  );
}
