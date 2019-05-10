import Layout from '../components/MyLayout.js'
import styled, { keyframes } from 'styled-components'
import getPages from '../getPages'

const Post = props => (
  <Layout>
    <h1>{props.data.name}</h1>
    <p>{props.data.summary}</p>
    <Rotate src={props.data.src} />
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const data = getPages()[id]

  console.log(`render on client`)

  return { data }
}

const rotate = keyframes`
{
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

const Rotate = styled.img`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

export default Post