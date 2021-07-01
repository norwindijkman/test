import styles from './Video.module.css'

const format = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

export default function Video({ video }) {
  // Since the playlist is prerendered, rendering the website should fail if the sources of the video are not found.
  if (!Array.isArray(video.sources) || !video.sources.length) {
    throw 'Video sources not found for ' + video.title + '. Check if the API is still valid.'
  }
  return (
    <div>
      <div>
        {video.title}
      </div>
      <video controls>
        {video.sources.map(source => (
          <source key={source.file} src={source.file} type={source.type} />
        ))}
      </video>
      <div>
        {video.duration} min
      </div>
      <div>
        {new Date(video.pubdate).toLocaleDateString('nl-NL', format)}
      </div>
    </div>
  )
}
