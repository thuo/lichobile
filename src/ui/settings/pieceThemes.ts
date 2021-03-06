import * as helper from '../helper'
import { dropShadowHeader, backButton } from '../shared/common'
import layout from '../layout'
import formWidgets from '../shared/form'
import i18n from '../../i18n'
import settings from '../../settings'
import * as h from 'mithril/hyperscript'

function renderBody() {
  return [
    h('div.native_scroller.page.settings_list.radio_list', [
      h('ul#pieceThemes', {}, settings.general.theme.availablePieceThemes.map(t => {
        const [key, label] = t
        return h('li.list_item.piece_theme', {
          className: key
        }, formWidgets.renderRadio(label || key, 'piece_theme', key,
          settings.general.theme.piece() === key,
          e => {
            settings.general.theme.piece((e.target as HTMLInputElement).value)
          }
        ))
      }))
    ])
  ]
}

export default {
  oncreate: helper.viewSlideIn,

  view() {
    const header = dropShadowHeader(null, backButton(i18n('pieces')))
    return layout.free(header, renderBody())
  }
}
