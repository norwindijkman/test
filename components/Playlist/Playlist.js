import Poster from '../Poster/Poster'
import styles from './Playlist.module.css'

export default function Playlist({ playlist }) {
  // Since the playlist is prerendered, rendering the website should fail if the playlist is not found.
  if (!Array.isArray(playlist.playlist)) {
    throw new Error('Video playlist not found. Check if the API is still valid.')
  }
  return (
    <div className={styles.playlist}>
      {playlist.playlist.map((video) => (
        <div key={video.mediaid}>
          <Poster video={video} />
        </div>
      ))}
    </div>
  )
}
