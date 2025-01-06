"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllPosts } from "@/lib/wordpress";
import { extractImageURL } from "@/removeHTML";

const HomeCards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="mt-10 flex justify-center">
      <div className="flex justify-center gap-4 flex-wrap">
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.id} passHref>
            <Card className="w-[350px] h-[400px] flex flex-col justify-between overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{post.title.rendered}</CardTitle>
                <CardDescription>
                  {post.excerpt.rendered && (
                    <div
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      className="text-gray-600"
                    ></div>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex justify-center items-center overflow-hidden">
                {extractImageURL(post.content.rendered) && (
                  <div className="w-full h-[200px] flex justify-center items-center">
                    <img
                      src={extractImageURL(post.content.rendered)}
                      alt="Page Content"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
