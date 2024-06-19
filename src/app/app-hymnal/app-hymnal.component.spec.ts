import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHymnalComponent } from './app-hymnal.component';

describe('AppHymnalComponent', () => {
  let component: AppHymnalComponent;
  let fixture: ComponentFixture<AppHymnalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppHymnalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppHymnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
