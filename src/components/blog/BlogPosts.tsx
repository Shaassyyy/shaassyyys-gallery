import BlogPostsData from '../../data/BlogPostsData'

const BlogPosts = () => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2  gap-2 mx-auto  justify-items-stretch overflow-hidden  w-10/12 mt-2">
      {BlogPostsData.reverse().map((post) => (
        <section className="grid grid-cols-1 gap-2 h-1/5" key={post.id}>
          <img
            src={post.src}
            alt={post.alt}
            className="w-full h-96 block object-cover cursor-pointer smooth-transition hover:opacity-80 smooth-transition"
          ></img>
          <h2 className="text-2xl uppercase text-black">{post.title}</h2>
          <p className="text-md">{post.snippet}</p>
        </section>
      ))}
    </section>
  )
}

export default BlogPosts
