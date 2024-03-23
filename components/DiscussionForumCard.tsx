/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T33L6IpiCbO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Share2, HeartIcon, MessageSquareIcon,Eye } from "lucide-react"
import { create } from "domain"


interface DiscussionForumProps {
  name:string,
  description:string,
  likes:string,
  impressions:string,
  comments:string,
  createdAt: string,
}
export default function DiscussionForumCard({name,description,likes,impressions,comments,createdAt}:DiscussionForumProps) {
  return (
    <Card className="w-full mt-5 mx-auto">
      <CardContent className="flex flex-col p-4 space-y-4">
        <div className="flex space-x-4">
          <Link className="flex-shrink-0" href="#">
            <Avatar className="w-10 h-10 border">
              <AvatarImage alt="@divyamamgai" src="/placeholder-avatar.jpg" />
              <AvatarFallback>{name[0]}{name.split(' ')[1][0]}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1">
            <div className="flex items-center space-x-2 text-sm">
              <Link className="font-semibold hover:underline dark:hover:underline" href="#">
                {name}
              </Link>
              <time className="text-sm text-gray-500 dark:text-gray-400">{createdAt}</time>
            </div>
            <div className="text-base leading-snug">
            {description}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <Button variant='ghost'  className="py-1.5">
            <HeartIcon className="w-4 h-4 mr-1.5 -translate-y-0.5" />
            {likes}
          </Button>
          <Button  variant='ghost' className="py-1.5" >
            <MessageSquareIcon className="w-4 h-4 mr-1.5 -translate-y-0.5" />
            {comments}
          </Button>
          <Button  variant='ghost' className="py-1.5" >
            <Eye className="w-4 h-4 mr-1.5 -translate-y-0.5" />
            {impressions}
          </Button>
          <Button  variant='ghost' className="ml-auto font-semibold py-1.5">
            <Share2 className="w-4 h-4 mr-1.5 -translate-y-0.5" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


