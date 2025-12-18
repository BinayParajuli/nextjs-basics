import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({blog}) => {
  return (
  <Link to={`/blog/${blog.slug}`}>
    <div className="h-full max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
        <img className="w-full" src="https://static.vecteezy.com/system/resources/previews/041/166/062/large_2x/ai-generated-hawk-high-quality-image-free-photo.jpg"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blog.name}</div>
          <p className="text-gray-700 text-base">
            {blog.description}
          </p>
        </div>
        {/* <div className="flex justify-center items-center py-2 bg-amber-950">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div> */}
    </div>
  </Link>
  )
}

export default Card