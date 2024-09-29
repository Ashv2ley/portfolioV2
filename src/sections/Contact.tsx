import Link from "next/link";
import { SectionHeader } from "../components/SectionHeader";

export const ContactSection = () => {
  return (
    <div id="contact" className="container relative max-w-2xl mx-auto pb-32 md:pb-36 lg:pb-36 py-22 md:py-24 lg:py-24">
      <SectionHeader title="Contct Me" subtitle="Get in Touch" description={
          <> 
            Want to connect? Just shoot me an{" "}
            <Link href="mailto:example@example.com">
              <span className="text-white hover:underline">email</span> 
            </Link>
            {" "}and I&apos;ll respond as soon as possible.
          </>
        }
        />
    </div>
  );
};
