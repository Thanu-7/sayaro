import Image from "next/image";
import { PillButton } from "./PillButton";

export function CEOCard() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <Image
          src="/sites/resido/images/avatar-ceo.jpg"
          alt="John, CEO of Sayaro"
          width={56}
          height={56}
          className="rounded-full object-cover"
        />
        <div>
          <h6 className="font-heading text-sm font-medium tracking-tight text-black">
            Hi, I&apos;m John, CEO of Sayaro
          </h6>
          <p className="text-sm text-neutral-500">Reach out anytime.</p>
        </div>
      </div>
      <PillButton href="/contact" variant="primary" className="ml-auto text-sm px-5 py-2.5">
        Ask Questions
      </PillButton>
    </div>
  );
}
