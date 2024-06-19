import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HymnHomeComponent } from './hymn-home.component';

describe('HymnHomeComponent', () => {
  let component: HymnHomeComponent;
  let fixture: ComponentFixture<HymnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HymnHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HymnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
