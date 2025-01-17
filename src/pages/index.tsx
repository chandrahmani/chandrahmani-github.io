import { Inter } from "next/font/google";
import Profile from "@/components/profile/Profile";
import { MySkills } from "@/components/mySkills/MySkills";
import { Footer } from "@/components/shared/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Profile />
        <MySkills />
      </div>
      <Footer />
    </>
  );
}
