import { Component, OnInit } from '@angular/core';
import { YtdlService } from '../services/ytdl.service'
// import { ytdl } from '@node_modules/youtube-dl';


declare function downloadClick(): void;
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {



myScriptElement: HTMLScriptElement;
  constructor(private YtdlService: YtdlService
  ) { 

    // uncomment this out when it works xD
    //       document.getElementById("ytdl-form").addEventListener("submit", downloadThing);
    //   function downloadThing(e) {
    // const youtubedl = require("youtube-dl-exec")
    // const url = document.getElementById('url')

    // youtubedl('url')
    //   .then(output => console.log(output));
    // e.preventDefault();
    // }
  }
  ngOnInit(): void {

  }

  downloadClick() {
    // this.YtdlService.ytdldl();
    alert('hey');

  }


}
