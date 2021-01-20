import { createRouter, createWebHistory } from "vue-router";
import beforeEach from "./beforeEach";
import { staticRouter, activityRouter } from "./route";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...staticRouter,
    ...activityRouter,
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});
beforeEach(router);
export default router;
