import Counter from './ex1025/Counter';
import JsxValue from './ex1026/JsxValue';
import StudentList from './ex1026/Studentlist';
// import Menu from './ex1026/Menu';
import Demo from './ex1026/Demo';
import Parent from './ex1027/Parent';
import ParentPropType from './ex1027/ParentPropType';
// export default的話，可以在導入(import)時直接改名稱
import DataFlowParent from './ex1027-2/Parent';
import InputDemo from './ex1028/InputDemo';
import HTML5Form from './ex1028/HTML5Form';
import Bmi from './HW/Bmi';
import HowOldAreYou from './HW/HowOldAreYou';
import Bmi2 from './ex1031/bmi-2';
import BirthdaySelect from './ex1031/BirdaySelect';
import TodoApp from './ex1031/TodoApp.js';
import multipleInput from './ex1101/multipleInput';
import HTML5validForm from './ex1102/HTML5validForm';
import LifeCycle from './ex1102-2/Lifecycle';
import User from './ex1102-3/User';
import Image from './ex1103/Image';
import UserDemo from './ex1103-2/UserDemo';
import UserPage from './ex1104-1/UserPage';
import BS5test from './ex1104-1/BS5test';

export const examples = [
  {
    name: 'BS5test',
    patg: './ex1104-1/BS5test',
    component: BS5test,
  },
  {
    name: 'UserPage',
    patg: './ex1104-1/UserPage',
    component: UserPage,
  },
  {
    name: 'UserDemo',
    patg: './ex1103-2/UserDemo',
    component: UserDemo,
  },
  {
    name: 'Image',
    patg: './ex1103/Image',
    component: Image,
  },
  {
    name: 'User',
    patg: './ex1102-3/Use',
    component: User,
  },
  {
    name: '生命週期',
    patg: './ex1102-2/Lifecycle',
    component: LifeCycle,
  },
  {
    name: 'HTML5表單驗證',
    patg: './ex1102/HTML5validForm',
    component: HTML5validForm,
  },
  {
    name: '多個表單元素共用單一state',
    patg: './ex1101/multipleInput',
    component: multipleInput,
  },
  {
    name: 'TodoApp',
    patg: './ex1031/TodoApp',
    component: TodoApp,
  },
  {
    name: '上課寫的18算判斷器',
    patg: './ex1031/BirdaySelect',
    component: BirthdaySelect,
  },
  {
    name: 'BMI2',
    patg: './ex1031/bmi-2',
    component: Bmi2,
  },
  {
    name: '不可以瑟瑟換算器',
    patg: './HW/HowOldAreYou',
    component: HowOldAreYou,
  },
  {
    name: 'Bmi換算器',
    patg: './HW/Bmi',
    component: Bmi,
  },
  {
    name: 'HTML5表單',
    patg: './ex1028/HTML5Form',
    component: HTML5Form,
  },
  {
    name: '可控及不可控表單',
    patg: './ex1028/InputDemo',
    component: InputDemo,
  },
  {
    name: '三種資料流',
    patg: './ex1027-2/Parent',
    component: DataFlowParent,
  },
  {
    name: 'ParentPropType',
    patg: './ex1027/parentPropType',
    component: ParentPropType,
  },
  {
    name: 'Parent',
    patg: './ex1027/parent',
    component: Parent,
  },
  {
    name: 'Demo',
    patg: './ex1026/Demo',
    component: Demo,
  },
  // {
  //   name: 'MENU',
  //   patg: './ex1026/Menu',
  //   component: Menu,
  // },
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
