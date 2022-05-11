import { DateObj } from '@components/Diary/Calendar/types';
import dayjs from 'dayjs';

const padDateStr = (num: number) => num.toString().padStart(2, '0');

export const customLocaleDateString = (date: DateObj) =>
  `${date.year}-${padDateStr(date.month)}-${padDateStr(date.date)}`;

export const dashToDot = (dateStr: string) => dayjs(dateStr).format('YYYY-MM-DD');
