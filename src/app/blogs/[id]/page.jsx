"use server"
import 'suneditor/dist/css/suneditor.min.css';
import { fetchData } from "@/helpers/api";
import { ArrowLeft, Calendar, Clock, Eye, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from 'date-fns';

export async function generateMetadata({ params }) {
  const paramtList = await params;
  const data = await fetchData("whitelabel/blogs?whitelabel=True_Fit&id=" + paramtList.id);

  if (!data) {
    return {
      title: "Blog Not Found",
      description: "The blog you're looking for does not exist or has been removed.",
    };
  }
  const [response] = data.data || []

  return {
    title: response.mtitle || "Blog Article",
    description: response.mdesc || "Read the latest blog article.",
    openGraph: {
      title: response.mtitle || "Blog Article",
      description: response.mdesc || "Read the latest blog article.",
      images: [
        {
          url: response.photo || "/blogs-hero.png",
          width: 800,
          height: 600,
          alt: response.mtitle || "Blog Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: response.mtitle || "Blog Article",
      description: response.mdesc || "Read the latest blog article.",
      images: [response.photo || "/blogs-hero.png"],
    },
    alternates: {
      canonical: `https://www.wellnessz.in/blogs/${paramtList.id}`
    },
  };
}

export default async function Page({ params }) {
  const paramtList = await params;
  const data = await fetchData("whitelabel/blogs?whitelabel=True_Fit&id=" + paramtList.id);

  const [blog] = data.data || []
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
        </div>
      </div>
    );
  }

  return <div className="min-h-screen bg-white">
    <header className="relative">
      <div className="relative h-[50vh] md:h-[80vh] overflow-hidden">
        <Image
          src={blog.photo}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-3 py-2 md:px-4 rounded-full hover:bg-white/30 transition-all duration-300 text-sm md:text-base"
          >
            <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            <span className="hidden sm:inline">Back to Blog</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 md:space-x-4 mb-3 md:mb-6">
              <span className="bg-[var(--accent-1)] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                {blog.category || <>New</>}
              </span>
              <span className="text-white/80 text-xs md:text-sm flex items-center">
                <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                {blog.readTime || <>8 Mins</>}
              </span>
              <span className="text-white/80 text-xs md:text-sm flex items-center">
                <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                2.4k views
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight">
              {blog.title}
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-4 md:mb-8 max-w-3xl leading-relaxed hidden sm:block">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </div>
    </header>

    {/* Article Content */}
    <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      {/* Author Info & Actions */}
      <div className="pb-4 flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 border-b border-gray-200 gap-4">
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
            {blog?.author?.charAt(0) || <>WZ</>}
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900">{blog.author}</h3>
            <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                {blog.date && <span>{format(new Date(blog.date), "MMM dd, yyyy")}</span>}
              </div>
              <span>•</span>
              <span>Wellness Expert</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-3 w-full md:w-auto justify-between md:justify-end">
          {/* <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${liked
              ? 'bg-red-100 text-red-600 shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            <Heart className={`w-3 h-3 md:w-4 md:h-4 ${liked ? 'fill-current' : ''}`} />
            <span className="text-xs md:text-sm font-medium">{liked ? '124' : '123'}</span>
          </button> */}

          {/* <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`p-2 rounded-full transition-all duration-300 ${bookmarked
              ? 'bg-blue-100 text-blue-600'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            <Bookmark className={`w-3 h-3 md:w-4 md:h-4 ${bookmarked ? 'fill-current' : ''}`} />
          </button> */}

          {/* <div className="flex items-center space-x-1 md:space-x-2 gap-2">
            <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
              <Twitter className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
              <Facebook className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
              <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
              <Share2 className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div> */}
        </div>
      </div>
      <div className="max-w-[768px] mx-auto">
        <article
          className="font-roboto mb-8 md:mb-16 sun-editor-editable [&_img]:object-contain [&_img]:max-h-[450px] font-medium "
          dangerouslySetInnerHTML={{ __html: blog?.body || "" }}
        />
      </div>
      <div className="border-t border-gray-200 pt-6 md:pt-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs md:text-sm font-medium text-gray-500">Tags:</span>
            <div className="flex flex-wrap gap-2">
              {blog?.categories?.map((category, index) => (
                <span
                  key={index}
                  className="px-2 py-1 md:px-3 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm hover:bg-[var(--accent-2)] hover:text-[var(--accent-3)] transition-colors cursor-pointer"
                >
                  #{category.name}
                </span>
              ))}
            </div>
          </div>

          {/* <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
              <span>12 comments</span>
            </div>
            <div className="flex items-center space-x-1">
              <Share2 className="w-3 h-3 md:w-4 md:h-4" />
              <span>45 shares</span>
            </div>
          </div> */}
        </div>
      </div>
    </main>

    {/* Related Articles */}
    {/* {relatedBlogs.length > 0 && (
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              You Might Also Like
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              More insights to help you grow your wellness practice
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <Link
                key={relatedBlog.id}
                href={`/blog/${relatedBlog.id}`}
                className="group block"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      width={600}
                      height={300}
                      className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="bg-[var(--accent-1)] text-white px-2 py-1 md:px-3 rounded-full text-xs md:text-sm font-semibold">
                        {relatedBlog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 group-hover:text-[var(--accent-1)] transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 mb-3 md:mb-4 line-clamp-2 leading-relaxed text-sm md:text-base">
                      {relatedBlog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                      <div className="flex items-center space-x-1 md:space-x-2">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] rounded-full flex items-center justify-center text-white font-semibold text-xs">
                          {relatedBlog.author.charAt(0)}
                        </div>
                        <span>{relatedBlog.author}</span>
                      </div>
                      <span>{relatedBlog.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )} */}
    {/* <Newsletter /> */}
  </div>
}
