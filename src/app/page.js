import Image from 'next/image'
import styles from './page.module.css'
import Navigation from "@/components/navigation/Navigation"
import Entry from "@/components/entry/Entry"
import Footer from "@/components/footer/Footer"

export const dynamic = 'force-dynamic'

export default async function Home() {
  const response = await fetch(process.env.DOMAIN + "/api/posts", {
    method: "GET",
  })
  const { posts } = await response.json()
  console.log("my posts", posts)
  return (
    <div>
    <main>
      <Navigation />
       <h1>Blog</h1>
       {/* here comes the blog preview component */}
       {posts.map(post => <Entry key={post.id} headline={post.title} content={post.body} />)}
       <Entry headline="Meine Headline Eintrag #1" content="Hier ist mein Text" />
       <br />
       <Entry headline="Meine Headline Eintrag #2" content="mein content #2" />
       <br />
       <Entry headline="Meine Headline Eintrag #3" content="xyz" />
       <br />
       <Entry headline="Meine Headline Eintrag #4" content="xyz" />
       <br />
    </main>
    <Footer />
    </div>
  )
}
