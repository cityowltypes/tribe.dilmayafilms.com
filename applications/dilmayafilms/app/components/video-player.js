import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class VideoPlayerComponent extends Component {

  @action
  loadM3U8() {
    let player = videojs(this.args.id, {
        controls: false,
        loop: true,
	  	autoplay: true,
	  	muted: true,
	  	preload: 'auto'
	});
  }

}
