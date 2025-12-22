function generateLetter() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    if (!firstName || !lastName) {
        alert("Please enter both first and last name");
        return;
    }

    let letter = `

မင်္ဂလာပါ ${firstName} ${lastName},<br><br>

ကိုယ် အဓိက ပြောချင်တာက<br><br> First: "You had me at hello" 

<br><br>
တကယ်ပါ မင်းကို မြင်မြင်ချင်းပါပဲ အဲ့ကတည်းက အစပျိုးခဲ့တာပေါ့နော်။ 
ဘာလို့လဲတော့ မသိဘူး စပြောရမှာကို တွန့်ဆုတ်နေမိတယ်။ 
အခုကတော့ တစ်စတစ်စ အစပျိုးလာတဲ့ပန်းက ရင်ထဲကနေပေါက်ထွက်ချင်နေပြီး 
တစ်ယောက်တည်း အေးဆေးနေလာခဲ့တာ အတော်ကြာပါပြီး။ 
အခုတော့ မင်းအကြောင်းတွေးရင်း အိပ်လည်းမရ စာလည်းအာရုံမရနဲ့။ 
${firstName} ${lastName} ဆီက တုန့်ပြန့်ချက်တစ်ခုတော့ လို့နေပြီး, အဲ့ကြောင့် ဒီစာကို ရေးလိုက်တာပါ။ 
ရပါတယ် ${firstName} ${lastName} အေးဆေးဆုံးဖြတ်ပါ။ ${firstName} ${lastName} သဘောဆန္ဒအတိုင်းပါပဲ။ 
ဒီလို လူငယ်အချင်းချင်း "fall in love" တာ အပြစ်လား။ 
ထက်ပြီးတော့လည်း အချိန်ဆွဲနေရင် ဖြစ်ချင်တာဖြစ်လာမှာမှ မဟုတ်တာ။<br><br>
${firstName} ${lastName}ရဲ့ အဖြေက ကိုယ်ကြားချင်နေတဲ့အတိုင်းဆို ကောင်းမှာပဲ။ ဒါမှမဟုတ်ရင် ဒီအတိုင်းဆက်ရှိနေပေးမှာပါ။ 
ဒါပေမဲ့ ရပါတယ် ${firstName} ${lastName} သဘောပါ၊ ${firstName} ${lastName} ဆန္ဒအတိုင်းပါပဲ။

<br><br>ချစ်တယ်နော်၊<br>
${firstName} ${lastName}<br>
`;

    let box = document.getElementById("letterBox");
    box.innerHTML = letter;
    box.style.display = "block";

    // Add simple bounce animation
    box.classList.remove("show"); // reset
    void box.offsetWidth; // trigger reflow
    box.classList.add("show");
}
