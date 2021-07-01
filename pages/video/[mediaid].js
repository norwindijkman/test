import Video from '../../components/Video/Video'

export default function VideoPage({ video }) {
  return (
    <div>
      <Video video={video} />
    </div>
  )
}

export async function getStaticPaths() {
  // Get video data from the given API.
  // Note that the data is fetched in getStaticProps, so if the API changes, the website needs to be rebuild.
  const playlist = await fetch('https://cdn.jwplayer.com/v2/playlists/iG6xB42W')
    .then(res => res.json())

  // Get the paths we want to pre-render based on the videos that we fetched using the API.
  const paths = playlist.playlist.map((video) => ({
    params: { mediaid: video.mediaid },
  }))

  // Only render the pages in paths. Other pages will result in a 404 page.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // Get video data from the given API.
  // Note that the data is fetched in getStaticProps, so if the API changes, the website needs to be rebuild.
  const playlist = await fetch('https://cdn.jwplayer.com/v2/playlists/iG6xB42W')
    .then(res => res.json())
  const video = playlist.playlist.find(pl => pl.mediaid === params.mediaid)
  return {
    props: {
      video,
    },
  }
}
