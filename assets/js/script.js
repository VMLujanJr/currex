

let countryList = {
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
}

var dDM = document.querySelectorAll("form select");
var fromValue = document.querySelector(".from select");
var toValue = document.querySelector(".to select");
var converterButton = document.querySelector("form button");
var exchangeRateTxt = document.querySelector(".exchange-rate");
var amount = document.querySelector("#amount");


for (let i = 0; i < dDM.length; i++) {
    dDM[i].addEventListener("change", function(e) {
        console.log("select", e.target.name);
        console.log("selected", e.target.value);
    });

    // var selected = dDM[i].value;
    // 
    // for(let currency_code in countryList) {
    //     let selected = i == 0 ? currency_code == "USD" : "selected" //: "" : currency_code == "EUR" ? "selected" : "";
    //     let optionTag = `<option value="${currency_code}" ${selected}>${currency code}</option>`;
    //     dDM[i].insertAdjacentHTML('beforeend', optionTag);
    // }
}

window.addEventListener('load', ()=>{
    getExchangeRate();
});
converterButton.addEventListener('click', e =>{
    e.preventDefault();
    getExchangeRate();
});

function getExchangeRate() {
    const curr1 = fromValue.value;
    const curr2 = toValue.value;
    const curr3 = amount.value;

    fetch(`https://v6.exchangerate-api.com/v6/c84d27efabb475a411031ee2/latest/${curr1}`)
    .then((result) => result.json())
    .then((data) => {
        //log data somehow
        const rate = data.conversion_rates[curr2];
        const convertedAmount = rate * curr3;
        exchangeRateTxt.innerText =  `${curr3} ${curr1} = ${convertedAmount.toFixed(2)} ${curr2}`;


        //let totalER = (amountVal * exchangeRate).toFixed(2);
    });
}
// // function getExchangeRate(){
// //     var amount = document.querySelector("form input");

// //     var exchangeRateTxt = document.querySelector(".exchange-rate");
    
// //     let amountVal = amount.value;
    
// //     if(amountVal == "" || amountVal == "0"){
// //         amount.value = "1";
// //         amountVal = 1;
// //     }
// //     exchangeRateTxt.innerText = "Getting exchange rate...";
// //     let url = `https://v6.exchangerate-api.com/v6/c84d27efabb475a411031ee2/latest/`;
// //     fetch(url).then(response => response.json()).then(result =>{
// //     let exchangeRate = result.conversion_rates[toValue.value];
// //     let totalER = (amountVal * exchangeRate).toFixed(2);
// //     exchangeRateTxt.innerText = `${toValue}`;
// //     })
    
    
// //     .catch(() => {
// //         exchangeRateTxt.innerText = "An Error Occured";
// //     });



// }
tailwind.config = {
    theme: {
      extend: {
          fontFamily: {
              sans: ['Josefin Slab', 'serif']
          }
      }
    }
}