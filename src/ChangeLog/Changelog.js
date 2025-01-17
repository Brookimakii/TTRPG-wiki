import ReactMarkdown from 'react-markdown'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Changelog = () => {
  const [posts, setPosts] = useState([])
  const importAllPosts = (r) => r.keys().map(r)
  const markdownFiles = importAllPosts(
    require.context('./ChangeLogArchives', false, /\.md$/)
  ).sort().reverse()

  const card = {
    widths: '100%',
    margin: '30px auto 80px auto',
    padding: '10 px 20px 20px 20px',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    minHeight: '200px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
  }

  useEffect(() => {
    const getPosts = async () => {
      await Promise.all(
        markdownFiles.map((file) => {
          return fetch(file).then((res) => res.text())
        })
      )
        .then((res) => setPosts(res))
        .catch((err) => console.error(err))
    }
    getPosts()
  }, []);
  // console.log(posts)
  return <div style={{margin:'0 1em 0 1em'}}>
  <h1>Change log</h1>
    {/*display: 'flex', direction: 'row', justifyContent: "space-between", alignItems: "center"*/}
    <div style={{}}>
      <h3>Update, fixes and improvements to <Link to="/TTRPG-wiki">TTRPG-wiki</Link>.</h3>
      <div>
        {posts.map((post, idx) => (
          <div style={card} key={idx}>
            <ReactMarkdown
              components={{
                img: ({...props}) => (
                  <img
                    style={{
                      width: '80%',
                      height: "100%",
                      objectFit: 'cover',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    {...props}
                  />
                ),
                h1: ({...props}) => (
                  <h1 style={{color: 'purple'}} {...props}/>
                ),
                h3: ({...props}) => (
                  <h3 style={{color: 'purple'}} {...props}/>
                ),
                blockquote: ({...props}) => (
                  <hblockquote style={{
                    color: '#666',
                    margin: '0',
                    paddingLeft: '3em',
                    borderLeft: '0.5em #eee solid'
                  }} {...props}/>
                )
              }}>
              {post}
            </ReactMarkdown>
          </div>
        ))}
      </div>
    </div>

  </div>
}