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
<<<<<<< HEAD
  AllOrgsData:any[]=[{"idSforg":"00DV0000006tKUvMAM","sfNmUser":"prashanth.s@autorabit.com.spring18","nmLable":"PersonAccOrg","sfInstanceUrl":"https://cs12.salesforce.com","idUser":"74817591-4116-47e2-b6b7-95ed104c619d","tmStamp":1533298794000,"lastBackupStatus":"COMPLETED: IDCFG:8d057538-4d7c-48cb-8637-f34e2862c1c2","sfAuthType":"oauth","sfAccessToken":null,"sfSecToken":null,"sfIdSeckey":null,"sfTxPwd":null,"sfRefreshToken":null,"loginUrl":"https://test.salesforce.com"},{"idSforg":"00D3900000040cqEAA","sfNmUser":"jayashree@autorabit.com","nmLable":"Sales Org","sfInstanceUrl":"https://jayashreej-dev-ed.my.salesforce.com","idUser":"74817591-4116-47e2-b6b7-95ed104c619d","tmStamp":1535390689000,"lastBackupStatus":"COMPLETED: IDCFG:00ef2ce5-9715-480b-a9ac-6830c7d6d884","sfAuthType":"oauth","sfAccessToken":null,"sfSecToken":null,"sfIdSeckey":null,"sfTxPwd":null,"sfRefreshToken":null,"loginUrl":"https://login.salesforce.com"},{"idSforg":"00Df4000001T46YEAS","sfNmUser":"arvaultdev2017@autorabit.com","nmLable":"Vault Sales","sfInstanceUrl":"https://arvault-dev-ed.my.salesforce.com","idUser":"74817591-4116-47e2-b6b7-95ed104c619d","tmStamp":1535874136000,"lastBackupStatus":null,"sfAuthType":"oauth","sfAccessToken":null,"sfSecToken":null,"sfIdSeckey":null,"sfTxPwd":null,"sfRefreshToken":null,"loginUrl":"https://login.salesforce.com"}]

=======
>>>>>>> 8c80b38244e6cb70599b858ed3eb634489a19bf7
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
