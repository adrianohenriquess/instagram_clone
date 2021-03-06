import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoComponentComponent } from './acesso.component';

describe('AcessoComponentComponent', () => {
  let component: AcessoComponentComponent;
  let fixture: ComponentFixture<AcessoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
