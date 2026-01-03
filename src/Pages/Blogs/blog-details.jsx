import React from "react";
import Blog1 from "../../assets/images/blog(1).webp";
import Blog2 from "../../assets/images/blog(2).webp";
import Blog3 from "../../assets/images/blog(3).webp";

const BlogPost = () => {
  const recentPostsWithImages = [
    { title: "We denounce with righteous", date: "January 21, 2020", image: Blog1 },
    { title: "Eget est lorem ipsum dolor", date: "January 21, 2020", image: Blog2 },
    { title: "Feugiat in ante metus", date: "January 21, 2020", image: Blog3 },
  ];

  const checklistItems = [
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui",
    "Blanditiis praesentium voluptatum deleniti atque corrupti quos",
    "Dolores et quas molestias excepturi sint occaecati cupiditate non",
    "Provident, similique sunt in culpa qui officia deserunt mollitia",
    "Animi, id est laborum et dolorum fuga. Et harum quidem rerum",
    "Facilis est et expedita distinctio. Nam libero tempore, cum soluta",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-2/3">
            {/* Hero Image */}
           <div className="w-full mb-6 rounded-xl overflow-hidden">
  <img
    src={Blog1}
    alt="Blog post hero"
    className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover"
  />
</div>

            {/* Post Meta */}
            <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Developer
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                January 21, 2020
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                6 Comments
              </span>
            </div>

            {/* Post Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              We denounce with righteous indignation and dislike
            </h1>

            {/* Post Content */}
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-600 mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-blue-600 pl-6 py-2 mb-6 italic text-gray-600 bg-gray-50">
              "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            </blockquote>

            <p className="text-gray-600 mb-6">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>

            {/* During this program section */}
            <h3 className="text-xl font-semibold text-gray-900 mb-4">During this program, you will:</h3>
            <ul className="space-y-3 mb-8">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            
            {/* Leave a Reply */}
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Leave a Reply</h3>
            <div className="bg-white border border-gray-200 rounded p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="text" placeholder="Website" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <textarea placeholder="Message" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[150px] mb-4" />
              <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors">
                POST COMMENT
              </button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            {/* Search */}
            <div className="bg-white border border-gray-200 rounded p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Search</h4>
              <div className="flex">
                <input type="text" placeholder="Search..." className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recent Posts with Images */}
            <div className="bg-white border border-gray-200 rounded p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Recent Posts</h4>
              <ul className="space-y-3">
                {recentPostsWithImages.map((post, index) => (
                  <li key={index} className="flex gap-3 border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                    <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded flex-shrink-0" />
                    <div>
                      <a href="#" className="text-gray-900 hover:text-blue-600 text-sm font-medium line-clamp-2">{post.title}</a>
                      <p className="text-gray-500 text-xs mt-1">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
