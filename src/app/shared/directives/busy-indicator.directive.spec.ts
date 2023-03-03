import { BusyIndicatorDirective } from './busy-indicator.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: '<div [appBusyIndicator]="isLoading"></div>',
})
class TestComponent {
  isLoading: boolean = false;
}

describe('BusyIndicatorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let divElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, BusyIndicatorDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    divElement = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the spinner when isLoading is false', () => {
    expect(divElement.querySelector('.busy-indicator')).toBeFalsy();
  });

  it('should display the spinner when isLoading is true', () => {
    component.isLoading = true;
    fixture.detectChanges();
    expect(divElement.querySelector('.busy-indicator')).toBeTruthy();
  });
});
