export const menuItems = [
    {
        enable: true,
        title: "仪表盘",
        component: "Dashboard",
        icon: "ion-android-home",
        selected: false,
        expanded: false,
        order: 0 
    },
    {
        enable: true,
        title: "房态盘",
        component: "RoomView",
        icon: "ion-grid",
        selected: false,
        expanded: false,
        order: 100 
    },
    {
        enable: true,
        title: "宾客列表",
        component: "Guests",
        icon: "ion-person-stalker",
        selected: false,
        expanded: false,
        order: 200 
    },
    {
        enable: false,
        title: "管理",
        component: "Admin",
        icon: "ion-ios-toggle",
        selected: false,
        expanded: false,
        order: 300 
    }

];