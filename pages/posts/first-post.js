import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
      <h1>[Hello, I'm TaeWan. I'm a freshman in the dept. of information systems at Hanyang University]</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}