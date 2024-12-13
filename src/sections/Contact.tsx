import Link from "next/link";
import { MoveUpRight } from "lucide-react"

export const ContactSection = () => {
  return (
      <div id="contact" className="py-10 md:py-20">
          <div className="container">
              <div className={"bg-gradient-to-r from-emerald-300 to-sky-400 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between"}>
                  <div className=" md:max-w-sm lg:max-w-md">
                      <h1 className={"font-calistoga text-center md:text-start text-black text-3xl md:text-4xl"}>Get in
                          Touch</h1>
                      <p className={"text-black text-center md:text-md md:text-start lg:text-lg mx-w-md mx-auto"}>
                          Want to connect? Just shoot me an{" "}
                          <Link href="mailto:ash.anyanwu@gmail.com">
                              <span className="text-black hover:underline font-bold">email</span>
                          </Link>
                          {" "}and I&apos;ll respond as soon as possible.
                      </p>
                  </div>
                  <Link href={"https://www.linkedin.com/in/ashley-anyanwu/"} className={"bg-black duration-500 transition-[max-width] w-[100%] max-w-[18%] hover:max-w-[20%] flex items-center justify-between p-3 px-5 rounded-lg my-5 gap-3 text-white"}>Contact Me<MoveUpRight size={14}/></Link>
              </div>
          </div>
      </div>

  )
      ;
};
