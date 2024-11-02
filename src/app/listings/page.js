'use client'

import { useState } from 'react'

const Listings = () => {
  // Predefined art styles for filtering - can be expanded based on needs
  const artStyles = [
    "Oil Painting", "Watercolor", "Acrylic", "Digital Art", 
    "Contemporary", "Abstract", "Realism", "Impressionism",
    "Portrait", "Landscape", "Street Art", "Mixed Media"
  ]

  // Initial data structure with sample listings
  const sampleListings = [
    {
      id: 1,
      title: "Portrait Artist Needed for Gallery Commission",
      company: "Modern Arts Gallery",
      location: "New York, NY",
      type: "Contract",
      description: "Seeking an experienced portrait artist for a series of commissioned works. The selected artist will create a series of contemporary portraits for our upcoming exhibition 'Faces of Tomorrow'.",
      requirements: "5+ years experience in portrait art, strong portfolio required, experience with large-scale works",
      salary: "$5000 per piece",
      contactEmail: "gallery@modern.com",
      tags: ["Portrait", "Oil Painting", "Realism"],
      interestedCount: 3,
      datePosted: "2024-01-15"
    },
    {
      id: 2,
      title: "Mural Artist for Public Space Project",
      company: "City Arts Initiative",
      location: "Los Angeles, CA",
      type: "Freelance",
      description: "Large-scale mural project in downtown LA. Looking for an artist who can create an engaging piece that reflects the city's diverse culture and history.",
      requirements: "Experience with large-scale murals, ability to work outdoors, portfolio of previous public works",
      salary: "$15,000 - $20,000",
      contactEmail: "arts@cityproject.com",
      tags: ["Street Art", "Contemporary", "Mixed Media"],
      interestedCount: 7,
      datePosted: "2024-01-18"
    },
    {
      id: 3,
      title: "Digital Artist for NFT Collection",
      company: "CryptoArt Studios",
      location: "Remote",
      type: "Full-time",
      description: "Join our team creating unique digital art collections. You'll be working on innovative NFT projects and collaborating with international artists.",
      requirements: "Proficiency in digital art tools, understanding of NFT space, creative portfolio",
      salary: "$80,000/year",
      contactEmail: "jobs@cryptoart.com",
      tags: ["Digital Art", "Contemporary", "Abstract"],
      interestedCount: 12,
      datePosted: "2024-01-20"
    }
  ]

  // State management
  const [listings, setListings] = useState(sampleListings)
  const [showForm, setShowForm] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])

  // Handles incrementing the interest counter for a listing
  const handleInterested = (listingId) => {
    setListings(listings.map(listing => 
      listing.id === listingId 
        ? {...listing, interestedCount: listing.interestedCount + 1}
        : listing
    ))
  }

  // Formats the date to a readable string
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Art Job Listings</h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-teal px-6 py-2 text-white rounded-sm hover:bg-teal-700 transition-colors"
          >
            + New Listing
          </button>
        </div>

        {/* Tag Filtering Section */}
        <div className="mb-8 flex flex-wrap gap-2 bg-teal-50 p-4 rounded-lg shadow-sm">
          {artStyles.map(style => (
            <button
              key={style}
              onClick={() => setSelectedTags(
                selectedTags.includes(style)
                  ? selectedTags.filter(tag => tag !== style)
                  : [...selectedTags, style]
              )}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTags.includes(style)
                  ? 'bg-teal text-black'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid gap-6">
          {listings
            .filter(listing => 
              selectedTags.length === 0 || 
              listing.tags.some(tag => selectedTags.includes(tag))
            )
            .map(listing => (
            <div key={listing.id} className="bg-teal-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              {/* Listing Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{listing.title}</h2>
                  <p className="text-gray-600">{listing.company} • {listing.location}</p>
                  <p className="text-sm text-gray-500 mt-1">Posted on {formatDate(listing.datePosted)}</p>
                </div>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                  {listing.type}
                </span>
              </div>
              
              {/* Tag Display */}
              <div className="flex gap-2 mt-4">
                {listing.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Listing Details */}
              <p className="mt-4 text-gray-700">{listing.description}</p>
              
              <div className="mt-4 space-y-2 text-gray-700">
                <p><span className="font-semibold">Requirements:</span> {listing.requirements}</p>
                <p><span className="font-semibold">Salary:</span> {listing.salary}</p>
                <p><span className="font-semibold">Contact:</span> {listing.contactEmail}</p>
              </div>

              {/* Interest Section */}
              <div className="mt-6 flex justify-between items-center">
              <button
                  onClick={() => handleInterested(listing.id)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors"
                >
                  I'm Interested
                </button>
                <span className="text-gray-600">
                  {listing.interestedCount} {listing.interestedCount === 1 ? 'person' : 'people'} interested
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Listings
