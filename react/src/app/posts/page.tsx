"use client";
import Axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold mb-6">Post List</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition duration-200">
            <Link
              href={`/post/${post.id}`}
              className="text-xl font-medium text-blue-600 hover:text-blue-800 transition duration-300"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
