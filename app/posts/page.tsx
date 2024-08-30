import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/page";
const PostsPage = () => {
  const posts = [
    {
      id: 1,
      title: "Accusamus beatae ad facilis",
      thumbnailUrl:
        "https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg",
    },
    {
      id: 2,
      title: "Reperhenderit est deserunt ",
      thumbnailUrl:
        "https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg",
    },
    {
      id: 3,
      title: "Offcia porro iure  quỉra",
      thumbnailUrl:
        "https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg",
    },
    {
      id: 4,
      title: "Quisquam non quod",
      thumbnailUrl:
        "https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg",
    },
    {
      id: 5,
      title: "Autem molestias qui",
      thumbnailUrl:
        "https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg",
    },
    {
      id: 6,
      title: "Consequatur autem perferendis",
      thumbnailUrl:
        "https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg",
    },
  ];

  return (
    <>
      <h1>Products Page</h1>
      <Breadcrumbs></Breadcrumbs>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded shadow">
              <img
                src={post.thumbnailUrl}
                alt={post.title}
                className="w-full  object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold">{post.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsPage;
