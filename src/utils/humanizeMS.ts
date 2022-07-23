import dayjs from 'dayjs';

export const humanizeMS = (ms: number): string => {
  return dayjs(ms).format('mm:ss');
};
