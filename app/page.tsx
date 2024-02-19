'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <>
      <section className="h-screen relative">
        <div className=" h-full absolute -z-10 w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <div className="absolute bottom-0 left-[-10%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(30,178,255,.2),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        <nav className="w-screen justify-between p-4 px-5 text-white absolute z-10 flex">
          <div className=" font-bold pt-2">Chase.</div>
          <ul className="flex text-xs hover:cursor-pointer justify-center items-center  space-x-6">
            <li className="">pricing</li>
            <li className="" onClick={()=> router.push('/pitch')}>pitch</li>
            <li className="">Documentation</li>
          </ul>
          <div>
            <Button>Login</Button>
          </div>
        </nav>
      </section>
    </>
  );
}
