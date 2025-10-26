"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMemo } from "react";

type VideoProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title?: string;
  src: string | null;
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;
};

const VideoModal = ({
  open,
  onOpenChange,
  title = "Video",
  src,
  poster,
  controls = true,
  autoPlay = true,
}: VideoProps) => {
  const isYouTubeOrVimeo = (url: string) => {
    try {
      const u = new URL(url);

      return /youtube\.com|youtu\.be|vimeo\.com/i.test(u.hostname);
    } catch {
      return false;
    }
  };

  const toYouTubeEmbed = (url: string) => {
    try {
      const u = new URL(url);

      if (u.hostname.includes("youtu.be")) {
        const id = u.pathname.slice(1);
        return `https://www.youtube.com/embed/${id}?autoplay=1`;
      }

      if (u.hostname.includes("youtube.com")) {
        const id = u.searchParams.get("v");
        if (id) return `https://www.youtube.com/embed/${id}?autoplay=1`;
      }
    } catch {}

    return url;
  };

  const toVimeoEmbed = (url: string) => {
    try {
      const u = new URL(url);

      const id = u.pathname.split("/").filter(Boolean).pop();
      if (id) return `https://player.vimeo.com/video/${id}?autoplay=1`;
    } catch {}
    return url;
  };

  const { isEmbed, embedSrc } = useMemo(() => {
    if (!src) return { isEmbed: false, embedSrc: null as string | null };
    if (isYouTubeOrVimeo(src)) {
      const isYT = /youtube\.com|youtu\.be/i.test(src);
      const embed = isYT ? toYouTubeEmbed(src) : toVimeoEmbed(src);
      return { isEmbed: true, embedSrc: embed };
    }
    return { isEmbed: false, embedSrc: src };
  }, [src]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl gap-3 p-0">
        <DialogHeader className="px-4 pt-4">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-4">
          <AspectRatio
            ratio={16 / 9}
            className="bg-black rounded-xl overflow-hidden"
          >
            {!!src && isEmbed && embedSrc && (
              <iframe
                key={embedSrc}
                src={embedSrc}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
                title={title}
              />
            )}

            {!!src && !isEmbed && (
              <video
                key={src}
                src={src}
                poster={poster}
                controls={controls}
                autoPlay={autoPlay}
                className="h-full w-full"
              />
            )}
          </AspectRatio>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
