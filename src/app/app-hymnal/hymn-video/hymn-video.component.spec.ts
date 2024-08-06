import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HymnVideoComponent } from './hymn-video.component';

describe('HymnVideoComponent', () => {
  let component: HymnVideoComponent;
  let fixture: ComponentFixture<HymnVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HymnVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HymnVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
