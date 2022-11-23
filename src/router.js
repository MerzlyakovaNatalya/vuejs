import { createRouter, createWebHashHistory } from 'vue-router'
import PageLayout from './pages/PageLayout.vue'
import PageOne from './pages/PageOne.vue'
import PageTwo from './pages/PageTwo.vue'
import PageThree from './pages/PageThree.vue'

export default createRouter ({
  history: createWebHashHistory(),
  routes: [
    {path: '/layout/', 
     component: PageLayout,  
     alias: '/',
     children: [
      {path: 'page_one', component: PageOne},
      {path: 'page_two', component: PageTwo},
      {path: 'page_three', component: PageThree}
     ]}
  ]
})