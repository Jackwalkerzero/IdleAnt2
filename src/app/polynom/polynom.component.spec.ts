import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PolynomComponent } from "./polynom.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ClarityModule } from "@clr/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormatPipe } from "../format.pipe";

describe("PolynomComponent", () => {
  let component: PolynomComponent;
  let fixture: ComponentFixture<PolynomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        ClarityModule.forRoot(),
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [PolynomComponent, FormatPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolynomComponent);
    component = fixture.componentInstance;
    component.a = new Decimal(1);
    component.b = new Decimal(1);
    component.c = new Decimal(1);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
