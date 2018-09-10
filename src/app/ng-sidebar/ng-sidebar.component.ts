import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "ngx-ng-sidebar",
  templateUrl: "./ng-sidebar.component.html",
  styleUrls: ["./ng-sidebar.component.scss"]
})
export class NgSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let $this;
    $(function() {
      $(".navbar-left__toggle").click(function(e) {
        e.preventDefault(),
          $(this)
            .parents("nav")
            .toggleClass("navbar-expand");

        $("#main-wrap").toggleClass("main-wrap-expand");
        $(".navbar-light .top-bar").toggleClass("top-bar-expand");
      }),
        $(".navbar-left .dropdown-toggle").click(function(e) {
          e.preventDefault(),
            ($this = $(this).next()),
            $(".side-menu>li").removeClass("active"),
            $(this)
              .parent()
              .addClass("active"),
            $(".side-menu__dropdown-menu")
              .not($this)
              .slideUp(),
            $(this)
              .next()
              .slideToggle();
        }),
        $(".drop-user-menu").click(function(e) {
          e.preventDefault(),
            $(window).width() < 768 &&
              $(this)
                .next()
                .slideToggle();
        }),
        $(window).resize(function() {
          $(window).width() > 767 && $(".navbar-nav").show();
        });
    });
  }
}
