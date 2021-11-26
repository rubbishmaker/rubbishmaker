import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import './api/mock/mockServer'
import axios from 'axios'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import {
  Button,
  Aside,
  Header,
  Main,
  Container,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Row,
  Col,
  Card,
  TabPane,
  Table,
  TableColumn,
  Icon,
  Tag,
  Breadcrumb,
  Popover,
  Form,
  FormItem,
  Input,
  Dialog,
  Pagination
} from 'element-ui'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Container)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Submenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(Breadcrumb)
Vue.use(Popover)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Pagination)


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
