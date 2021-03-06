import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "FEATURES",
    group: true
  },
  {
    title: "Version Control",
    icon: "nb-keypad",
    link: "/pages/ui-features",
    children: [
      {
        title: "Buttons",
        link: "/pages/ui-features/buttons"
      },
      {
        title: "Grid",
        link: "/pages/ui-features/grid"
      },
      {
        title: "Icons",
        link: "/pages/ui-features/icons"
      },
      {
        title: "Modals",
        link: "/pages/ui-features/modals"
      },
      {
        title: "Popovers",
        link: "/pages/ui-features/popovers"
      },
      {
        title: "Typography",
        link: "/pages/ui-features/typography"
      },
      {
        title: "Animated Searches",
        link: "/pages/ui-features/search-fields"
      },
      {
        title: "Tabs",
        link: "/pages/ui-features/tabs"
      }
    ]
  },
  {
    title: "Dataloader Pro",
    icon: "nb-tables",
    children: [
      {
        title: "Smart Table",
        link: "/pages/tables/smart-table"
      }
    ]
  },
  {
    title: "TAF",
    icon: "nb-shuffle",
    children: [
      {
        title: "404",
        link: "/pages/miscellaneous/404"
      }
    ]
  },
  {
    title: "Auth",
    icon: "nb-locked",
    children: [
      {
        title: "Login",
        link: "/auth/login"
      },
      {
        title: "Register",
        link: "/auth/register"
      },
      {
        title: "Request Password",
        link: "/auth/request-password"
      },
      {
        title: "Reset Password",
        link: "/auth/reset-password"
      }
    ]
  }
];
