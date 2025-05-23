import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'EventSphere',
  description: 'Explore and book international events',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-cream text-dark flex flex-col min-h-screen">
          <div className="flex flex-1">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}