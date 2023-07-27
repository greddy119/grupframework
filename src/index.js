import './scss/index.scss';
import {Excell} from '@/components/Excell/Excell';
import {Formula} from '@/components/Formula/Formula';
import {Header} from '@/components/Header/Header';
import {Table} from '@/components/Table/Table';
import {Toolbar} from '@/components/Toolbar/Toolbar';
console.log('working');

const excell = new Excell('#app', {
  components: [Header, Toolbar, Formula, Table],
},
);
// console.log(excell);
excell.render();
