import { Component } from '@angular/core';
import { PhotoViewer } from 'ionic-native';

@Component({
  templateUrl: 'photoviewer.page.html'
})
export class PhotoViewerPage {

  constructor() {
  }
  
  showPhoto(msg) {
    if(msg == 'fener')
      PhotoViewer.show('http://cdn.fenerbahce.org/pic_lib/de6p6371_53786_1528804.jpg', 'Oleksandr Karavaev');
    else
      PhotoViewer.show('https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/15327509_1019989228130229_4968108375618462549_n.jpg?oh=7fd0d31fe87d599b3938451fd9b781da&oe=591EB9D2', 'Cem Onur Bas');
  }

}
