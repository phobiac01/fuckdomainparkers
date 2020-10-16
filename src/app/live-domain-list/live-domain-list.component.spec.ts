import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDomainListComponent } from './live-domain-list.component';

describe('LiveDomainListComponent', () => {
  let component: LiveDomainListComponent;
  let fixture: ComponentFixture<LiveDomainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveDomainListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDomainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
