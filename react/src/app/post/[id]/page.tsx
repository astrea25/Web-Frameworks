"use client";

import { useParams } from 'next/navigation'; 
import Axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!post) {
    return <div className="p-6 text-center text-lg text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed mb-6">{post.body}</p>
      <Link href="/posts" className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium"> Back to Posts </Link>
    </div>
  );
}
