import { Inter } from 'next/font/google'
import '../public/css/globals.css';
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "Create my first project in Stream.",
  description: "This project is a Next.js scraper that aims to download the comments from a video.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Agregar aquí el enlace para el ícono que deseas usar */}
        <meta name="viewport" content="viewport-fit=cover width=device-width, initial-scale=1" />
        <link rel="icon" href="img/favicon.ico" />
      </head>
      <body className={`${inter.className} dark:bg-slate-800`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
