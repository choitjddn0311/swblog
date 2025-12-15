import Button from "@/_components/common/button";
import { FaGithub, FaInstagram  } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import Link from "next/link";

const Home = () => {
  return (
    <div>
        <main className="w-full flex justify-center">
          <h1 className="text-4xl">안녕하세요. <span className="bg-cyan-300">무궁무진한 개발자</span>를 꿈꾸는 <span className="text-cyan-500">최성우</span>입니다!</h1>
          {/* <Button className="flex items-center"><Link href="https://github.com/choitjddn0311" className="flex gap-3 items-center"><FaGithub />My github</Link></Button>
          <Button className="flex items-center bg-emerald-400"><Link href="https://velog.io/@choitjddn0311/posts" className="flex gap-3 items-center"><SiVelog />My velog</Link></Button>
          <Button className="flex items-center bg-rose-400"><Link href="https://www.instagram.com/choitjddn31" className="flex gap-3 items-center"><FaInstagram />My instagram</Link></Button> */}
        </main>
        {/* mdx, https://nextjs.org/docs/app/getting-started/project-structure , https://velog.io/@hg024246/Next.js-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0%EC%99%80-%ED%99%9C%EC%9A%A9-%EC%A0%84%EB%9E%B5 */}
    </div>
  );
}

export default Home;