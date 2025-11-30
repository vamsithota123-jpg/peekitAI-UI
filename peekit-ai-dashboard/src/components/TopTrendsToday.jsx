import React from 'react'
import { 
  FiDownload, 
  FiBell, 
  FiUser,
  FiBookmark,
  FiGrid,
  FiChevronRight,
  FiHelpCircle
} from 'react-icons/fi'
import { 
  FaMountain,
  FaFire,
  FaArrowUp,
  FaSnowflake
} from 'react-icons/fa'

const TopTrendsToday = () => {
  const trendsData = [
    {
      source: 'Instagram',
      sourceIcon: '📷',
      hot: 'Relatable Student Exhaustion Meme',
      risingSoon: 'HYROX Pro Doubles Functional Fitness Competition',
      cold: 'Humorous Take on Delayed Friend Text Replies with Winter Aesthetic'
    },
    {
      source: 'Tiktok',
      sourceIcon: '🎵',
      hot: 'Daily Mail viral UK news video',
      risingSoon: 'steezytour London event viral video',
      cold: 'ellie.sz0 London trending lifestyle'
    },
    {
      source: 'X',
      sourceIcon: '𝕏',
      hot: '#Chelsea (football trending)',
      risingSoon: '#CurrysTechmas (UK retailer tech promotion)',
      cold: '#ManchesterUnited (football trending)'
    },
    {
      source: 'Youtube',
      sourceIcon: '▶️',
      hot: 'SIDEMEN VS 50 YOUTUBERS ULTIMATE HIDE & SEEK IN A MILITARY BASE',
      risingSoon: 'Can I Beat An F1 Driver?',
      cold: 'DIGGA - DPMO (UK drill/urban music)'
    },
    {
      source: 'Google News',
      sourceIcon: '📰',
      hot: 'Pay rise for millions as UK national minimum wage to rise (ITV News)',
      risingSoon: "Sir Richard Branson 'heartbroken' as wife Joan dies aged 80",
      cold: "Heathrow's plan for longer third runway chosen by government"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">👁️</span>
            </div>
            <span className="text-xl font-semibold">Peekit.ai</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg text-white">
              <FaMountain className="w-4 h-4" />
              <span>Trends</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition">
              <FiBookmark className="w-4 h-4" />
              <span>Alerts & Bookmarks</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition">
              <FiGrid className="w-4 h-4" />
              <span>My Dashboard</span>
            </button>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition">
              <FiDownload className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition">
              <FiBell className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition">
              <FiUser className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Buttons */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition">
            Browse All Trends
          </button>
          <span className="text-gray-400">Or</span>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition border border-gray-700">
            Keyword Search
          </button>
        </div>

        {/* Title Section */}
        <div className="flex items-center justify-center mb-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <h1 className="text-4xl font-bold mx-6 text-center">TOP TRENDS TODAY</h1>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          See which conversations are heating up, cooling down, or about to take off - with Hot, Cold and Rising Soon topic insights.
        </p>

        {/* Trends Table */}
        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 bg-gray-800">
            <div className="col-span-3 font-semibold text-gray-300">SOURCE</div>
            <div className="col-span-3 flex items-center space-x-2 font-semibold text-gray-300">
              <FaFire className="w-4 h-4 text-red-500" />
              <span>HOT</span>
            </div>
            <div className="col-span-3 flex items-center space-x-2 font-semibold text-gray-300">
              <FaArrowUp className="w-4 h-4 text-yellow-500" />
              <span>RISING SOON</span>
            </div>
            <div className="col-span-3 flex items-center space-x-2 font-semibold text-gray-300">
              <FaSnowflake className="w-4 h-4 text-blue-500" />
              <span>COLD</span>
            </div>
          </div>

          {/* Table Rows */}
          {trendsData.map((trend, index) => (
            <div 
              key={index} 
              className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 hover:bg-gray-700/50 transition last:border-b-0"
            >
              {/* Source */}
              <div className="col-span-3 flex items-center space-x-2">
                <span className="text-2xl">{trend.sourceIcon}</span>
                <span className="font-medium">{trend.source}</span>
              </div>

              {/* Hot */}
              <div className="col-span-3 flex items-center justify-between group cursor-pointer">
                <span className="text-sm text-gray-300 group-hover:text-white transition truncate pr-2">
                  {trend.hot}
                </span>
                <FiChevronRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition flex-shrink-0" />
              </div>

              {/* Rising Soon */}
              <div className="col-span-3 flex items-center justify-between group cursor-pointer">
                <span className="text-sm text-gray-300 group-hover:text-white transition truncate pr-2">
                  {trend.risingSoon}
                </span>
                <FiChevronRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition flex-shrink-0" />
              </div>

              {/* Cold */}
              <div className="col-span-3 flex items-center justify-between group cursor-pointer">
                <span className="text-sm text-gray-300 group-hover:text-white transition truncate pr-2">
                  {trend.cold}
                </span>
                <FiChevronRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Help Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition">
        <FiHelpCircle className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}

export default TopTrendsToday

