import { useParams } from "react-router-dom";

const Discussion = () => {
  const { discussionId } = useParams();
  const discussionTitle = "Best programming languages in 2023"; // This should be fetched based on discussionId

  const originalPost = {
    author: "John Doe",
    date: "2023-10-01",
    content: "What are the best programming languages to learn in 2023?",
  };

  const replies = [
    { id: 1, author: "Jane Smith", date: "2023-10-02", content: "I think Python and JavaScript are great choices." },
    { id: 2, author: "Alice Johnson", date: "2023-10-03", content: "Don't forget about Rust and Go!" },
  ];

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">{discussionTitle}</h1>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">Original Post</h2>
        <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground">
            By {originalPost.author} | Posted on {originalPost.date}
          </p>
          <p className="mt-2">{originalPost.content}</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Replies</h2>
        <div className="space-y-4 mt-4">
          {replies.map((reply) => (
            <div key={reply.id} className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground">
                By {reply.author} | Replied on {reply.date}
              </p>
              <p className="mt-2">{reply.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Add a Reply</h2>
        <form className="space-y-4 mt-4">
          <textarea
            className="w-full p-2 border rounded-lg"
            rows="4"
            placeholder="Write your reply here..."
          ></textarea>
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Discussion;