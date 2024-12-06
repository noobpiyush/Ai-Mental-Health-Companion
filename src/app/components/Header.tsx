import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold text-gray-800">
              MindfulAI
            </Link>
          </li>
          <li className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-800">Features</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
            <Link href="/chat" className="text-gray-600 hover:text-gray-800">Chat</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

