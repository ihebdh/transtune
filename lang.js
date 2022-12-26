const translation = {
    en:{
        add :"Add",
        lang:"lang",
        choose: "CHOOSE A CITY",
        transport :"CHOOSE A TRANSPORT TYPE",
        path : "CHOOSE A PATH",
        gmap : "open in google maps",
        grandtunis:"Grand Tunis",
        ariana :"Ariana",
        nabeul: "Nabeul",
        monastir: "Monastir",
        sousse: "Sousse",
        beja: "Béja",
        benarous: " Ben Arous",
        bizerte: "Bizerte",
        gabes: "Gabès",
        Gafsa: "Gafsa",
        Jendouba: "Jendouba",
        Kairouan: "Kairouan",
        Kasserine: "Kasserine",
        Kebili: "Kebili",
        Kef: "Kef",
        mahdia: "Mahdia",
        manouba: "Manouba",
        medenine: "Medenine",
        sfax: "Sfax",
        sidibouzid: "Sidi Bouzid",
        siliana: "Siliana",
        tataouine: "Tataouine",
        tozeur: "Tozeur",
        zaghouan: "Zaghouan",
        taxi: "TAXI JAMAII",
        louage: "LOUAGE",
        helpus :"HELP US GROW THIS WEBAPP TO FACILITATE PUBLIC TRANSPORT FOR LOCAL TUNISIAN AND FOREIGN VISITORS.",
        form : "Please fill this form.",
        epath : "Enter the path",
        lpath : "past here the link of the path",
        how :"here is how you can draw a map and share it's link with google maps",
        urname : "type your name",
        send : "Send",
        reset: "Reset"
    },
    ar:{
        add :"أظف",
        lang:"اللغة",
        choose: "إختر ولاية",
        path : "اختر المسار",
        transport :"اختر وسيلة نقل",
        gmap : "فتح في خرائط جوجل",
        grandtunis:"تونس الكبرى",
        ariana :"أريانة",
        nabeul: "نابل",
        monastir: "المنستير",
        sousse: "سوسة",
        beja: "باجة",
        benarous: " بن عروس",
        bizerte: "بنزرت",
        gabes: " قابس",
        Gafsa: "قفصة",
        Jendouba: "جندوبة",
        Kairouan: "القيروان",
        Kasserine: "القصرين",
        Kebili: "قبلي",
        Kef: "الكاف",
        mahdia: "المهدية",
        manouba: "منوبة",
        medenine: "مدنين",
        sfax: "صفاقس",
        sidibouzid: "سيدي بوزيد",
        siliana: "سليانة",
        tataouine: "تطاوين",
        tozeur: "توزر",
        zaghouan: "زغوان",
        taxi:"تاكسي جماعي",
        louage: "لواج",
        helpus :" ساعدنا في تنمية هذا الموقع الإلكتروني لتسهيل النقل العمومي للمواطنين التونسيين والزائرين الأجانب .",
        form : "من فضلك املأ هذه الاستمارة.",
        epath : "أدخل المسار",
        lpath : "أدخل رابط المسار هنا ",
        how :"إليك كيفية رسم مسار ومشاركة رابطه مع خرائط Google",
        urname : "اكتب اسمك",
        send : "إرسال",
        reset: "مسح"
    },

};

function language(){
    let clickLang = document.querySelectorAll("li")
    /*set the language selected from the page to the localstorage in the browser  */
    document.querySelector("#en").addEventListener("click", () => {
              localStorage.setItem("language",clickLang[1].getAttribute("value"))
              setlanguage("en")
});
    document.querySelector("#ar").addEventListener("click", () => {
              localStorage.setItem("language",clickLang[0].getAttribute("value"))
              setlanguage("ar")
});
}


document.addEventListener('DOMContentLoaded',()=>{
      //use english by default 
      const language = localStorage.getItem("language") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
      setlanguage(language);
      
      
})

function setlanguage(languages){
      //select the html elements that will change the language
      const elements = document.querySelectorAll("[data-id]");
      //loop inside  the list created
      elements.forEach((element) =>{
              // match bettween the html elemnt and the translation in js file and change
              const translationKey = element.getAttribute("data-id") ;
              element.textContent = translation[languages][translationKey];

      });
      //change the page direction if the language is arabic.
      document.dir = languages === "ar" ? "rtl" : "ltr";
      if (languages ==="ar"){
              //change the css style according to the language
              if (document.getElementById("ul") !== null) {document.getElementById("ul").style.right= "-85px";} 
              document.querySelector(":root").style.setProperty("--dislangtrian", '87px');
              if(document.getElementById("return") !== null){this.style.transform = "rotateY(180deg)";}
      }
      else{
              if(document.getElementById("ul") !== null){this.style.right= "1px"};
              document.querySelector(":root").style.setProperty("--dislangtrian", '4px');
      }
      
}

