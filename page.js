import './globals.css';

export const metadata = {
  title: 'יד עוטפת | עכשיו זכותך לקבל',
  description: 'ליווי אישי ומקצועי במימוש זכויות לנפגעי פוסט טראומה בעקבות המלחמה.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
