import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HymnsssComponent } from './hymnsss.component';

describe('HymnsssComponent', () => {
  let component: HymnsssComponent;
  let fixture: ComponentFixture<HymnsssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HymnsssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HymnsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
