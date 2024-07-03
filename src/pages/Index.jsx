import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    { id: 1, name: "Programming" },
    { id: 2, name: "Hardware" },
    { id: 3, name: "Software" },
    { id: 4, name: "AI" },
  ];

  const recentDiscussions = [
    { id: 1, title: "Best programming languages in 2023", author: "John Doe", replies: 10, lastReply: "2023-10-01" },
    { id: 2, title: "Latest trends in AI", author: "Jane Smith", replies: 5, lastReply: "2023-10-02" },
  ];

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Tech Forum</h1>
        <p className="text-lg text-muted-foreground">A place to discuss all things tech</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="block p-4 border rounded-lg hover:bg-muted"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Recent Discussions</h2>
        <div className="space-y-4 mt-4">
          {recentDiscussions.map((discussion) => (
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

export default Index;