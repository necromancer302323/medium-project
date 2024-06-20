import { useBlogs } from "../Hooks";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { AppBar } from "../components/appBar";

export const Blogs = () => {
    const {loading,blogs}=useBlogs()
    if(loading){
        return<div>
        <AppBar />
        <div className="flex  justify-center">
          <div>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            </div>
        </div>
        </div>
    }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map(blog=><BlogCard
            title={blog.title}
            content={blog.content}
            publishedDate="10/9/2020"
            authorName={blog.author.name||"Anonymous"}
            id={blog.id}
          />)}
        </div>
      </div>
    </div>
  );
};
