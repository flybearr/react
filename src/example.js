import Counter from './ex1025/Counter';
import JsxValue from './ex1026/JsxValue';
import StudentList from './ex1026/Studentlist';
import Menu from './ex1026/Menu';
import Demo from './ex1026/Demo';

export const examples = [
  {
    name: 'Demo',
    patg: './ex1026/Demo',
    component: Demo,
  },
  {
    name: 'MENU',
    patg: './ex1026/Menu',
    component: Menu,
  },
  {
    name: '計數器',
    patg: './ex1025/Counter',
    component: Counter,
  },
  {
    name: 'JSX中的值與表達式',
    patg: './ex1026/JsxValue',
    component: JsxValue,
  },
  {
    name: '學生列表清單(map-key)',
    patg: './ex1026/Studentlist',
    component: StudentList,
  },
];
