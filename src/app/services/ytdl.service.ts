import { Injectable } from '@angular/core';
import { youtubedl } from 'node_modules/youtube-dl-exec';


@Injectable({
  providedIn: 'root'
})
export class YtdlService {
ytdldl(){
    //   document.getElementById("ytdl-form").addEventListener("submit", downloadThing);
    //   function downloadThing(e) {
    // const youtubedl = require("youtube-dl-exec")
    // const url = document.getElementById('url')

    // youtubedl('url')
    //   .then(output => console.log(output));
    // e.preventDefault();
    // }
    alert("hey")
    
  }
  constructor() { }
  ngOnInit(): void {

  }
}
