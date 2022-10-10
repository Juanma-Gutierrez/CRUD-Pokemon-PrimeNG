import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomaComponent } from './bioma.component';

describe('BiomaComponent', () => {
  let component: BiomaComponent;
  let fixture: ComponentFixture<BiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
