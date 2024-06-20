import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blogs {
  id: number;
  content: string;
  title: string;
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  async function FetchingBlogs() {
    const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setBlogs(res.data.blog);
    setLoading(false);
  }
  useEffect(() => {
    FetchingBlogs();
  }, []);
  return {
    loading,
    blogs,
  };
};
export interface Blog {
  id: number;
  content: string;
  title: string;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>({
    id: 1,
    content: "",
    title: "",
    author: {
      name: "",
    },
  });
  async function FetchingBlog() {
    const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    setBlog(res.data.blog);
    setLoading(false);
  }
  useEffect(() => {
    FetchingBlog();
  }, [id]);
  return {
    loading,
    blog,
  };
};
