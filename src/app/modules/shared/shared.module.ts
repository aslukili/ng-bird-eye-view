import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BirthdayPipe } from './pipes/birthday.pipe';


const components = [
  HeaderComponent,
  FooterComponent
]


@NgModule({
  declarations: [...components, BirthdayPipe],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }
