"use client";

import { useEffect, useState } from "react";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContentItem {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

type MediaType = "video" | "image";

const sampleMediaContent: Record<MediaType, MediaContentItem> = {
  video: {
    src: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    poster:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1280&q=80",
    background:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1920&q=80",
    title: "Immersive Storytelling Experience",
    date: "Cinematic Motion",
    scrollToExpand: "Scroll to reveal the full scene",
    about: {
      overview:
        "This version uses video to create a more cinematic first impression. As the layout expands, the media grows with the scroll and turns the hero into a controlled, immersive reveal.",
      conclusion:
        "It works well for launch pages, premium product reveals, and narrative-led sections where motion should feel deliberate instead of distracting. Switch between video and image to compare both treatments.",
    },
  },
  image: {
    src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&w=1280&q=80",
    background:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    title: "Dynamic Visual Narrative",
    date: "Editorial Reveal",
    scrollToExpand: "Scroll to reveal the full scene",
    about: {
      overview:
        "This version uses a single image and still delivers the same sense of progression. The expansion sequence makes static media feel more intentional, layered, and editorial.",
      conclusion:
        "Because the interaction stays the same across image and video modes, the component is flexible enough for premium landing pages, editorial showcases, and product storytelling.",
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: MediaType }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
        About This Experience
      </h2>
      <p className="mb-8 text-lg text-black dark:text-white">
        {currentMedia.about.overview}
      </p>

      <p className="mb-8 text-lg text-black dark:text-white">
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType: MediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event("resetSection"));
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType: MediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event("resetSection"));
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType: MediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event("resetSection"));
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType: MediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event("resetSection"));
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

const Demo = () => {
  const [mediaType, setMediaType] = useState<MediaType>("video");
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event("resetSection"));
  }, [mediaType]);

  return (
    <div className="min-h-screen">
      <div className="fixed right-4 top-4 z-50 flex gap-2">
        <button
          onClick={() => setMediaType("video")}
          className={`rounded-lg px-4 py-2 ${
            mediaType === "video"
              ? "bg-white text-black"
              : "border border-white/30 bg-black/50 text-white"
          }`}
        >
          Video Mode
        </button>

        <button
          onClick={() => setMediaType("image")}
          className={`rounded-lg px-4 py-2 ${
            mediaType === "image"
              ? "bg-white text-black"
              : "border border-white/30 bg-black/50 text-white"
          }`}
        >
          Image Mode
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === "video" ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export default Demo;
