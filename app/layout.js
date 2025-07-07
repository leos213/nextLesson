import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Logo />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
