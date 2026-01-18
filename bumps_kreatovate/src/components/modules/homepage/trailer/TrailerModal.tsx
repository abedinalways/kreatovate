"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const TrailerModal = () => {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="absolute w-16 md:w-24 h-16 md:h-24 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/play2.png"
            alt="play button"
            fill
            className="absolute cursor-pointer"
          />
        </div>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="w-full max-w-4xl! h-fit bg-[#0F1016] border border-gray-800 p-0 overflow-hidden"
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          const video = videoRef.current;
          if (video) {
            video.play().catch(() => {});
          }
        }}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Trailer video</DialogTitle>
        </DialogHeader>

        <div className="relative w-full h-full rounded-2xl">
          <DialogClose asChild>
            <button
              className="absolute top-2 right-2 text-white bg-gray-800/50 hover:bg-gray-700 rounded-full p-2 transition z-20 cursor-pointer!"
              aria-label="Close"
              onClick={() => {
                const iframe = document.getElementById(
                  "trailer-yt"
                ) as HTMLIFrameElement;
                if (iframe) {
                  iframe.src = iframe.src; // reset to stop video
                }
              }}
            >
              <X size={20} />
            </button>
          </DialogClose>

          {/* YouTube Embed */}
          <iframe
            id="trailer-yt"
            className="w-full h-[400px] md:h-[500px]"
            src="https://www.youtube.com/embed/NA5kBWztleI?autoplay=1"
            title="Trailer Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrailerModal;
