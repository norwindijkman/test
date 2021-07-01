import Link from 'next/link'
import { format, getDuration } from '../../util/displayDateAndTime'
import styles from './Poster.module.css'

export default function Video({ video }) {
  // Since the playlist is prerendered, rendering the website should fail if the sources of the video are not found.
  if (!Array.isArray(video.sources) || !video.sources.length) {
    throw new Error('Video sources not found for ' + video.title + '. Check if the API is still valid.')
  }
  return (
    <Link href={`/video/${video.mediaid}`}>
      <a>
        <div className={styles.wrap}>
          <img className={styles.video} alt={video.title} src={video.image} width="100%" height="100%" controls />
          <div className={styles.duration}>
            {getDuration(video.duration)}
          </div>
          <div className={styles.info}>
            <div className={styles.date}>
              {new Date(video.pubdate*1000).toLocaleDateString('nl-NL', format)}
            </div>
            <h2 className={styles.title}>
              {video.title}
            </h2>
          </div>
        </div>
      </a>
    </Link>
  )
}
