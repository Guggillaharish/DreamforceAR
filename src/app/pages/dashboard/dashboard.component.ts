import { Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators/takeWhile";
declare var $: any;
interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: "ngx-dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnDestroy {
  constructor() {
    $(document).ready(function() {
      // setTimeout(function(){$(".second-step").fadeIn(3000);},2000);
      // setTimeout(function(){$(".third-step").fadeIn(3000);},3000);
      // setTimeout(function(){$(".fourth-step").fadeIn(3000);},4000);
      // setTimeout(function(){$(".fifth-step").fadeIn(3000);},5000);

      setTimeout(function() {
        $(".second-step").fadeIn(3000);
        var animateSettings = {
          top: "70%",
          left: "44%"
        };
        $("#test").animate(animateSettings, 1000);

        animateSettings = {
          top: "70%",
          left: "539%"
        };
        $("#test").animate(animateSettings, 4000);

        animateSettings = {
          top: "141%",
          left: "537%"
        };
        $("#test").animate(animateSettings, 1000);
      }, 3000);

      setTimeout(function() {
        $(".third-step").fadeIn(3000);

        var animateSettings = {
          top: "229%",
          left: "537%"
        };
        $("#test").animate(animateSettings, 1000);
        animateSettings = {
          top: "229%",
          left: "44%"
        };
        $("#test").animate(animateSettings, 4000);

        animateSettings = {
          top: "265%",
          left: "44%"
        };
        $("#test").animate(animateSettings, 4000);
      }, 6000);

      setTimeout(function() {
        $(".fourth-step").fadeIn(3000);

        var animateSettings = {
          top: "374%",
          left: "44%"
        };
        $("#test").animate(animateSettings, 1000);
        animateSettings = {
          top: "374%",
          left: "530%"
        };
        $("#test").animate(animateSettings, 4000);
      }, 12000);

      setTimeout(function() {
        $(".fifth-step").fadeIn(3000);
        var animateSettings = {
          top: "520%",
          left: "530%"
        };
        $("#test").animate(animateSettings, 1000);
        animateSettings = {
          top: "520%",
          left: "44%"
        };
        $("#test").animate(animateSettings, 4000);
        animateSettings = {
          top: "570%",
          left: "44%"
        };
        $("#test").animate(animateSettings, 4000);
      }, 24000);
    });
  }

  ngOnDestroy() {}
}
