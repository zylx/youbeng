const Main = () => import( /* webpackChunkName: "index" */ '@/components/Main.vue')
const DevSettings = () => import( /* webpackChunkName: "devSettings" */ '@/pages/DevSettings.vue')
const DevStatus = () => import( /* webpackChunkName: "devStatus" */ '@/pages/DevStatus.vue')
const AlarmConfig = () => import( /* webpackChunkName: "alarmConfig" */ '@/pages/AlarmConfig.vue')
const HistoryEvents = () => import( /* webpackChunkName: "historyEvents" */ '@/pages/HistoryEvents.vue')
const Login = () => import( /* webpackChunkName: "login" */ '@/pages/Login.vue')

export default [{
        path: '/',
        redirect: '/dev/status'
    },
    {
        path: '/dev',
        name: 'dev',
        component: Main,
        // props: (route) => ({
        //     a: route.query.a,
        //     b: route.query.b
        // }),
        children: [{
            path: 'settings',
            name: 'settings',
            component: DevSettings
        }, {
            path: 'status',
            name: 'status',
            component: DevStatus
        }, {
            path: 'alarmConfig',
            name: 'alarmConfig',
            component: AlarmConfig
        },{
            path: 'historyEvents',
            name: 'historyEvents',
            component: HistoryEvents
        },{
            path: '',
            redirect: 'status'
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        hidden: true
    }
]