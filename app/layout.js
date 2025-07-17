import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

// ფონტების შემოიმპორტება, სადაც body-ში მივანიჭე className-ით
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// metadata-ში %s განსაზღვრავს თითოეულ ფეიჯის სახელს, default რაც იქნება მთავარი გვერდი,
// description-ი არის SEO-სთვის, global-ში ჩაგდებულია icon.png რაც favicon-ს დააყენებს

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "Luxury Hotel near beautiful mountains and dark forest",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} antialiased bg-primary-900 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
