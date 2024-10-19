const AllNavs = [
    {
        id:1,
      label: "Home",
      user_type:'admin',
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-fw pi-home",
          to: "/admin/dashboard",
        },
        {
          label: "Orders",
          icon: "pi pi-shopping-cart",
          to: "/admin/orders",
        },
        {
          label: "About",
          icon: "pi pi-fw pi-home",
          to: "/admin/about",
        },
      ],
    },
    {
        id:2,
        label: "Home",
        user_type:'seller',
        items: [
          {
            label: "Dashboard",
            icon: "pi pi-fw pi-home",
            to: "/admin/dashboard",
          },
          {
            label: "About",
            icon: "pi pi-fw pi-home",
            to: "/admin/about",
          },
        ],
      },
    //   {
    //     id:3,
    //   label: "Home admin",
    //   user_type:'admin',
    //   items: [
    //     {
    //       label: "Dashboard",
    //       icon: "pi pi-fw pi-home",
    //       to: "/admin/dashboard",
    //     },
    //     {
    //       label: "About",
    //       icon: "pi pi-fw pi-home",
    //       to: "/admin/about",
    //     },
    //   ],
    // },
    
  ]

  export default AllNavs