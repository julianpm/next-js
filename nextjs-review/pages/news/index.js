// our-domain.com/news

import Link from 'next/link';

function News() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-dope">NextJS Is Dope</Link>
        </li>
        <li>
          <Link href="/news/fooby-mooby">Fooby Mooby</Link>
        </li>
      </ul>
    </>
  );
}

export default News;
