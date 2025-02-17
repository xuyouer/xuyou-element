import {makeInstaller} from "@xuyou-element/utils"
import components from "./components"
import '@xuyou-element/theme/index.scss'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
const installer = makeInstaller(components)
export * from "@xuyou-element/components"
export default installer