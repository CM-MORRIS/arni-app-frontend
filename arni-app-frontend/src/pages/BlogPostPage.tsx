import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from '../sanity/client';
import { PortableText } from '@portabletext/react';

interface BlogPost {
  title: string;
  publishedAt: string;
  imageUrl?: string;
  body?: any;
}

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!slug) return;

    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          publishedAt,
          body,
          "imageUrl": image.asset->url
        }`,
        { slug }
      )
      .then((data) => {
        console.log("Slug param:", slug);
        console.log("Fetched post:", data);
        setPost(data);
      })
      .catch(console.error);
  }, [slug]);

  if (!post) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg p-6">
          <Link
            to="/blog"
            className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ← Back to Blog
          </Link>
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full max-h-[400px] object-cover mb-6 rounded-xl shadow-md"
            />
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          <div className="prose max-w-none text-gray-800 prose-headings:text-blue-800">
            <PortableText value={post.body} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;