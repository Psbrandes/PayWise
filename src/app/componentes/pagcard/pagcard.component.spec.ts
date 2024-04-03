import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagcardComponent } from './pagcard.component';

describe('PagcardComponent', () => {
  let component: PagcardComponent;
  let fixture: ComponentFixture<PagcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
