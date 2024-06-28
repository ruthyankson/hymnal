import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HymnDetailComponent } from './hymn-detail.component';

describe('HymnDetailComponent', () => {
  let component: HymnDetailComponent;
  let fixture: ComponentFixture<HymnDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HymnDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HymnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
