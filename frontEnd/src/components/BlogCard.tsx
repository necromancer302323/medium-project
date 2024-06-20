import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:number
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardProps) => {
  return (<Link to={`/blogs/${id}`}>
    <div className="border-b  border-slate-200  p-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex">
        <div className="flex justify-center flex-col  ">
        <Avatar name={authorName} size={10}/>
        </div>
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col ">
            {authorName}
        </div>
        <div className="flex justify-center flex-col pl-2 ">
        <Circle/>
        </div>
        <div className="pl-2 font-thin text-slate-400 text-sm flex justify-center flex-col ">
         {publishedDate}
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">
        {title}
        </div>
      <div className="text-md font-thin">
        {content.length>100?content.slice(0, 100) + "...":content}
        </div>
      <div className="text-slate-400 text-sm font-thin pt-2">
        {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
    </div>
    </Link>
  );
};

export function Circle(){
    return<div className="h-1 w-1 rounded-full bg-slate-600">

    </div>
}

export function Avatar({ name,size }: { name: string,
    size:number }) {
  return (
    
<div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

  );



}
