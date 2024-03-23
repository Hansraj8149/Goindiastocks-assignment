import { CardContent, Card } from "@/components/ui/card";

interface MarketStoryProps {
  imageUrl: string;
  title: string;
  description: string;
}

const MarketStoriesCard: React.FC<MarketStoryProps> = ({ imageUrl, title, description }) => {
  return (
    <Card className="w-full mx-auto mt-5">
    <CardContent className="flex flex-col p-4 space-y-4">
      <div className=" space-x-4">
          <img
            alt="Image"
            className="rounded-t-lg object-cover"
            height={8}
            src={imageUrl}
            width={8}
          />
          <div className="p-6 grid gap-1">
            <h2 className="text-lg font-semibold leading-none">{title}</h2>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketStoriesCard;
