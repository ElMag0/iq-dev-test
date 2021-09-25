import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); 

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Оплатить интернет',
    start: '2021-09-05'
  },
  {
    id: createEventId(),
    title: 'Сходить на вакцинацию',
    start: '2021-09-04'
  },
  {
    id: createEventId(),
    title: 'Сдать кровь',
    start: '2021-09-15',
    end: '2021-09-18'
  },
  {
    id: createEventId(),
    title: 'Завершить проект',
    start: TODAY_STR 
  },
  {
    id: createEventId(),
    title: 'Форум УПМ-16',
    start: '2021-09-19'
  },
  {
    id: createEventId(),
    title: 'День рождения сестры',
    start: '2021-09-30',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
