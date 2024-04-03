import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { BannerComponent } from "./componentes/banner/banner.component";
import { AboutComponent } from "./componentes/about/about.component";
import { LogoSliderComponent } from "./componentes/logo-slider/logo-slider.component";
import { FeaturesComponent } from "./componentes/features/features.component";
import { PagcardComponent } from "./componentes/pagcard/pagcard.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, BannerComponent, AboutComponent, LogoSliderComponent, FeaturesComponent, PagcardComponent]
})
export class AppComponent {
  title = 'PayWise';
}
