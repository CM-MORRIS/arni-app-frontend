

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanity/client';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  imageUrl?: string;
  body?: any;
}

const BlogListPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...12] {
          _id,
          title,
          slug,
          publishedAt,
          "imageUrl": image.asset->url,
          body
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-800">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4 flex flex-col flex-grow">
              <Link
                to={`/blog/${post.slug.current}`}
                className="text-xl font-semibold text-blue-700 hover:underline mb-2"
              >
                {post.title}
              </Link>
              <p className="text-gray-500 text-sm mb-2">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700 flex-grow">
                {post.body && post.body.length > 0
                  ? post.body[0].children?.map((child: any) => child.text).join(' ').slice(0, 160) + "..."
                  : "No preview available."}
              </p>
              <div className="mt-4 text-center">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="inline-block px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-700 transition duration-200"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;