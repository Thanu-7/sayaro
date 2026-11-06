import Image from "next/image";
import { cn } from "@/lib/utils";

const avatars = [
  { src: "/sites/resido/images/avatar-4.jpg", alt: "Team member" },
  { src: "/sites/resido/images/avatar-5.jpg", alt: "Team member" },
  { src: "/sites/resido/images/avatar-6.jpg", alt: "Team member" },
  { src: "/sites/resido/images/avatar-7.jpg", alt: "Team member" },
];

export function AvatarStack({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex -space-x-2", className)}>
      {avatars.map((avatar, i) => (
        <Image
          key={i}
          src={avatar.src}
          alt={avatar.alt}
          width={size}
          height={size}
          className="rounded-full border-2 border-white object-cover"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
