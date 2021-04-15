import { Component, OnInit } from '@angular/core';
import { YtdlService } from '../services/ytdl.service'
// import { ytdl } from '@node_modules/youtube-dl';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {




  constructor(private YtdlService: YtdlService
  ) { }

  downloadClick() {
    this.YtdlService.ytdldl();

  }
  ngOnInit(): void {

  }

}
