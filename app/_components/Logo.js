import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* Image შემოიმპორტება, სადაც ვაიმპორტებთ ასევე public-იდან logo-ს ამ დროს შეგვიძლია 
      ხარისხები განვსაზღვროთ პროცენტულობით, რაც ასევე მოქმედებს KB-ზე, ასევე აღარ მოგვთხოვს 
      მკაცრად height da width-ს როდესაც რესპონსივისთვის არ გვჭირდება */}
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        height={60}
        width={60}
        quality={100}
        alt="The Wild Oasis logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
