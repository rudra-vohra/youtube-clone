export const parseVideoDuration = (duration) => {
  if (!duration || typeof duration !== 'string') return '0:00';

  const matches = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!matches) return '0:00';

  const hours = parseInt(matches[1] || '0', 10);
  const minutes = parseInt(matches[2] || '0', 10);
  const seconds = parseInt(matches[3] || '0', 10);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;
  }

  if (minutes > 0) {
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }

  return `0:${String(seconds).padStart(2, '0')}`;
};
