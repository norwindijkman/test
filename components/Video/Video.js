import Link from 'next/link'
import { format, getDuration } from '../../util/displayDateAndTime'
import styles from './Video.module.css'

export default function Video({ video }) {
  // Since the playlist is prerendered, rendering the website should fail if the sources of the video are not found.
  if (!Array.isArray(video.sources) || !video.sources.length) {
    throw new Error('Video sources not found for ' + video.title + '. Check if the API is still valid.')
  }

  //TODO make back button disappear after video starts playing
  return (
    <div className={styles.wrap}>
      <Link href="/">
        <a className={styles.back}>
          Terug
        </a>
      </Link>
      <video className={styles.video} poster={video.image} width="100%" height="100%" controls autoPlay>
        {video.sources.map(source => (
          <source
            key={source.file}
            src={source.file}
            type={source.type} />
        ))}
        <p>Uw browser ondersteunt geen HTML5-video. Hier is in plaats daarvan een <a href={video.link}>link naar de video</a>.</p>
      </video>
    </div>
  )
}
