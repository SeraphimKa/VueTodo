import MainView from "../views/MainView.vue";
import NoteView from "../views/NoteView.vue";

export default [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/notes",
    name: "notes",
    component: NoteView,
  },
];
