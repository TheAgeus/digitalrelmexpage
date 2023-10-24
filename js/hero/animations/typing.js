var words = ['A un solo clic...',
    'Desde cualquier lugar...',
    'A cualquier hora...',
    'Desde tu computadora...',
    'Desde tu laptop...',
    'Desde tu teléfono celular...'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 17,
    speed = 60;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.hero_typing_text').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
