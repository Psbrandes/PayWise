import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-logo-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-slider.component.html',
  styleUrl: './logo-slider.component.css'
})
export class LogoSliderComponent {


  logo1Scr: string = '../../../assets/Vetores logos/Vector.svg'
  logo2Scr: string = '../../../assets/Vetores logos/Vector1.svg'
  logo3Scr: string = '../../../assets/Vetores logos/Vector2.svg'
  logo4Scr: string = '../../../assets/Vetores logos/Vector3.svg'
  logo5Scr: string = '../../../assets/Vetores logos/Vector4.svg'
  logo6Scr: string = '../../../assets/Vetores logos/Vector5.svg'
  
  logolist: string[] = [this.logo1Scr, this.logo2Scr,this.logo3Scr, this.logo4Scr, this.logo5Scr, this.logo6Scr];

}
