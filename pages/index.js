import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I have a varied background in both in the computer industry and other
          fields. I have served over 7 years in the navy and then worked for
          over 15 years in a high-tech company that produces highly complex
          computer system for military use. Even though I didn't have an
          official computer education I was able to join the system engineering
          department and was involved in many highly complex projects. I have
          also a Bachelor degree in Law and I completed my PhD in German
          Philosophy. In recent years I have worked as a Tour Guide in the
          Berlin area but post COVID-19 I decided to go back to the field of
          computers. Over the last few months I have taught myself HTML, CSS,
          JavaScript, jQuery, Sass, React, Redux and more in order to find my
          way as a Frontend Developer. I am highly motivated, passionate about
          programing and system design and eager to learn new things.
        </p>
        <p>
          Go to{' '}
          <Link href="/posts/first-post">
            <a>First Post</a>
          </Link>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
