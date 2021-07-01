// Utility functions that turn dates or time integerst into readable strings.

// Get correct date format to display on video poster.
export const format = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

// Get correct dusplay of video durations given the number of minutes
export const getDuration = duration => {
  const hours = Math.floor(duration/60)
  const minutes = duration % 60
  return hours
    ? minutes
      ? `${hours} hour and ${minutes} min`
      : `${hours} hour`
    : `${minutes} min`
}
