import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'dilmayafilms/config/environment';
import { underscore } from '@ember/string';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.TribeENV.API_URL;

  pathForType(type) {
    return underscore(type);
  }
}
