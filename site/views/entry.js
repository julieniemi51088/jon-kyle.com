var wrapper = require('../containers/wrapper')
var md = require('../components/format')
var ov = require('object-values')
var html = require('choo/html')

var log = require('../components/log')
var Content = require('../components/content')
var content = new Content()

module.exports = wrapper(view)

function view (state, emit) {
  var entries = ov(state.content.children.entries.children).reverse()
  var entry = state.page

  return html`
    <div>
      ${content.render(entry)} 
      <div class="p1 pb0" style="margin-bottom: -1px;">
        ${log(entries, entry.url)}
      </div>
    </div>
  `
}

