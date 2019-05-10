import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import getData from '../getData'

const Index = (props) => (
  <Layout>
    <h1>Lorem Ipsum 4 life</h1>
    <ul>
      {props.res.map(item => (
        <li key={item.id}>
          <Link as={`/p/${item.id}`} href={`/post?id=${item.id}`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await getData()
 
  console.log(`render on server`)

  return {
    res
  }
}

export default Index
