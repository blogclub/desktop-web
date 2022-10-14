
import { onActivated, onDeactivated, onMounted } from 'vue'
import { onBeforeRouteLeave } from "vue-router"

export function useAliveScrollBehavior() {
  let saved: { top: number; left: number }| null = null;
  onActivated(() => {
    if (saved)
      setTimeout(() => window.scrollTo(saved))
    // called on initial mount
    // and every time it is re-inserted from the cache
  })

  onBeforeRouteLeave(() => {
    saved = { top: pageYOffset , left: pageXOffset }
    // called when removed from the DOM into the cache
    // and also when unmounted
  })
}
