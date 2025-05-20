import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PlayCircle,
  Box,
  BarChart2,
  MonitorSmartphone,
  Clock,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-white px-6 py-12 lg:px-20 space-y-16">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Actionable Results, <br /> Delivered Fast
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Helping busy people grow their brand and income online.
          </p>
          <Button className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white">
            Get Started
          </Button>
        </div>
        {/* Video Placeholder */}
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <PlayCircle className="w-14 h-14 text-gray-500" />
        </div>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-2 gap-10">
        {/** Service 1 */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <Box className="w-6 h-6 text-yellow-600" />
            <h3 className="text-xl font-semibold">
              Strategy & Brand Positioning
            </h3>
            <p className="text-muted-foreground">
              Develop a strong brand foundation and stand out in your niche.
            </p>
            <Button variant="outline">Learn More</Button>
          </CardContent>
        </Card>

        {/** Service 2 */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <BarChart2 className="w-6 h-6 text-yellow-600" />
            <h3 className="text-xl font-semibold">
              Content Management & Monetization
            </h3>
            <p className="text-muted-foreground">
              I handle your content so you can focus on your business.
            </p>
            <Button variant="outline">Learn More</Button>
          </CardContent>
        </Card>

        {/** Service 3 */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <MonitorSmartphone className="w-6 h-6 text-yellow-600" />
            <h3 className="text-xl font-semibold">UGC Creation</h3>
            <p className="text-muted-foreground">
              Authentic, engaging content that drives conversions.
            </p>
            <Button variant="outline">Learn More</Button>
          </CardContent>
        </Card>

        {/** Service 4 */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <Clock className="w-6 h-6 text-yellow-600" />
            <h3 className="text-xl font-semibold">
              Fast Results for Busy Creators
            </h3>
            <p className="text-muted-foreground">
              Get tangible outcomes without wasting any time.
            </p>
            <Button variant="outline">Learn More</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
