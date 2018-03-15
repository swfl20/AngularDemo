import {Injectable} from '@angular/core';

@Injectable()

export class PuppiesService {

  puppies = [
    {
      name: 'Lola',
      age: 9,
      size: '1m',
      knowsTricks: false
    }, {
      name: 'Spotty',
      age: 5,
      size: '0.4m',
      knowsTricks: true
    }, {
      name: 'Chubby',
      age: 24,
      size: '2m',
      knowsTricks: false
    }
  ];
  
}
