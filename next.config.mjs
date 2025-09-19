/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghtshibgwaanemolxorv.supabase.co",
      },
    ],
  },
  // 456 video: ეს გამოიყენება რომ მთელი აპლიკაცია იყოს სტატიკური, generateStaticParams-ს ეს ფუნქცია რომელიც გაწერილია [cabinId]
  // ეუბნება რომ სტატიკურზე (html გვერდებად)გადაიყვანოს build-ის პროცესის დროს.
  // output: "export",
};

export default nextConfig;
