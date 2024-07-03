import { useParams, Link } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const categoryName = "Programming"; // This should be fetched based on categoryId

  const discussions = [
    { id: 1, title: "Best programming languages in 2023", author: "John Doe", replies: 10, lastReply: "2023-10-01" },
    { id: 2, title: "How to get started with Python", author: "Jane Smith", replies: 5, lastReply: "2023-10-02" },
  ];

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">{categoryName}</h1>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">Discussions</h2>
        <div className="space-y-4 mt-4">
          {discussions.map((discussion) => (
            <Link
              key={discussion.id}
              to={`/discussion/${discussion.id}`}
              className="block p-4 border rounded-lg hover:bg-muted"
            >
              <h3 className="text-lg font-semibold">{discussion.title}</h3>
              <p className="text-sm text-muted-foreground">
                By {discussion.author} | {discussion.replies} replies | Last reply on {discussion.lastReply}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;