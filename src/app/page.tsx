import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PlayCircle,
  Box,
  BarChart2,
  MonitorSmartphone,
  Clock,
} from "lucide-react";

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

const HOMEPAGE_QUERY = `*[_type == "homePage"][0] {
  heroHeading,
  heroSubtextOne,
  heroSubtextTwo,
  heroButtonText,
  "videoUrl": videoFile.asset->url,
  services[]{
    icon,
    title,
    summary,
    details
  }
}`;
const options = { next: { revalidate: 30 } };

// Icon map to match Sanity's icon string to actual Lucide icon component
const iconMap: Record<string, React.ReactNode> = {
  Box: <Box className="w-6 h-6 text-yellow-600" />,
  BarChart2: <BarChart2 className="w-6 h-6 text-yellow-600" />,
  MonitorSmartphone: <MonitorSmartphone className="w-6 h-6 text-yellow-600" />,
  Clock: <Clock className="w-6 h-6 text-yellow-600" />,
};

export default async function LandingPage() {
  const data = await client.fetch<SanityDocument>(HOMEPAGE_QUERY, {}, options);

  return (
    <div className="bg-white px-6 py-12 lg:px-20 space-y-16">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            {data.heroHeading}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            {data.heroSubtextOne}
          </p>
          <p className="text-muted-foreground mt-2 text-lg">
            {data.heroSubtextTwo}
          </p>
          <Button className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white">
            {data.heroButtonText}
          </Button>
        </div>

        {/* Video Section */}
        {/* Video Section */}
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
          {data?.videoUrl ? (
            <video
              controls
              className="w-full h-full rounded-lg object-cover"
              src={data.videoUrl}
            />
          ) : (
            <PlayCircle className="w-14 h-14 text-gray-500" />
          )}
        </div>

        {/* <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          {data.heroVideoUrl ? (
            <iframe
              src={data.heroVideoUrl}
              title="Intro Video"
              allow="autoplay; encrypted-media"
              className="w-full h-full rounded-lg"
            />
          ) : (
            <PlayCircle className="w-14 h-14 text-gray-500" />
          )}
        </div> */}
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-2 gap-10">
        {data.services?.map((service: any, index: number) => (
          <Card key={index}>
            <CardContent className="p-6 space-y-4">
              {iconMap[service.icon] ?? (
                <Box className="w-6 h-6 text-yellow-600" />
              )}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.summary}</p>
              <p className="text-sm text-gray-500">{service.details}</p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
