import Vue from 'vue'
import Oruga from '@oruga-ui/oruga'
import '@oruga-ui/oruga/dist/oruga.css'
// import '@oruga-ui/oruga/dist/oruga-full-vars.css'
import '@/assets/css/global-step.css'

import { library } from '@fortawesome/fontawesome-svg-core'
// internal icons
import {
    faCheck,
    faCheckCircle,
    faInfoCircle,
    faExclamationTriangle,
    faExclamationCircle,
    faArrowUp,
    faAngleRight,
    faAngleLeft,
    faAngleDown,
    faEye,
    faEyeSlash,
    faCaretDown,
    faCaretUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faCheck,
    faCheckCircle,
    faInfoCircle,
    faExclamationTriangle,
    faExclamationCircle,
    faArrowUp,
    faAngleRight,
    faAngleLeft,
    faAngleDown,
    faEye,
    faEyeSlash,
    faCaretDown,
    faCaretUp
)
Vue.component('vue-fontawesome', FontAwesomeIcon)

// Vue.use(Oruga)
Vue.use(Oruga, {
    iconPack: 'fas',
    iconComponent: 'vue-fontawesome',
    statusIcon: false,
    button: {
        rootClass: 'btn',
        outlinedClass: 'btn-outline-',
        disabledClass: 'btn-disabled',
        variantClass: (variant, context) => { // Apply variant when the element is not outlined
            if (!context.props.outlined) {
                return `btn-${variant}`
            }
        }
    },
    field: {
        rootClass: 'field',
        labelClass: 'form-label',
        messageClass: 'form-text',
        variantClass: 'field-'
    },
    input: {
        inputClass: 'form-control',
        variantClass: (variant) => {
            switch (variant) {
                case 'danger':
                    return 'is-invalid'
            }
        }
    },
    dropdown: {
        rootClass: 'dropdown',
        itemClass: 'dropdown-item',
        itemActiveClass: 'is-div-active'
    },
    steps: {
        // override: true,
        itemHeaderActiveClass: 'steps-nav-item-active',
        itemHeaderPreviousClass: 'steps-nav-item-previous',
        stepMarkerClass: 'step-marker',
        stepDividerClass: 'step-divider',
        stepLinkLabelClass: 'steps__title'
    },
    checkbox: {
        checkClass: 'form-check-input',
        labelClass: 'form-check-label'
    },
    radio: {
        checkClass: 'radio-check '
    }
})

