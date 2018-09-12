import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'ngx-select-orgs',
  templateUrl: './select-orgs.component.html',
  styleUrls: ['./select-orgs.component.scss']
})

export class SelectOrgsComponent implements OnInit {
  AllOrgsData:any[]=[{"idSforg":"00DV0000006tKUvMAM","sfNmUser":"prashanth.s@autorabit.com.spring18","nmLable":"PersonAccOrg","sfInstanceUrl":"https://cs12.salesforce.com","idUser":"74817591-4116-47e2-b6b7-95ed104c619d","tmStamp":1533298794000,"lastBackupStatus":"COMPLETED: IDCFG:8d057538-4d7c-48cb-8637-f34e2862c1c2","sfAuthType":"oauth","sfAccessToken":null,"sfSecToken":null,"sfIdSeckey":null,"sfTxPwd":null,"sfRefreshToken":null,"loginUrl":"https://test.salesforce.com"},{"idSforg":"00D3900000040cqEAA","sfNmUser":"jayashree@autorabit.com","nmLable":"Sales Org","sfInstanceUrl":"https://jayashreej-dev-ed.my.salesforce.com","idUser":"74817591-4116-47e2-b6b7-95ed104c619d","tmStamp":1535390689000,"lastBackupStatus":"COMPLETED: IDCFG:00ef2ce5-9715-480b-a9ac-6830c7d6d884","sfAuthType":"oauth","sfAccessToken":null,"sfSecToken":null,"sfIdSeckey":null,"sfTxPwd":null,"sfRefreshToken":null,"loginUrl":"https://login.salesforce.com"},{"idSforg":"00Df4000001T46YEAS","sfNmUser":"arvaultdev2017@autorabit.com","nmLable":"Vault Sales","sfInstanceUrl":"https://arvault-dev-ed.my.salesforce.com","idUser":"74817591-4116-47e2-b6b7-95ed104c619d","tmStamp":1535874136000,"lastBackupStatus":null,"sfAuthType":"oauth","sfAccessToken":null,"sfSecToken":null,"sfIdSeckey":null,"sfTxPwd":null,"sfRefreshToken":null,"loginUrl":"https://login.salesforce.com"}]
  selectComponent:any = document.querySelector(".select");
  sourceDest:any[]=[];
  constructor() { }

  ngOnInit() {

    this.selectComponent.addEventListener("click", () => {
    this.selectComponent.classList.toggle("open");
    });
  }
  tag = (name,id) => {
  const tagElement = document.createElement("div");
  tagElement.innerHTML = name;
  tagElement.id="tag_"+id;

  tagElement.classList.add("tag");

  const closeElement = document.createElement("img");
  closeElement.classList.add("close");
  closeElement.onclick = () => this._handleClickTag(name,id);
  closeElement.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACoElEQVR4Xu2a7TEEQRCG34uADMgAESATIRABIlAyEIIMyAAZkAERUK1u1Jba3enp7rfnrm7nl3K3O/080zsfe73CjrfVjvNjEbBkwI4bWB6BHU+AZRJseQSuAVwAOATwDuABwO2GZNAwtk8AjwCuAMjfs00r4AXA8cidXgGcazqqBWL8fB/Akyc2jYAbAGJ4qvWSMAdfYr0HcDknVyPgGcBpZYSyJWjgJWSJ68Qr4FuZnlkStPAl7NlBjsqA0hlbQiv828T88DemGgHyDN0ps6CkHWNibIWXWGSVkjlssmkEyMWaeWDYSXQmWOCroy8BawVIACLhqEMmWOHPNMuzVoBw95BAhW/JgDLwmRLo8BYBWZmQAm8VwJaQBu8RwJKQCu8VEC0hHT5CQJSELvBRArwS5PqpI+3UtkM2Oap1vrZvadkH1O5lXSLlvmPvGujwkRng2SfUxA4/Dxv5ctPIDGBLCIdnZABLAgWeKcA6MY49DjR4toAICVT4DAEeCXT4TAGt67zEFv1SZXS1YawCw44sO7zh9XQJTAFe+CKCKoElIAqeLoEhIBqeKiFaAAueJiFSgAVeljppPd42/3YcJcAKL0daab1euYcI8MCX3++tR2n3L1DeDIiA9xyg3EukR0AkfDcJVgEM+C4SLAKY8OkSWgVkwKdKaBGQCZ8mQSugB3yKBK0AOc+XTcvoufrfP6NfZlj3CbMFUtqdYGuJTDS8JxNCSmRaymNY8FYJqWVybHirhJQyuSz4VgnVQinNJFgrlc2Gb5EQUiorHcqzNHZm7wWvkaCKTZMBpTPJBCmXPwDwsS6Xny1C1KyXAd+RJbLEtgfga10uL6tXWLl8QJybeYuWDNhMAmdUiwCnwK2/fMmArR9CJ8CSAU6BW3/5DzWA6kFnmuZ5AAAAAElFTkSuQmCC";
  tagElement.appendChild(closeElement);
  return tagElement;
  };

  dropElement = (name,id) => {
  const drop = document.createElement("div");
  drop.classList.add("item");
  drop.id=id;
  drop.onclick = () => this._handleClickDropElement(id);
  drop.innerHTML = name;
  return drop;
  };

  _handleClickDropElement = element => {

  if(this.sourceDest.length<1){
    this.sourceDest.push(element);
  }else{
    $(".item").addClass("disabled");
  }

  $("#"+element).addClass("clicked");
  setTimeout(() => {
  $("#"+element).remove();
  }, 450);
  $("#target-drop").html($("#"+element).html()).show().css("top","0px").animate({top:'50px'})
  setTimeout(function(){$("#target-drop").fadeOut('slow');},1000);

  document.querySelector("#tag-area").appendChild(this.tag($("#"+element).html(),$("#"+element).attr('id')));
  };

  _handleClickTag = (name,id) => {
    $("#target-drop").html(name).show().css("top","50px").animate({top:'0px'})
    setTimeout(function(){$("#target-drop").fadeOut('slow');},1000);
  $("#tag_"+id).addClass("tag-clicked");
  const drpdwn = document.querySelector("#dropdown");
  drpdwn.appendChild(this.dropElement(name,id));
  $("#tag_"+id).remove();
  let indexOfOrg=this.sourceDest.indexOf(id);
  if(indexOfOrg!=-1){
    $(".item").removeClass("disabled");
    this.sourceDest.splice(indexOfOrg,1);
  }

  };



}
