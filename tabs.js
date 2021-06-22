function showPage(tabName,element){
    var tabContent=document.getElementsByClassName("content");
    //hiding the tab content
      tab=document.getElementsByClassName("Tab");
    for(i=0;i<tabContent.length;i++){
        tabContent[i].style.display="none";
    }

    for(i=0;i<tab.length;i++){
         tab[i].style.backgroundColor="teal";
    }
    document.getElementById(tabName).style.display = "block";
    element.style.backgroundColor="black";

}