export const menuItems = [
    //{
    //    enable: true,
    //    title: "快速菜单",
    //    component: "QuickMenu",
    //    icon: "",
    //    selected: false,
    //    expanded: false,
    //    order: 0,
    //    subMenu: [
    //        { enable: true, title: "步入", component: "WalkIn" },
    //        { enable: true, title: "预订", component: "Booking" },
    //        { enable: true, title: "退房", component: "CheckOut" }
    //    ]
    //},

    {
        enable: true,
        title: "仪表盘",
        component: "Dashboard",
        icon: "ion-android-home",
        selected: false,
        expanded: false,
        order: 1
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
        enable: true,
        title: "管理",
        component: "Admin",
        icon: "ion-ios-toggle",
        selected: false,
        expanded: false,
        order: 300,
        subMenu: [
            {
                enable: true,
                title: "客房配置",
                component: "RoomConfig",                 
                subMenu: [
                    {
                        enable: true,
                        title: "酒店",
                        component: "Hotel"
                    },
                    {
                        enable: true,
                        title: "房间类型",
                        component: "RoomType"
                    },
                    {
                        enable: true,
                        title: "房间属性",
                        component: "RoomFeature"
                    }
                ]
            }

        ]
    }

];