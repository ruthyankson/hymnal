import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreSectionComponent } from './more-section.component';

describe('MoreSectionComponent', () => {
  let component: MoreSectionComponent;
  let fixture: ComponentFixture<MoreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
