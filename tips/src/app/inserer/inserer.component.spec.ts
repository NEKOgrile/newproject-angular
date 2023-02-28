import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsererComponent } from './inserer.component';

describe('InsererComponent', () => {
  let component: InsererComponent;
  let fixture: ComponentFixture<InsererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
