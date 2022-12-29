import { Component, OnInit, Version } from '@angular/core';
import { VersionService } from 'src/app/services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})



export class FooterComponent implements OnInit {


  constructor(
    private versionService: VersionService
  ){

  }


  version: string | undefined;

  ngOnInit(): void {
    this.version = this.versionService.getVersion();

  }



}
