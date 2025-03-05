import { atom, selector } from "recoil";
import { notificationsObject } from "../../assets/notifications.js";

export const notifications = atom({
  key: "notificationAtom",
  default: selector({
    key: "notificationSelector",
    get: () => {
      return notificationsObject;
    },
  }),
});

// export const jobAtom = atom({
//   key: "jobAtom",
//   default: 0
// })

// export const messageAtom = atom({
//   key: "messageAtom",
//   default: 12
// })

// export const notificationAtom = atom({
//   key: "notificationAtom",
//   default: 0
// })

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.networks +
      allNotifications.jobs +
      allNotifications.messages +
      allNotifications.notifications
    );
  },
});
