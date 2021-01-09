import './Home.scss'
import { Message } from '../../components'

const Home = () => (
  <section className='home'>
    <Message
      avatar='https://marmok.ru/wp-content/uploads/2019/06/7a8aae8a37da95b04f5901d0cb03c7c61.jpg'
      text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sed excepturi tempora minus a, aliquid deleniti ex rerum magnam officiis?'
      date={new Date(2021, 0, 8, 12, 5, 15)}
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=1'
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=2'
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=3'
        }
      ]}
    />
    <Message
      avatar='https://klopik.com/uploads/posts/2012-03/1330982049_15.jpg'
      text='Hello!'
      date={new Date(2021, 0, 8, 12, 6, 20)}
      isMe={true}
      isReaded={false}
    />
  </section>
)
export default Home
