import Controller from '@ember/controller';
import { action } from '@ember/object';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {

  	@action
  	animateGSAP() {
	    gsap.registerPlugin(ScrollTrigger);

	    let tl = gsap.timeline({
	    	defaults: { duration: 5 }
	    });

	    tl.to("#logo", { opacity: 1, scale: 1.2 })
	}

}
