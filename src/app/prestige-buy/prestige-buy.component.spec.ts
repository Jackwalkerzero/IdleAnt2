import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PrestigeBuyComponent } from "./prestige-buy.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ClarityModule } from "@clr/angular";
import { ToastrModule } from "ngx-toastr";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormatPipe } from "../format.pipe";
import { Prestige } from "../model/prestige/prestige";
import { FullUnit } from "../model/full-unit";

describe("PrestigeBuyComponent", () => {
  let component: PrestigeBuyComponent;
  let fixture: ComponentFixture<PrestigeBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        ClarityModule.forRoot(),
        ToastrModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      declarations: [PrestigeBuyComponent, FormatPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestigeBuyComponent);
    component = fixture.componentInstance;
    component.prestige = new Prestige("", []);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});