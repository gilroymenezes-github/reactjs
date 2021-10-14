import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/full">
          <a>Full chart</a>
        </Link>
      </li>
      <li>
        <Link href="/week">
          <a>Week chart</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home