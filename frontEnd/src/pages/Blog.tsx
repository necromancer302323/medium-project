import { useParams } from "react-router-dom";
import { useBlog } from "../Hooks";
import { FullBlog } from "../components/FullBlog";
import {  FullBlogSkeleton } from "../components/BlogSkeleton";
import { AppBar } from "../components/appBar";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading) {
    return (
        <div>
            <AppBar/>
      <div>
        <FullBlogSkeleton/>
        <FullBlogSkeleton/>
        <FullBlogSkeleton/>
      </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
