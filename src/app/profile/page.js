'use client'

const ProfilePage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Profiles Directory</h1>
        <div className="grid gap-4">
          <a href="/profile/philiptonder" className="p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <img src="/starry-night.jpeg" alt="Philip Tonder" className="w-12 h-12 rounded-full" />
              <div>
                <h2 className="font-semibold">Philip Tonder</h2>
                <p className="text-gray-600">@philiptonder</p>
              </div>
            </div>
          </a>
          <a href="/profile/johndoe" className="p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <img src="https://t4.ftcdn.net/jpg/01/87/75/15/360_F_187751502_TrPkDYFA1MzKcJO9CWoDi2NgcCWqOCUi.jpg" alt="John Michael" className="w-12 h-12 rounded-full" />
              <div>
                <h2 className="font-semibold">John Michael</h2>
                <p className="text-gray-600">@johnmichael</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
