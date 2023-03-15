import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPostJobComponent } from './client-post-job.component';

describe('ClientPostJobComponent', () => {
  let component: ClientPostJobComponent;
  let fixture: ComponentFixture<ClientPostJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPostJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
