import "./globals.css";

export const metadata = {
  title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, and burnout therapy for adults, in person and via secure telehealth across California.",
  keywords: [
    "anxiety therapy Santa Monica",
    "trauma therapist Santa Monica CA",
    "EMDR Santa Monica",
    "burnout counseling Santa Monica",
    "clinical psychologist Santa Monica",
    "telehealth therapy California",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}