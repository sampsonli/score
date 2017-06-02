/**
 * Created by lichun on 2017/6/2.
 */
export default {
    update: function (el, binding) {
        if (binding.oldValue.score && binding.value.score && binding.oldValue.score !== binding.value.score && !binding.value.isEnd) {
            el.className = el.className + ' ' + binding.value.class
            setTimeout(function () {
                el.className = binding.value.oldClass
            }, binding.value.timeOut * 1000)
        }
    }
}
