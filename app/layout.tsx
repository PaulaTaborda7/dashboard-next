// This is necessary to make the CSS work in the browser.
import './ui/global.css';

import { montserrat } from './ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}> 
      {/* antialsed to improve the render */}
        {children}
      </body>
    </html>
  );
}
