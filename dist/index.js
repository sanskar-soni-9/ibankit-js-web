"use strict";
var IBANKIT = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    BIC: () => BIC,
    BbanStructure: () => BbanStructure,
    CountryCode: () => CountryCode,
    IBAN: () => IBAN,
    IBANBuilder: () => IBANBuilder,
  });

  // src/country.ts
  var CountryCode = /* @__PURE__ */ ((CountryCode4) => {
    CountryCode4["AD"] = "AD";
    CountryCode4["AE"] = "AE";
    CountryCode4["AF"] = "AF";
    CountryCode4["AG"] = "AG";
    CountryCode4["AI"] = "AI";
    CountryCode4["AL"] = "AL";
    CountryCode4["AM"] = "AM";
    CountryCode4["AO"] = "AO";
    CountryCode4["AQ"] = "AQ";
    CountryCode4["AR"] = "AR";
    CountryCode4["AS"] = "AS";
    CountryCode4["AT"] = "AT";
    CountryCode4["AU"] = "AU";
    CountryCode4["AW"] = "AW";
    CountryCode4["AX"] = "AX";
    CountryCode4["AZ"] = "AZ";
    CountryCode4["BA"] = "BA";
    CountryCode4["BB"] = "BB";
    CountryCode4["BD"] = "BD";
    CountryCode4["BE"] = "BE";
    CountryCode4["BF"] = "BF";
    CountryCode4["BG"] = "BG";
    CountryCode4["BH"] = "BH";
    CountryCode4["BI"] = "BI";
    CountryCode4["BJ"] = "BJ";
    CountryCode4["BL"] = "BL";
    CountryCode4["BM"] = "BM";
    CountryCode4["BN"] = "BN";
    CountryCode4["BO"] = "BO";
    CountryCode4["BQ"] = "BQ";
    CountryCode4["BR"] = "BR";
    CountryCode4["BS"] = "BS";
    CountryCode4["BT"] = "BT";
    CountryCode4["BV"] = "BV";
    CountryCode4["BW"] = "BW";
    CountryCode4["BY"] = "BY";
    CountryCode4["BZ"] = "BZ";
    CountryCode4["CA"] = "CA";
    CountryCode4["CC"] = "CC";
    CountryCode4["CD"] = "CD";
    CountryCode4["CF"] = "CF";
    CountryCode4["CG"] = "CG";
    CountryCode4["CH"] = "CH";
    CountryCode4["CI"] = "CI";
    CountryCode4["CK"] = "CK";
    CountryCode4["CL"] = "CL";
    CountryCode4["CM"] = "CM";
    CountryCode4["CN"] = "CN";
    CountryCode4["CO"] = "CO";
    CountryCode4["CR"] = "CR";
    CountryCode4["CU"] = "CU";
    CountryCode4["CV"] = "CV";
    CountryCode4["CW"] = "CW";
    CountryCode4["CX"] = "CX";
    CountryCode4["CY"] = "CY";
    CountryCode4["CZ"] = "CZ";
    CountryCode4["DE"] = "DE";
    CountryCode4["DJ"] = "DJ";
    CountryCode4["DK"] = "DK";
    CountryCode4["DM"] = "DM";
    CountryCode4["DO"] = "DO";
    CountryCode4["DZ"] = "DZ";
    CountryCode4["EC"] = "EC";
    CountryCode4["EE"] = "EE";
    CountryCode4["EG"] = "EG";
    CountryCode4["EH"] = "EH";
    CountryCode4["ER"] = "ER";
    CountryCode4["ES"] = "ES";
    CountryCode4["ET"] = "ET";
    CountryCode4["FI"] = "FI";
    CountryCode4["FJ"] = "FJ";
    CountryCode4["FK"] = "FK";
    CountryCode4["FM"] = "FM";
    CountryCode4["FO"] = "FO";
    CountryCode4["FR"] = "FR";
    CountryCode4["GA"] = "GA";
    CountryCode4["GB"] = "GB";
    CountryCode4["GD"] = "GD";
    CountryCode4["GE"] = "GE";
    CountryCode4["GF"] = "GF";
    CountryCode4["GG"] = "GG";
    CountryCode4["GH"] = "GH";
    CountryCode4["GI"] = "GI";
    CountryCode4["GL"] = "GL";
    CountryCode4["GM"] = "GM";
    CountryCode4["GN"] = "GN";
    CountryCode4["GP"] = "GP";
    CountryCode4["GQ"] = "GQ";
    CountryCode4["GR"] = "GR";
    CountryCode4["GS"] = "GS";
    CountryCode4["GT"] = "GT";
    CountryCode4["GU"] = "GU";
    CountryCode4["GW"] = "GW";
    CountryCode4["GY"] = "GY";
    CountryCode4["HK"] = "HK";
    CountryCode4["HM"] = "HM";
    CountryCode4["HN"] = "HN";
    CountryCode4["HR"] = "HR";
    CountryCode4["HT"] = "HT";
    CountryCode4["HU"] = "HU";
    CountryCode4["ID"] = "ID";
    CountryCode4["IE"] = "IE";
    CountryCode4["IL"] = "IL";
    CountryCode4["IM"] = "IM";
    CountryCode4["IN"] = "IN";
    CountryCode4["IO"] = "IO";
    CountryCode4["IQ"] = "IQ";
    CountryCode4["IR"] = "IR";
    CountryCode4["IS"] = "IS";
    CountryCode4["IT"] = "IT";
    CountryCode4["JE"] = "JE";
    CountryCode4["JM"] = "JM";
    CountryCode4["JO"] = "JO";
    CountryCode4["JP"] = "JP";
    CountryCode4["KE"] = "KE";
    CountryCode4["KG"] = "KG";
    CountryCode4["KH"] = "KH";
    CountryCode4["KI"] = "KI";
    CountryCode4["KM"] = "KM";
    CountryCode4["KN"] = "KN";
    CountryCode4["KP"] = "KP";
    CountryCode4["KR"] = "KR";
    CountryCode4["KW"] = "KW";
    CountryCode4["KY"] = "KY";
    CountryCode4["KZ"] = "KZ";
    CountryCode4["LA"] = "LA";
    CountryCode4["LB"] = "LB";
    CountryCode4["LC"] = "LC";
    CountryCode4["LI"] = "LI";
    CountryCode4["LK"] = "LK";
    CountryCode4["LR"] = "LR";
    CountryCode4["LS"] = "LS";
    CountryCode4["LT"] = "LT";
    CountryCode4["LU"] = "LU";
    CountryCode4["LV"] = "LV";
    CountryCode4["LY"] = "LY";
    CountryCode4["MA"] = "MA";
    CountryCode4["MC"] = "MC";
    CountryCode4["MD"] = "MD";
    CountryCode4["ME"] = "ME";
    CountryCode4["MF"] = "MF";
    CountryCode4["MG"] = "MG";
    CountryCode4["MH"] = "MH";
    CountryCode4["MK"] = "MK";
    CountryCode4["ML"] = "ML";
    CountryCode4["MM"] = "MM";
    CountryCode4["MN"] = "MN";
    CountryCode4["MO"] = "MO";
    CountryCode4["MP"] = "MP";
    CountryCode4["MQ"] = "MQ";
    CountryCode4["MR"] = "MR";
    CountryCode4["MS"] = "MS";
    CountryCode4["MT"] = "MT";
    CountryCode4["MU"] = "MU";
    CountryCode4["MV"] = "MV";
    CountryCode4["MW"] = "MW";
    CountryCode4["MX"] = "MX";
    CountryCode4["MY"] = "MY";
    CountryCode4["MZ"] = "MZ";
    CountryCode4["NA"] = "NA";
    CountryCode4["NC"] = "NC";
    CountryCode4["NE"] = "NE";
    CountryCode4["NF"] = "NF";
    CountryCode4["NG"] = "NG";
    CountryCode4["NI"] = "NI";
    CountryCode4["NL"] = "NL";
    CountryCode4["NO"] = "NO";
    CountryCode4["NP"] = "NP";
    CountryCode4["NR"] = "NR";
    CountryCode4["NU"] = "NU";
    CountryCode4["NZ"] = "NZ";
    CountryCode4["OM"] = "OM";
    CountryCode4["PA"] = "PA";
    CountryCode4["PE"] = "PE";
    CountryCode4["PF"] = "PF";
    CountryCode4["PG"] = "PG";
    CountryCode4["PH"] = "PH";
    CountryCode4["PK"] = "PK";
    CountryCode4["PL"] = "PL";
    CountryCode4["PM"] = "PM";
    CountryCode4["PN"] = "PN";
    CountryCode4["PR"] = "PR";
    CountryCode4["PS"] = "PS";
    CountryCode4["PT"] = "PT";
    CountryCode4["PW"] = "PW";
    CountryCode4["PY"] = "PY";
    CountryCode4["QA"] = "QA";
    CountryCode4["RE"] = "RE";
    CountryCode4["RO"] = "RO";
    CountryCode4["RS"] = "RS";
    CountryCode4["RU"] = "RU";
    CountryCode4["RW"] = "RW";
    CountryCode4["SA"] = "SA";
    CountryCode4["SB"] = "SB";
    CountryCode4["SC"] = "SC";
    CountryCode4["SD"] = "SD";
    CountryCode4["SE"] = "SE";
    CountryCode4["SG"] = "SG";
    CountryCode4["SH"] = "SH";
    CountryCode4["SI"] = "SI";
    CountryCode4["SJ"] = "SJ";
    CountryCode4["SK"] = "SK";
    CountryCode4["SL"] = "SL";
    CountryCode4["SM"] = "SM";
    CountryCode4["SN"] = "SN";
    CountryCode4["SO"] = "SO";
    CountryCode4["SR"] = "SR";
    CountryCode4["SS"] = "SS";
    CountryCode4["ST"] = "ST";
    CountryCode4["SV"] = "SV";
    CountryCode4["SX"] = "SX";
    CountryCode4["SY"] = "SY";
    CountryCode4["SZ"] = "SZ";
    CountryCode4["TC"] = "TC";
    CountryCode4["TD"] = "TD";
    CountryCode4["TF"] = "TF";
    CountryCode4["TG"] = "TG";
    CountryCode4["TH"] = "TH";
    CountryCode4["TJ"] = "TJ";
    CountryCode4["TK"] = "TK";
    CountryCode4["TL"] = "TL";
    CountryCode4["TM"] = "TM";
    CountryCode4["TN"] = "TN";
    CountryCode4["TO"] = "TO";
    CountryCode4["TR"] = "TR";
    CountryCode4["TT"] = "TT";
    CountryCode4["TV"] = "TV";
    CountryCode4["TW"] = "TW";
    CountryCode4["TZ"] = "TZ";
    CountryCode4["UA"] = "UA";
    CountryCode4["UG"] = "UG";
    CountryCode4["UM"] = "UM";
    CountryCode4["US"] = "US";
    CountryCode4["UY"] = "UY";
    CountryCode4["UZ"] = "UZ";
    CountryCode4["VA"] = "VA";
    CountryCode4["VC"] = "VC";
    CountryCode4["VE"] = "VE";
    CountryCode4["VG"] = "VG";
    CountryCode4["VI"] = "VI";
    CountryCode4["VN"] = "VN";
    CountryCode4["VU"] = "VU";
    CountryCode4["WF"] = "WF";
    CountryCode4["WS"] = "WS";
    CountryCode4["XK"] = "XK";
    CountryCode4["YE"] = "YE";
    CountryCode4["YT"] = "YT";
    CountryCode4["ZA"] = "ZA";
    CountryCode4["ZM"] = "ZM";
    CountryCode4["ZW"] = "ZW";
    return CountryCode4;
  })(CountryCode || {});
  var countryData = {
    ["AD" /* AD */]: ["Andorra", "AND"],
    ["AE" /* AE */]: ["United Arab Emirates", "ARE"],
    ["AF" /* AF */]: ["Afghanistan", "AFG"],
    ["AG" /* AG */]: ["Antigua and Barbuda", "ATG"],
    ["AI" /* AI */]: ["Anguilla", "AIA"],
    ["AL" /* AL */]: ["Albania", "ALB"],
    ["AM" /* AM */]: ["Armenia", "ARM"],
    ["AO" /* AO */]: ["Angola", "AGO"],
    ["AQ" /* AQ */]: ["Antarctica", "ATA"],
    ["AR" /* AR */]: ["Argentina", "ARG"],
    ["AS" /* AS */]: ["American Samoa", "ASM"],
    ["AT" /* AT */]: ["Austria", "AUT"],
    ["AU" /* AU */]: ["Australia", "AUS"],
    ["AW" /* AW */]: ["Aruba", "ABW"],
    ["AX" /* AX */]: ["\u212Bland Islands", "ALA"],
    ["AZ" /* AZ */]: ["Azerbaijan", "AZE"],
    ["BA" /* BA */]: ["Bosnia and Herzegovina", "BIH"],
    ["BB" /* BB */]: ["Barbados", "BRB"],
    ["BD" /* BD */]: ["Bangladesh", "BGD"],
    ["BE" /* BE */]: ["Belgium", "BEL"],
    ["BF" /* BF */]: ["Burkina Faso", "BFA"],
    ["BG" /* BG */]: ["Bulgaria", "BGR"],
    ["BH" /* BH */]: ["Bahrain", "BHR"],
    ["BI" /* BI */]: ["Burundi", "BDI"],
    ["BJ" /* BJ */]: ["Benin", "BEN"],
    ["BL" /* BL */]: ["Saint Barth\xE9lemy", "BLM"],
    ["BM" /* BM */]: ["Bermuda", "BMU"],
    ["BN" /* BN */]: ["Brunei Darussalam", "BRN"],
    ["BO" /* BO */]: ["Plurinational State of Bolivia", "BOL"],
    ["BQ" /* BQ */]: ["Bonaire, Sint Eustatius and Saba", "BES"],
    ["BR" /* BR */]: ["Brazil", "BRA"],
    ["BS" /* BS */]: ["Bahamas", "BHS"],
    ["BT" /* BT */]: ["Bhutan", "BTN"],
    ["BV" /* BV */]: ["Bouvet Island", "BVT"],
    ["BW" /* BW */]: ["Botswana", "BWA"],
    ["BY" /* BY */]: ["Belarus", "BLR"],
    ["BZ" /* BZ */]: ["Belize", "BLZ"],
    ["CA" /* CA */]: ["Canada", "CAN"],
    ["CC" /* CC */]: ["Cocos Islands", "CCK"],
    ["CD" /* CD */]: ["The Democratic Republic of the Congo", "COD"],
    ["CF" /* CF */]: ["Central African Republic", "CAF"],
    ["CG" /* CG */]: ["Congo", "COG"],
    ["CH" /* CH */]: ["Switzerland", "CHE"],
    ["CI" /* CI */]: ["C\xF4te d'Ivoire", "CIV"],
    ["CK" /* CK */]: ["Cook Islands", "COK"],
    ["CL" /* CL */]: ["Chile", "CHL"],
    ["CM" /* CM */]: ["Cameroon", "CMR"],
    ["CN" /* CN */]: ["China", "CHN"],
    ["CO" /* CO */]: ["Colombia", "COL"],
    ["CR" /* CR */]: ["Costa Rica", "CRI"],
    ["CU" /* CU */]: ["Cuba", "CUB"],
    ["CV" /* CV */]: ["Cape Verde", "CPV"],
    ["CW" /* CW */]: ["Cura\xE7ao", "CUW"],
    ["CX" /* CX */]: ["Christmas Island", "CXR"],
    ["CY" /* CY */]: ["Cyprus", "CYP"],
    ["CZ" /* CZ */]: ["Czech Republic", "CZE"],
    ["DE" /* DE */]: ["Germany", "DEU"],
    ["DJ" /* DJ */]: ["Djibouti", "DJI"],
    ["DK" /* DK */]: ["Denmark", "DNK"],
    ["DM" /* DM */]: ["Dominica", "DMA"],
    ["DO" /* DO */]: ["Dominican Republic", "DOM"],
    ["DZ" /* DZ */]: ["Algeria", "DZA"],
    ["EC" /* EC */]: ["Ecuador", "ECU"],
    ["EE" /* EE */]: ["Estonia", "EST"],
    ["EG" /* EG */]: ["Egypt", "EGY"],
    ["EH" /* EH */]: ["Western Sahara", "ESH"],
    ["ER" /* ER */]: ["Eritrea", "ERI"],
    ["ES" /* ES */]: ["Spain", "ESP"],
    ["ET" /* ET */]: ["Ethiopia", "ETH"],
    ["FI" /* FI */]: ["Finland", "FIN"],
    ["FJ" /* FJ */]: ["Fiji", "FJI"],
    ["FK" /* FK */]: ["Falkland Islands", "FLK"],
    ["FM" /* FM */]: ["Federated States of Micronesia", "FSM"],
    ["FO" /* FO */]: ["Faroe Islands", "FRO"],
    ["FR" /* FR */]: ["France", "FRA"],
    ["GA" /* GA */]: ["Gabon", "GAB"],
    ["GB" /* GB */]: ["United Kingdom", "GBR"],
    ["GD" /* GD */]: ["Grenada", "GRD"],
    ["GE" /* GE */]: ["Georgia", "GEO"],
    ["GF" /* GF */]: ["French Guiana", "GUF"],
    ["GG" /* GG */]: ["Guemsey", "GGY"],
    ["GH" /* GH */]: ["Ghana", "GHA"],
    ["GI" /* GI */]: ["Gibraltar", "GIB"],
    ["GL" /* GL */]: ["Greenland", "GRL"],
    ["GM" /* GM */]: ["Gambia", "GMB"],
    ["GN" /* GN */]: ["Guinea", "GIN"],
    ["GP" /* GP */]: ["Guadeloupe", "GLP"],
    ["GQ" /* GQ */]: ["Equatorial Guinea", "GNQ"],
    ["GR" /* GR */]: ["Greece", "GRC"],
    ["GS" /* GS */]: ["South Georgia and the South Sandwich Islands", "SGS"],
    ["GT" /* GT */]: ["Guatemala", "GTM"],
    ["GU" /* GU */]: ["Guam", "GUM"],
    ["GW" /* GW */]: ["Guinea-Bissau", "GNB"],
    ["GY" /* GY */]: ["Guyana", "GUY"],
    ["HK" /* HK */]: ["Hong Kong", "HKG"],
    ["HM" /* HM */]: ["Heard Island and McDonald Islands", "HMD"],
    ["HN" /* HN */]: ["Honduras", "HND"],
    ["HR" /* HR */]: ["Croatia", "HRV"],
    ["HT" /* HT */]: ["Haiti", "HTI"],
    ["HU" /* HU */]: ["Hungary", "HUN"],
    ["ID" /* ID */]: ["Indonesia", "IDN"],
    ["IE" /* IE */]: ["Ireland", "IRL"],
    ["IL" /* IL */]: ["Israel", "ISR"],
    ["IM" /* IM */]: ["Isle of Man", "IMN"],
    ["IN" /* IN */]: ["India", "IND"],
    ["IO" /* IO */]: ["British Indian Ocean Territory", "IOT"],
    ["IQ" /* IQ */]: ["Iraq", "IRQ"],
    ["IR" /* IR */]: ["Islamic Republic of Iran", "IRN"],
    ["IS" /* IS */]: ["Iceland", "ISL"],
    ["IT" /* IT */]: ["Italy", "ITA"],
    ["JE" /* JE */]: ["Jersey", "JEY"],
    ["JM" /* JM */]: ["Jamaica", "JAM"],
    ["JO" /* JO */]: ["Jordan", "JOR"],
    ["JP" /* JP */]: ["Japan", "JPN"],
    ["KE" /* KE */]: ["Kenya", "KEN"],
    ["KG" /* KG */]: ["Kyrgyzstan", "KGZ"],
    ["KH" /* KH */]: ["Cambodia", "KHM"],
    ["KI" /* KI */]: ["Kiribati", "KIR"],
    ["KM" /* KM */]: ["Comoros", "COM"],
    ["KN" /* KN */]: ["Saint Kitts and Nevis", "KNA"],
    ["KP" /* KP */]: ["Democratic People's Republic of Korea", "PRK"],
    ["KR" /* KR */]: ["Republic of Korea", "KOR"],
    ["KW" /* KW */]: ["Kuwait", "KWT"],
    ["KY" /* KY */]: ["Cayman Islands", "CYM"],
    ["KZ" /* KZ */]: ["Kazakhstan", "KAZ"],
    ["LA" /* LA */]: ["Lao People's Democratic Republic", "LAO"],
    ["LB" /* LB */]: ["Lebanon", "LBN"],
    ["LC" /* LC */]: ["Saint Lucia", "LCA"],
    ["LI" /* LI */]: ["Liechtenstein", "LIE"],
    ["LK" /* LK */]: ["Sri Lanka", "LKA"],
    ["LR" /* LR */]: ["Liberia", "LBR"],
    ["LS" /* LS */]: ["Lesotho", "LSO"],
    ["LT" /* LT */]: ["Lithuania", "LTU"],
    ["LU" /* LU */]: ["Luxembourg", "LUX"],
    ["LV" /* LV */]: ["Latvia", "LVA"],
    ["LY" /* LY */]: ["Libya", "LBY"],
    ["MA" /* MA */]: ["Morocco", "MAR"],
    ["MC" /* MC */]: ["Monaco", "MCO"],
    ["MD" /* MD */]: ["Republic of Moldova", "MDA"],
    ["ME" /* ME */]: ["Montenegro", "MNE"],
    ["MF" /* MF */]: ["Saint Martin", "MAF"],
    ["MG" /* MG */]: ["Madagascar", "MDG"],
    ["MH" /* MH */]: ["Marshall Islands", "MHL"],
    ["MK" /* MK */]: ["The former Yugoslav Republic of Macedonia", "MKD"],
    ["ML" /* ML */]: ["Mali", "MLI"],
    ["MM" /* MM */]: ["Myanmar", "MMR"],
    ["MN" /* MN */]: ["Mongolia", "MNG"],
    ["MO" /* MO */]: ["Macao", "MAC"],
    ["MP" /* MP */]: ["Northern Mariana Islands", "MNP"],
    ["MQ" /* MQ */]: ["Martinique", "MTQ"],
    ["MR" /* MR */]: ["Mauritania", "MRT"],
    ["MS" /* MS */]: ["Montserrat", "MSR"],
    ["MT" /* MT */]: ["Malta", "MLT"],
    ["MU" /* MU */]: ["Mauritius", "MUS"],
    ["MV" /* MV */]: ["Maldives", "MDV"],
    ["MW" /* MW */]: ["Malawi", "MWI"],
    ["MX" /* MX */]: ["Mexico", "MEX"],
    ["MY" /* MY */]: ["Malaysia", "MYS"],
    ["MZ" /* MZ */]: ["Mozambique", "MOZ"],
    ["NA" /* NA */]: ["Namibia", "NAM"],
    ["NC" /* NC */]: ["New Caledonia", "NCL"],
    ["NE" /* NE */]: ["Niger", "NER"],
    ["NF" /* NF */]: ["Norfolk Island", "NFK"],
    ["NG" /* NG */]: ["Nigeria", "NGA"],
    ["NI" /* NI */]: ["Nicaragua", "NIC"],
    ["NL" /* NL */]: ["Netherlands", "NLD"],
    ["NO" /* NO */]: ["Norway", "NOR"],
    ["NP" /* NP */]: ["Nepal", "NPL"],
    ["NR" /* NR */]: ["Nauru", "NRU"],
    ["NU" /* NU */]: ["Niue", "NIU"],
    ["NZ" /* NZ */]: ["New Zealand", "NZL"],
    ["OM" /* OM */]: ["Oman", "OMN"],
    ["PA" /* PA */]: ["Panama", "PAN"],
    ["PE" /* PE */]: ["Peru", "PER"],
    ["PF" /* PF */]: ["French Polynesia", "PYF"],
    ["PG" /* PG */]: ["Papua New Guinea", "PNG"],
    ["PH" /* PH */]: ["Philippines", "PHL"],
    ["PK" /* PK */]: ["Pakistan", "PAK"],
    ["PL" /* PL */]: ["Poland", "POL"],
    ["PM" /* PM */]: ["Saint Pierre and Miquelon", "SPM"],
    ["PN" /* PN */]: ["Pitcairn", "PCN"],
    ["PR" /* PR */]: ["Puerto Rico", "PRI"],
    ["PS" /* PS */]: ["Occupied Palestinian Territory", "PSE"],
    ["PT" /* PT */]: ["Portugal", "PRT"],
    ["PW" /* PW */]: ["Palau", "PLW"],
    ["PY" /* PY */]: ["Paraguay", "PRY"],
    ["QA" /* QA */]: ["Qatar", "QAT"],
    ["RE" /* RE */]: ["R\xE9union", "REU"],
    ["RO" /* RO */]: ["Romania", "ROU"],
    ["RS" /* RS */]: ["Serbia", "SRB"],
    ["RU" /* RU */]: ["Russian Federation", "RUS"],
    ["RW" /* RW */]: ["Rwanda", "RWA"],
    ["SA" /* SA */]: ["Saudi Arabia", "SAU"],
    ["SB" /* SB */]: ["Solomon Islands", "SLB"],
    ["SC" /* SC */]: ["Seychelles", "SYC"],
    ["SD" /* SD */]: ["Sudan", "SDN"],
    ["SE" /* SE */]: ["Sweden", "SWE"],
    ["SG" /* SG */]: ["Singapore", "SGP"],
    ["SH" /* SH */]: ["Saint Helena, Ascension and Tristan da Cunha", "SHN"],
    ["SI" /* SI */]: ["Slovenia", "SVN"],
    ["SJ" /* SJ */]: ["Svalbard and Jan Mayen", "SJM"],
    ["SK" /* SK */]: ["Slovakia", "SVK"],
    ["SL" /* SL */]: ["Sierra Leone", "SLE"],
    ["SM" /* SM */]: ["San Marino", "SMR"],
    ["SN" /* SN */]: ["Senegal", "SEN"],
    ["SO" /* SO */]: ["Somalia", "SOM"],
    ["SR" /* SR */]: ["Suriname", "SUR"],
    ["SS" /* SS */]: ["South Sudan", "SSD"],
    ["ST" /* ST */]: ["Sao Tome and Principe", "STP"],
    ["SV" /* SV */]: ["El Salvador", "SLV"],
    ["SX" /* SX */]: ["Sint Maarten", "SXM"],
    ["SY" /* SY */]: ["Syrian Arab Republic", "SYR"],
    ["SZ" /* SZ */]: ["Swaziland", "SWZ"],
    ["TC" /* TC */]: ["Turks and Caicos Islands", "TCA"],
    ["TD" /* TD */]: ["Chad", "TCD"],
    ["TF" /* TF */]: ["French Southern Territories", "ATF"],
    ["TG" /* TG */]: ["Togo", "TGO"],
    ["TH" /* TH */]: ["Thailand", "THA"],
    ["TJ" /* TJ */]: ["Tajikistan", "TJK"],
    ["TK" /* TK */]: ["Tokelau", "TKL"],
    ["TL" /* TL */]: ["Timor-Leste", "TLS"],
    ["TM" /* TM */]: ["Turkmenistan", "TKM"],
    ["TN" /* TN */]: ["Tunisia", "TUN"],
    ["TO" /* TO */]: ["Tonga", "TON"],
    ["TR" /* TR */]: ["Turkey", "TUR"],
    ["TT" /* TT */]: ["Trinidad and Tobago", "TTO"],
    ["TV" /* TV */]: ["Tuvalu", "TUV"],
    ["TW" /* TW */]: ["Taiwan, Province of China", "TWN"],
    ["TZ" /* TZ */]: ["United Republic of Tanzania", "TZA"],
    ["UA" /* UA */]: ["Ukraine", "UKR"],
    ["UG" /* UG */]: ["Uganda", "UGA"],
    ["UM" /* UM */]: ["United States Minor Outlying Islands", "UMI"],
    ["US" /* US */]: ["United States", "USA"],
    ["UY" /* UY */]: ["Uruguay", "URY"],
    ["UZ" /* UZ */]: ["Uzbekistan", "UZB"],
    ["VA" /* VA */]: ["Holy See", "VAT"],
    ["VC" /* VC */]: ["Saint Vincent and the Grenadines", "VCT"],
    ["VE" /* VE */]: ["Bolivarian Republic of Venezuela", "VEN"],
    ["VG" /* VG */]: ["British Virgin Islands", "VGB"],
    ["VI" /* VI */]: ["Virgin Islands, U.S.", "VIR"],
    ["VN" /* VN */]: ["Viet Nam", "VNM"],
    ["VU" /* VU */]: ["Vanuatu", "VUT"],
    ["WF" /* WF */]: ["Wallis and Futuna", "WLF"],
    ["WS" /* WS */]: ["Samoa", "WSM"],
    ["XK" /* XK */]: ["Kosovo", "UNK"],
    ["YE" /* YE */]: ["Yemen", "YEM"],
    ["YT" /* YT */]: ["Mayotte", "MYT"],
    ["ZA" /* ZA */]: ["South Africa", "ZAF"],
    ["ZM" /* ZM */]: ["Zambia", "ZMB"],
    ["ZW" /* ZW */]: ["Zimbabwe", "ZWE"],
  };
  var by2code = Object.entries(countryData).reduce((acc, [k, v]) => {
    acc[k] = [k, v];
    return acc;
  }, {});
  var by3code = Object.entries(countryData).reduce((acc, [k, v]) => {
    acc[v[1]] = [k, v];
    return acc;
  }, {});
  function countryByCode(code) {
    if (code === null) {
      return null;
    }
    let info;
    if (code.length === 3) {
      info = by3code[code];
    } else if (code.length === 2) {
      info = by2code[code];
    }
    if (info) {
      return info[0];
    }
    return null;
  }

  // src/randInt.ts
  function randInt(maxVal, minVal = 0) {
    return Math.floor(Math.random() * maxVal) + minVal;
  }

  // src/structurePart.ts
  var charByCharacterType = {
    [0 /* n */]: "0123456789",
    [1 /* a */]: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    [2 /* c */]: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    [3 /* e */]: " ",
  };
  var charByCharacterRE = {
    [0 /* n */]: /^[0-9]+$/,
    [1 /* a */]: /^[A-Z]+$/,
    [2 /* c */]: /^[0-9A-Za-z]+$/,
    [3 /* e */]: /^ +$/,
  };
  var BbanStructurePart = class _BbanStructurePart {
    constructor(entryType, characterType, length, trailingSeparator, generate) {
      this.entryType = entryType;
      this.characterType = characterType;
      this.length = length;
      this.generate = generate || this.defaultGenerator;
      this.hasGenerator = !!generate;
      this.trailingSeparator = trailingSeparator;
    }
    static bankCode(length, characterType, trailingSeparator = true) {
      return new _BbanStructurePart(0 /* BANK_CODE */, characterType, length, trailingSeparator);
    }
    static branchCode(length, characterType, trailingSeparator = true) {
      return new _BbanStructurePart(1 /* BRANCH_CODE */, characterType, length, trailingSeparator);
    }
    static accountNumber(length, characterType, trailingSeparator = true) {
      return new _BbanStructurePart(2 /* ACCOUNT_NUMBER */, characterType, length, trailingSeparator);
    }
    static nationalCheckDigit(length, characterType, generate, trailingSeparator = false) {
      return new _BbanStructurePart(4 /* NATIONAL_CHECK_DIGIT */, characterType, length, trailingSeparator, generate);
    }
    static branchCheckDigit(length, characterType, generate, trailingSeparator = false) {
      return new _BbanStructurePart(3 /* BRANCH_CHECK_DIGIT */, characterType, length, trailingSeparator, generate);
    }
    static accountType(length, characterType, trailingSeparator = false) {
      return new _BbanStructurePart(6 /* ACCOUNT_TYPE */, characterType, length, trailingSeparator);
    }
    static currencyType(length, characterType, trailingSeparator = false) {
      return new _BbanStructurePart(5 /* CURRENCY_TYPE */, characterType, length, trailingSeparator);
    }
    static ownerAccountNumber(length, characterType, trailingSeparator = true) {
      return new _BbanStructurePart(7 /* OWNER_ACCOUNT_NUMBER */, characterType, length, trailingSeparator);
    }
    static identificationNumber(length, characterType, trailingSeparator = true) {
      return new _BbanStructurePart(8 /* IDENTIFICATION_NUMBER */, characterType, length, trailingSeparator);
    }
    getPartType() {
      return this.entryType;
    }
    getCharacterType() {
      return this.characterType;
    }
    getLength() {
      return this.length;
    }
    /**
     *  Check to see if the string value is valid for the entry
     */
    validate(value) {
      return charByCharacterRE[this.characterType].test(value);
    }
    /**
     * Default generator to use -- just generate random sequence
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultGenerator(bban, structure) {
      const charChoices = charByCharacterType[this.characterType];
      const s = [];
      for (let i = 0; i < this.getLength(); i += 1) {
        s.push(charChoices[randInt(charChoices.length)]);
      }
      return s.join("");
    }
  };

  // src/exceptions.ts
  var FormatException = class _FormatException extends Error {
    constructor(formatViolation, msg, expected, actual) {
      super(msg);
      this.formatViolation = formatViolation;
      this.expected = expected;
      this.actual = actual;
      Object.setPrototypeOf(this, _FormatException.prototype);
    }
  };
  var UnsupportedCountryException = class _UnsupportedCountryException extends Error {
    constructor(msg, actual) {
      super(msg);
      this.actual = actual;
      Object.setPrototypeOf(this, _UnsupportedCountryException.prototype);
    }
  };
  var InvalidCheckDigitException = class _InvalidCheckDigitException extends Error {
    constructor(msg, expected, actual) {
      super(msg);
      this.expected = expected;
      this.actual = actual;
      Object.setPrototypeOf(this, _InvalidCheckDigitException.prototype);
    }
  };
  var RequiredPartTypeMissing = class _RequiredPartTypeMissing extends Error {
    constructor(msg) {
      super(msg);
      Object.setPrototypeOf(this, _RequiredPartTypeMissing.prototype);
    }
  };

  // src/bbanStructure.ts
  function mod11(value, weights) {
    return (
      (11 - (value.split("").reduce((acc, s, idx) => acc + parseInt(s, 10) * weights[idx % weights.length], 0) % 11)) %
      11
    );
  }
  function nationalES(bban, structure) {
    const weights = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];
    const combined = [0 /* BANK_CODE */, 1 /* BRANCH_CODE */].map((p) => structure.extractValueMust(bban, p)).join("");
    function to11(v) {
      if (v === 10) {
        return 1;
      } else if (v === 11) {
        return 0;
      }
      return v;
    }
    const d1 = to11(mod11(`00${combined}`, weights));
    const d2 = to11(mod11(structure.extractValueMust(bban, 2 /* ACCOUNT_NUMBER */), weights));
    return `${d1}${d2}`;
  }
  function nationalFR(bban, structure) {
    const replaceChars = {
      ["[AJ]"]: "1",
      ["[BKS]"]: "2",
      ["[CLT]"]: "3",
      ["[DMU]"]: "4",
      ["[ENV]"]: "5",
      ["[FOW]"]: "6",
      ["[GPX]"]: "7",
      ["[HQY]"]: "8",
      ["[IRZ]"]: "9",
    };
    let combined =
      [0 /* BANK_CODE */, 1 /* BRANCH_CODE */, 2 /* ACCOUNT_NUMBER */]
        .map((p) => String(structure.extractValue(bban, p)))
        .join("") + "00";
    Object.entries(replaceChars).map(([k, v]) => (combined = combined.replace(new RegExp(k, "g"), v)));
    const expected = 97 - combined.split("").reduce((acc, v) => (acc * 10 + parseInt(v)) % 97, 0);
    return String(expected).padStart(2, "0");
  }
  function nationalIT(bban, structure) {
    const even = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    const odd = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23];
    const V0 = "0".charCodeAt(0);
    const V9 = "9".charCodeAt(0);
    const VA = "A".charCodeAt(0);
    const value =
      [0 /* BANK_CODE */, 1 /* BRANCH_CODE */, 2 /* ACCOUNT_NUMBER */]
        .map((p) => structure.extractValueMust(bban, p))
        .join("")
        .split("")
        .map((v) => v.toUpperCase().charCodeAt(0))
        .map((v) => v - (V0 <= v && v <= V9 ? V0 : VA))
        .reduce((acc, v, idx) => acc + (idx % 2 === 0 ? odd[v] : even[v]), 0) % 26;
    return String.fromCharCode(VA + value);
  }
  function nationalNO(bban, structure) {
    const value = [0 /* BANK_CODE */, 2 /* ACCOUNT_NUMBER */].map((p) => structure.extractValueMust(bban, p)).join("");
    return String(mod11(value, [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]) % 10);
  }
  function nationalPT(bban, structure) {
    const V0 = "0".charCodeAt(0);
    const weights = [73, 17, 89, 38, 62, 45, 53, 15, 50, 5, 49, 34, 81, 76, 27, 90, 9, 30, 3];
    const remainder = [0 /* BANK_CODE */, 1 /* BRANCH_CODE */, 2 /* ACCOUNT_NUMBER */]
      .map((p) => structure.extractValueMust(bban, p))
      .join("")
      .split("")
      .map((v) => v.charCodeAt(0))
      .reduce((acc, v, idx) => (acc + (v - V0) * weights[idx]) % 97, 0);
    return String(98 - remainder).padStart(2, "0");
  }
  var BbanStructure = class _BbanStructure {
    static {
      this.bbanFR = new _BbanStructure(
        BbanStructurePart.bankCode(5, 0 /* n */),
        BbanStructurePart.branchCode(5, 0 /* n */),
        BbanStructurePart.accountNumber(11, 2 /* c */),
        BbanStructurePart.nationalCheckDigit(2, 0 /* n */, nationalFR),
      );
    }
    static {
      this.structures = {
        ["AD" /* AD */]: new _BbanStructure(
          // AD2!n4!n4!n12!c
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(12, 2 /* c */),
        ),
        ["AE" /* AE */]: new _BbanStructure(
          // AE2!n3!n16!n
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(16, 2 /* c */),
        ),
        ["AL" /* AL */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(1, 0 /* n */),
          BbanStructurePart.accountNumber(16, 2 /* c */),
        ),
        // Provisional
        ["AO" /* AO */]: new _BbanStructure(BbanStructurePart.accountNumber(21, 0 /* n */)),
        ["AT" /* AT */]: new _BbanStructure(
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(11, 0 /* n */),
        ),
        ["AZ" /* AZ */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(20, 2 /* c */),
        ),
        ["BA" /* BA */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.branchCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(8, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
        ),
        ["BE" /* BE */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(7, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */, (bban, structure) => {
            const accountNumber = structure.extractValue(bban, 2 /* ACCOUNT_NUMBER */);
            const bankCode = structure.extractValue(bban, 0 /* BANK_CODE */);
            if (accountNumber === null || bankCode === null) {
              throw new FormatException(2 /* NOT_EMPTY */, "account number or bank code missing");
            }
            const value = parseInt(`${bankCode}${accountNumber}`, 10);
            const remainder = Math.floor(value / 97);
            let expected = value - remainder * 97;
            if (expected === 0) {
              expected = 97;
            }
            return String(expected).padStart(2, "0");
          }),
        ),
        // Provisional
        ["BF" /* BF */]: new _BbanStructure(BbanStructurePart.accountNumber(23, 0 /* n */)),
        ["BG" /* BG */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.accountType(2, 0 /* n */),
          BbanStructurePart.accountNumber(8, 2 /* c */),
        ),
        ["BH" /* BH */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(14, 2 /* c */),
        ),
        // Provisional
        ["BI" /* BI */]: new _BbanStructure(
          // BI2!n5!n5!n11!n2!n
          //   Changed on October 21 (from 12!n)
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(11, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
          // BbanStructurePart.accountNumber(12, CharacterType.n),
        ),
        // Provisional
        ["BJ" /* BJ */]: new _BbanStructure(
          BbanStructurePart.bankCode(5, 2 /* c */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(12, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */, nationalFR),
        ),
        ["BR" /* BR */]: new _BbanStructure(
          BbanStructurePart.bankCode(8, 0 /* n */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(10, 0 /* n */),
          BbanStructurePart.accountType(1, 1 /* a */),
          BbanStructurePart.ownerAccountNumber(1, 2 /* c */),
        ),
        // https://www.nbrb.by/payment/ibanbic/ais-pbi_v2-7.pdf
        // 4c - symbolic code of the bank from the BIC directory (SI029);
        // 4n - balance sheet account according to the Chart of accounts of
        //      accounting in banks and non-bank financial institutions of the
        //      Republic of Belarus and according to the Chart of accounts of
        //      accounting in the National Bank. Corresponds to the directory of
        //      balance sheet accounts of RB banks (SI002) and the directory of
        //      balance sheet accounts of the National Bank (SI001)
        ["BY" /* BY */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 2 /* c */),
          BbanStructurePart.accountType(4, 0 /* n */),
          BbanStructurePart.accountNumber(16, 2 /* c */),
        ),
        // Provisional
        ["CF" /* CF */]: new _BbanStructure(
          BbanStructurePart.accountNumber(23, 0 /* n */),
          // @TODO is this france?
        ),
        // Provisional
        ["CG" /* CG */]: new _BbanStructure(
          BbanStructurePart.accountNumber(23, 0 /* n */),
          // @TODO is this france?
        ),
        ["CH" /* CH */]: new _BbanStructure(
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(12, 2 /* c */),
        ),
        // Provisional
        ["CI" /* CI */]: new _BbanStructure(
          BbanStructurePart.bankCode(2, 2 /* c */),
          BbanStructurePart.accountNumber(22, 0 /* n */),
        ),
        // Provisional
        ["CM" /* CM */]: new _BbanStructure(BbanStructurePart.accountNumber(23, 0 /* n */)),
        ["CR" /* CR */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(14, 0 /* n */),
        ),
        // Provisional
        ["CV" /* CV */]: new _BbanStructure(BbanStructurePart.accountNumber(21, 0 /* n */)),
        ["CY" /* CY */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(16, 2 /* c */),
        ),
        // Registry defines this as 4!n6!n10!n -- but does not discuss branch information
        // This is improved with info from
        //    https://www.cnb.cz/en/payments/iban/iban-international-bank-account-number-basic-information/
        ["CZ" /* CZ */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.branchCode(6, 0 /* n */),
          BbanStructurePart.accountNumber(10, 0 /* n */),
        ),
        ["DE" /* DE */]: new _BbanStructure(
          BbanStructurePart.bankCode(8, 0 /* n */),
          BbanStructurePart.accountNumber(10, 0 /* n */),
        ),
        // Provisional
        ["DJ" /* DJ */]: new _BbanStructure(
          // BI2!n5!n5!n11!n2!n
          //   Changed on May 22 (from France's standard)
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(11, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
        ),
        // Registry defines 4!n9!n1!n -- however no information on
        // nationalCheckDigit exist and all documentation discusses
        // that the account number is "10 digits"
        //
        //  This mentions checksum
        //    https://www.finanssiala.fi/maksujenvalitys/dokumentit/IBAN_in_payments.pdf
        ["DK" /* DK */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(10, 0 /* n */),
        ),
        ["DO" /* DO */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 2 /* c */),
          BbanStructurePart.accountNumber(20, 0 /* n */),
        ),
        // Provisional
        ["DZ" /* DZ */]: new _BbanStructure(BbanStructurePart.accountNumber(20, 0 /* n */)),
        ["EE" /* EE */]: new _BbanStructure(
          BbanStructurePart.bankCode(2, 0 /* n */),
          BbanStructurePart.branchCode(2, 0 /* n */),
          BbanStructurePart.accountNumber(11, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(1, 0 /* n */),
        ),
        ["EG" /* EG */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(17, 0 /* n */),
        ),
        // Spain is 4!n4!n1!n1!n10!n -- but the check digit is 2 digits?
        ["ES" /* ES */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */, nationalES),
          BbanStructurePart.accountNumber(10, 0 /* n */),
        ),
        // Additional details:
        //  https://www.finanssiala.fi/maksujenvalitys/dokumentit/IBAN_in_payments.pdf
        ["FI" /* FI */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(11, 0 /* n */),
        ),
        ["FK" /* FK */]: new _BbanStructure(
          // Added July 23
          BbanStructurePart.bankCode(2, 1 /* a */),
          BbanStructurePart.accountNumber(12, 0 /* n */),
        ),
        ["FO" /* FO */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(9, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(1, 0 /* n */),
        ),
        // FR IBAN covers:
        //  GF, GP, MQ, RE, PF, TF, YT, NC, BL, MF, PM, WF
        ["FR" /* FR */]: _BbanStructure.bbanFR,
        // Provisional
        ["GA" /* GA */]: _BbanStructure.bbanFR,
        // GB IBAN covers:
        //   IM, JE, GG
        ["GB" /* GB */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.branchCode(6, 0 /* n */),
          BbanStructurePart.accountNumber(8, 0 /* n */),
        ),
        ["GE" /* GE */]: new _BbanStructure(
          // Added Apr 23
          BbanStructurePart.bankCode(2, 1 /* a */),
          BbanStructurePart.accountNumber(16, 0 /* n */),
        ),
        ["GI" /* GI */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(15, 2 /* c */),
        ),
        // Same as DK (same issues)
        ["GL" /* GL */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(10, 0 /* n */),
        ),
        // Provisional
        ["GQ" /* GQ */]: _BbanStructure.bbanFR,
        ["GR" /* GR */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(16, 2 /* c */),
        ),
        ["GT" /* GT */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 2 /* c */),
          BbanStructurePart.currencyType(2, 0 /* n */),
          BbanStructurePart.accountType(2, 0 /* n */),
          BbanStructurePart.accountNumber(16, 2 /* c */),
        ),
        ["HR" /* HR */]: new _BbanStructure(
          BbanStructurePart.bankCode(7, 0 /* n */),
          BbanStructurePart.accountNumber(10, 0 /* n */),
        ),
        // Provisional
        ["HN" /* HN */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(20, 0 /* n */),
        ),
        // Spec says account number is 1!n15!n
        // no information on 1!n exists -- most likely a bank/branch check digit
        //  https://stackoverflow.com/questions/40282199/hungarian-bban-validation
        ["HU" /* HU */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.branchCheckDigit(1, 0 /* n */),
          BbanStructurePart.accountNumber(15, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(1, 0 /* n */),
        ),
        ["IE" /* IE */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.branchCode(6, 0 /* n */),
          BbanStructurePart.accountNumber(8, 0 /* n */),
        ),
        ["IL" /* IL */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.branchCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(13, 0 /* n */),
        ),
        ["IQ" /* IQ */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.branchCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(12, 0 /* n */),
        ),
        // Provisional
        ["IR" /* IR */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(19, 0 /* n */),
        ),
        ["IS" /* IS */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.branchCode(2, 0 /* n */),
          BbanStructurePart.accountNumber(6, 0 /* n */),
          BbanStructurePart.identificationNumber(10, 0 /* n */),
        ),
        ["IT" /* IT */]: new _BbanStructure(
          BbanStructurePart.nationalCheckDigit(1, 1 /* a */, nationalIT),
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(12, 2 /* c */),
        ),
        ["JO" /* JO */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(18, 2 /* c */),
        ),
        // Provisional
        ["KM" /* KM */]: new _BbanStructure(BbanStructurePart.accountNumber(23, 0 /* n */)),
        ["KW" /* KW */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(22, 2 /* c */),
        ),
        ["KZ" /* KZ */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(13, 2 /* c */),
        ),
        ["LB" /* LB */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(20, 2 /* c */),
        ),
        ["LC" /* LC */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(24, 0 /* n */),
        ),
        ["LI" /* LI */]: new _BbanStructure(
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(12, 2 /* c */),
        ),
        ["LT" /* LT */]: new _BbanStructure(
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(11, 0 /* n */),
        ),
        ["LU" /* LU */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(13, 2 /* c */),
        ),
        ["LV" /* LV */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(13, 2 /* c */),
        ),
        ["LY" /* LY */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.branchCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(15, 0 /* n */),
        ),
        // Provisional
        ["MA" /* MA */]: new _BbanStructure(BbanStructurePart.accountNumber(24, 0 /* n */)),
        ["MC" /* MC */]: new _BbanStructure(
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(11, 2 /* c */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */, nationalFR),
        ),
        ["MD" /* MD */]: new _BbanStructure(
          BbanStructurePart.bankCode(2, 2 /* c */),
          BbanStructurePart.accountNumber(18, 2 /* c */),
        ),
        ["ME" /* ME */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(13, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
          // @TODO checkdigit
        ),
        // Provisional
        ["MG" /* MG */]: new _BbanStructure(
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(11, 2 /* c */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
        ),
        ["MK" /* MK */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(10, 2 /* c */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
          // @TODO checkdigit
        ),
        // Provisional
        ["ML" /* ML */]: new _BbanStructure(
          BbanStructurePart.bankCode(1, 1 /* a */),
          BbanStructurePart.accountNumber(25, 0 /* n */),
        ),
        ["MN" /* MN */]: new _BbanStructure(
          // MN2!n4!n12!n
          //   Added April 2023
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(12, 0 /* n */),
        ),
        ["MR" /* MR */]: new _BbanStructure(
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(11, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
        ),
        ["MT" /* MT */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(18, 2 /* c */),
        ),
        // Spec: 4!a2!n2!n12!n3!n3!a
        //  No docs on the last 3!n -- assuming account type
        //  all found IBANs have '000'
        ["MU" /* MU */]: new _BbanStructure(
          BbanStructurePart.bankCode(6, 2 /* c */),
          // 4!a2!n
          BbanStructurePart.branchCode(2, 0 /* n */),
          BbanStructurePart.accountNumber(12, 2 /* c */),
          BbanStructurePart.accountType(3, 0 /* n */),
          BbanStructurePart.currencyType(3, 1 /* a */),
        ),
        // Provisional
        ["MZ" /* MZ */]: new _BbanStructure(BbanStructurePart.accountNumber(21, 0 /* n */)),
        // Provisional
        ["NE" /* NE */]: new _BbanStructure(
          BbanStructurePart.bankCode(2, 1 /* a */),
          BbanStructurePart.accountNumber(22, 0 /* n */),
        ),
        ["NI" /* NI */]: new _BbanStructure(
          // NI2!n4!a20!n
          //   Added April 2023
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(20, 0 /* n */),
        ),
        ["NL" /* NL */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(10, 0 /* n */),
        ),
        ["NO" /* NO */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(6, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(1, 0 /* n */, nationalNO),
        ),
        ["PK" /* PK */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 2 /* c */),
          BbanStructurePart.accountNumber(16, 2 /* c */),
        ),
        // 8!n16!n
        ["PL" /* PL */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(1, 0 /* n */),
          BbanStructurePart.accountNumber(16, 0 /* n */),
        ),
        ["PS" /* PS */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(21, 2 /* c */),
        ),
        ["PT" /* PT */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(11, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */, nationalPT),
        ),
        ["QA" /* QA */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(21, 2 /* c */),
        ),
        ["RO" /* RO */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(16, 2 /* c */),
        ),
        ["RS" /* RS */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(13, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
        ),
        ["RU" /* RU */]: new _BbanStructure(
          // RU2!n9!n5!n15!c
          //   Added May 2022
          BbanStructurePart.bankCode(9, 0 /* n */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(15, 2 /* c */),
        ),
        ["SA" /* SA */]: new _BbanStructure(
          BbanStructurePart.bankCode(2, 0 /* n */),
          BbanStructurePart.accountNumber(18, 2 /* c */),
        ),
        ["SC" /* SC */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.branchCode(2, 0 /* n */),
          BbanStructurePart.branchCheckDigit(2, 0 /* n */),
          BbanStructurePart.accountNumber(16, 0 /* n */),
          BbanStructurePart.currencyType(3, 1 /* a */),
        ),
        ["SD" /* SD */]: new _BbanStructure(
          // SD2!n2!n12!n
          //  Added October 2021
          BbanStructurePart.bankCode(2, 0 /* n */),
          BbanStructurePart.accountNumber(12, 0 /* n */),
        ),
        ["SE" /* SE */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(16, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(1, 0 /* n */),
        ),
        ["SI" /* SI */]: new _BbanStructure(
          BbanStructurePart.bankCode(2, 0 /* n */),
          BbanStructurePart.branchCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(8, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
        ),
        ["SK" /* SK */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(16, 0 /* n */),
        ),
        ["SM" /* SM */]: new _BbanStructure(
          BbanStructurePart.nationalCheckDigit(1, 1 /* a */, nationalIT),
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(12, 2 /* c */),
        ),
        // Provisional
        ["SN" /* SN */]: new _BbanStructure(
          BbanStructurePart.bankCode(5, 2 /* c */),
          BbanStructurePart.branchCode(5, 0 /* n */),
          BbanStructurePart.accountNumber(14, 0 /* n */),
        ),
        ["SO" /* SO */]: new _BbanStructure(
          // SO2!n4!n3!n12!n
          //   Added Feb 2023
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.branchCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(12, 0 /* n */),
        ),
        ["ST" /* ST */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 0 /* n */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(13, 0 /* n */),
        ),
        ["SV" /* SV */]: new _BbanStructure(
          // SV2!n4!a20!n
          //  Added March 2021
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.branchCode(4, 0 /* n */),
          BbanStructurePart.accountNumber(16, 0 /* n */),
        ),
        // Provisional
        ["TG" /* TG */]: new _BbanStructure(
          BbanStructurePart.bankCode(2, 1 /* a */),
          BbanStructurePart.accountNumber(22, 0 /* n */),
        ),
        // Provisional
        ["TD" /* TD */]: new _BbanStructure(
          BbanStructurePart.accountNumber(23, 0 /* n */),
          // @TODO is this france?
        ),
        ["TL" /* TL */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(14, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
        ),
        ["TN" /* TN */]: new _BbanStructure(
          BbanStructurePart.bankCode(2, 0 /* n */),
          BbanStructurePart.branchCode(3, 0 /* n */),
          BbanStructurePart.accountNumber(13, 2 /* c */),
          BbanStructurePart.nationalCheckDigit(2, 2 /* c */),
        ),
        ["TR" /* TR */]: new _BbanStructure(
          BbanStructurePart.bankCode(5, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(1, 2 /* c */),
          BbanStructurePart.accountNumber(16, 2 /* c */),
        ),
        ["UA" /* UA */]: new _BbanStructure(
          BbanStructurePart.bankCode(6, 0 /* n */),
          BbanStructurePart.accountNumber(19, 0 /* n */),
        ),
        ["VA" /* VA */]: new _BbanStructure(
          BbanStructurePart.bankCode(3, 2 /* c */),
          BbanStructurePart.accountNumber(15, 0 /* n */),
        ),
        ["VG" /* VG */]: new _BbanStructure(
          BbanStructurePart.bankCode(4, 1 /* a */),
          BbanStructurePart.accountNumber(16, 0 /* n */),
        ),
        ["XK" /* XK */]: new _BbanStructure(
          BbanStructurePart.bankCode(2, 0 /* n */),
          BbanStructurePart.branchCode(2, 0 /* n */),
          BbanStructurePart.accountNumber(10, 0 /* n */),
          BbanStructurePart.nationalCheckDigit(2, 0 /* n */),
        ),
      };
    }
    constructor(...entries) {
      this.entries = entries;
    }
    getParts() {
      return this.entries;
    }
    validate(bban) {
      this.validateBbanLength(bban);
      this.validateBbanEntries(bban);
    }
    extractValue(bban, partType) {
      let bbanPartOffset = 0;
      let result = null;
      for (const part of this.getParts()) {
        const partLength = part.getLength();
        const partValue = bban.substring(bbanPartOffset, bbanPartOffset + partLength);
        bbanPartOffset = bbanPartOffset + partLength;
        if (part.getPartType() == partType) {
          result = (result || "") + partValue;
        }
      }
      return result;
    }
    /**
     * Return part type or fail
     */
    extractValueMust(bban, partType) {
      const value = this.extractValue(bban, partType);
      if (value === null) {
        throw new RequiredPartTypeMissing(`Required part type [${partType}] missing`);
      }
      return value;
    }
    /**
     * @param countryCode the country code.
     * @return BbanStructure for specified country or null if country is not supported.
     */
    static forCountry(countryCode) {
      if (!countryCode) {
        return null;
      }
      return this.structures[countryCode] || null;
    }
    static getEntries() {
      return Object.values(this.structures);
    }
    static supportedCountries() {
      return Object.keys(this.structures);
    }
    /**
     * Returns the length of bban.
     *
     * @return int length
     */
    getBbanLength() {
      return this.entries.reduce((acc, e) => acc + e.getLength(), 0);
    }
    validateBbanLength(bban) {
      const expectedBbanLength = this.getBbanLength();
      const bbanLength = bban.length;
      if (expectedBbanLength != bbanLength) {
        throw new FormatException(
          14 /* BBAN_LENGTH */,
          `[${bban}] length is ${bbanLength}, expected BBAN length is: ${expectedBbanLength}`,
          String(bbanLength),
          String(expectedBbanLength),
        );
      }
    }
    validateBbanEntries(bban) {
      let offset = 0;
      for (const part of this.getParts()) {
        const partLength = part.getLength();
        const entryValue = bban.substring(offset, offset + partLength);
        offset = offset + partLength;
        this.validateBbanEntryCharacterType(bban, part, entryValue);
      }
    }
    validateBbanEntryCharacterType(bban, part, entryValue) {
      if (!part.validate(entryValue)) {
        switch (part.getCharacterType()) {
          case 1 /* a */:
            throw new FormatException(
              15 /* BBAN_ONLY_UPPER_CASE_LETTERS */,
              `[${entryValue}] must contain only upper case letters.`,
              entryValue,
            );
          case 2 /* c */:
            throw new FormatException(
              16 /* BBAN_ONLY_DIGITS_OR_LETTERS */,
              `[${entryValue}] must contain only digits or letters.`,
              entryValue,
            );
          case 0 /* n */:
            throw new FormatException(
              17 /* BBAN_ONLY_DIGITS */,
              `[${entryValue}] must contain only digits.`,
              entryValue,
            );
        }
      }
      if (part.getPartType() === 4 /* NATIONAL_CHECK_DIGIT */ && part.hasGenerator) {
        const expected = part.generate(bban, this);
        if (entryValue !== expected) {
          throw new FormatException(
            11 /* NATIONAL_CHECK_DIGIT */,
            `national check digit(s) don't match expect=[${expected}] actual=[${entryValue}]`,
            expected,
            entryValue,
          );
        }
      }
    }
  };

  // src/ibanUtil.ts
  var ucRegex = /^[A-Z]+$/;
  var numRegex = /^[0-9]+$/;
  var DEFAULT_CHECK_DIGIT = "00";
  var MOD = 97;
  var MAX = 999999999;
  var COUNTRY_CODE_INDEX = 0;
  var COUNTRY_CODE_LENGTH = 2;
  var CHECK_DIGIT_INDEX = COUNTRY_CODE_LENGTH;
  var CHECK_DIGIT_LENGTH = 2;
  var BBAN_INDEX = CHECK_DIGIT_INDEX + CHECK_DIGIT_LENGTH;
  function calculateCheckDigit(iban) {
    const reformattedIban = replaceCheckDigit(iban, DEFAULT_CHECK_DIGIT);
    const modResult = calculateMod(reformattedIban);
    const checkDigit = String(98 - modResult);
    return checkDigit.padStart(2, "0");
  }
  function validate(iban) {
    validateNotEmpty(iban);
    validateCountryCode(iban, true);
    validateCheckDigitPresence(iban);
    validateBban(getCountryCode(iban), getBban(iban));
    validateCheckDigitChecksum(iban);
  }
  function validateBban(countryCode, bban) {
    validateCountryCode(countryCode, true);
    const structure = getBbanStructure(countryCode);
    if (!structure) {
      throw new Error("Internal error, expected structure");
    }
    structure.validate(bban);
  }
  function getCheckDigit(iban) {
    return iban.substring(CHECK_DIGIT_INDEX, CHECK_DIGIT_INDEX + CHECK_DIGIT_LENGTH);
  }
  function getCountryCode(iban) {
    return iban.substring(COUNTRY_CODE_INDEX, COUNTRY_CODE_INDEX + COUNTRY_CODE_LENGTH);
  }
  function getCountryCodeAndCheckDigit(iban) {
    return iban.substring(COUNTRY_CODE_INDEX, COUNTRY_CODE_INDEX + COUNTRY_CODE_LENGTH + CHECK_DIGIT_LENGTH);
  }
  function getBban(iban) {
    return iban.substring(BBAN_INDEX);
  }
  function getAccountNumber(iban) {
    return extractBbanEntry(iban, 2 /* ACCOUNT_NUMBER */);
  }
  function getBankCode(iban) {
    return extractBbanEntry(iban, 0 /* BANK_CODE */);
  }
  function getBranchCode(iban) {
    return extractBbanEntry(iban, 1 /* BRANCH_CODE */);
  }
  function getNationalCheckDigit(iban) {
    return extractBbanEntry(iban, 4 /* NATIONAL_CHECK_DIGIT */);
  }
  function getBranchCheckDigit(iban) {
    return extractBbanEntry(iban, 3 /* BRANCH_CHECK_DIGIT */);
  }
  function getCurrencyType(iban) {
    return extractBbanEntry(iban, 5 /* CURRENCY_TYPE */);
  }
  function getAccountType(iban) {
    return extractBbanEntry(iban, 6 /* ACCOUNT_TYPE */);
  }
  function getOwnerAccountType(iban) {
    return extractBbanEntry(iban, 7 /* OWNER_ACCOUNT_NUMBER */);
  }
  function getIdentificationNumber(iban) {
    return extractBbanEntry(iban, 8 /* IDENTIFICATION_NUMBER */);
  }
  function replaceCheckDigit(iban, checkDigit) {
    return getCountryCode(iban) + checkDigit + getBban(iban);
  }
  function toFormattedString(iban, separator = " ") {
    return iban.replace(/(.{4})/g, `$1${separator}`).trim();
  }
  function toFormattedStringBBAN(iban, separator = " ") {
    const structure = getBbanStructure(iban);
    if (structure === null) {
      throw new Error("should't happen - already validated IBAN");
    }
    const bban = getBban(iban);
    const parts = structure.getParts().reduce((acc, part) => {
      const value = structure.extractValue(bban, part.getPartType());
      return acc.concat(value || "", part.trailingSeparator ? separator : "");
    }, []);
    parts.pop();
    return parts.join("");
  }
  function validateCheckDigitChecksum(iban) {
    if (calculateMod(iban) != 1) {
      const checkDigit = getCheckDigit(iban);
      const expectedCheckDigit = calculateCheckDigit(iban);
      throw new InvalidCheckDigitException(
        `[${iban}] has invalid check digit: ${checkDigit}, expected check digit is: ${expectedCheckDigit}`,
        checkDigit,
        expectedCheckDigit,
      );
    }
  }
  function validateNotEmpty(iban) {
    if (iban == null) {
      throw new FormatException(1 /* NOT_NULL */, "Null can't be a valid Iban.");
    }
    if (iban.length === 0) {
      throw new FormatException(2 /* NOT_EMPTY */, "Empty string can't be a valid Iban.");
    }
  }
  function validateCountryCode(iban, hasStructure = true) {
    if (iban.length < COUNTRY_CODE_LENGTH) {
      throw new FormatException(8 /* COUNTRY_CODE_TWO_LETTERS */, "Iban must contain 2 char country code.", iban);
    }
    const countryCode = getCountryCode(iban);
    if (countryCode !== countryCode.toUpperCase() || !ucRegex.test(countryCode)) {
      throw new FormatException(
        9 /* COUNTRY_CODE_ONLY_UPPER_CASE_LETTERS */,
        "Iban country code must contain upper case letters.",
        countryCode,
      );
    }
    const country = countryByCode(countryCode);
    if (country == null) {
      throw new FormatException(10 /* COUNTRY_CODE_EXISTS */, "Iban contains non existing country code.", countryCode);
    }
    if (hasStructure) {
      const structure = BbanStructure.forCountry(country);
      if (structure == null) {
        throw new UnsupportedCountryException("Country code is not supported.", countryCode);
      }
    }
  }
  function validateCheckDigitPresence(iban) {
    if (iban.length < COUNTRY_CODE_LENGTH + CHECK_DIGIT_LENGTH) {
      throw new FormatException(
        12 /* CHECK_DIGIT_TWO_DIGITS */,
        "Iban must contain 2 digit check digit.",
        iban.substring(COUNTRY_CODE_LENGTH),
      );
    }
    const checkDigit = getCheckDigit(iban);
    if (!numRegex.test(checkDigit)) {
      throw new FormatException(
        13 /* CHECK_DIGIT_ONLY_DIGITS */,
        "Iban's check digit should contain only digits.",
        checkDigit,
      );
    }
  }
  function calculateMod(iban) {
    const reformattedIban = getBban(iban) + getCountryCodeAndCheckDigit(iban);
    const VA = "A".charCodeAt(0);
    const VZ = "Z".charCodeAt(0);
    const V0 = "0".charCodeAt(0);
    const V9 = "9".charCodeAt(0);
    function addSum(total2, value) {
      const newTotal = (value > 9 ? total2 * 100 : total2 * 10) + value;
      return newTotal > MAX ? newTotal % MOD : newTotal;
    }
    const total = reformattedIban
      .toUpperCase()
      .split("")
      .reduce((totalValue, ch) => {
        const code = ch.charCodeAt(0);
        if (VA <= code && code <= VZ) {
          return addSum(totalValue, code - VA + 10);
        } else if (V0 <= code && code <= V9) {
          return addSum(totalValue, code - V0);
        } else {
          throw new FormatException(18 /* IBAN_VALID_CHARACTERS */, `Invalid Character[${ch}] = '${code}'`, ch);
        }
      }, 0);
    return total % MOD;
  }
  function getBbanStructure(iban) {
    const countryCode = countryByCode(getCountryCode(iban));
    if (!countryCode) {
      return null;
    }
    return getBbanStructureByCountry(countryCode);
  }
  function getBbanStructureByCountry(countryCode) {
    return BbanStructure.forCountry(countryCode);
  }
  function extractBbanEntry(iban, partType) {
    const bban = getBban(iban);
    const structure = getBbanStructure(iban);
    if (structure === null) {
      return null;
    }
    return structure.extractValue(bban, partType);
  }

  // src/ibanBuilder.ts
  var IBANBuilder = class {
    /**
     * Creates an Iban Builder instance.
     */
    // public constructor() {}
    /**
     * Sets iban's country code.
     *
     * @param countryCode CountryCode
     * @return builder Builder
     */
    countryCode(countryCode) {
      this.countryCodeValue = countryCode;
      return this;
    }
    /**
     * Sets iban's bank code.
     *
     * @param bankCode String
     * @return builder Builder
     */
    bankCode(bankCode) {
      this.bankCodeValue = bankCode;
      return this;
    }
    /**
     * Sets iban's branch code.
     *
     * @param branchCode String
     * @return builder Builder
     */
    branchCode(branchCode) {
      this.branchCodeValue = branchCode;
      return this;
    }
    /**
     * Sets iban's account number.
     *
     * @param accountNumber String
     * @return builder Builder
     */
    accountNumber(accountNumber) {
      this.accountNumberValue = accountNumber;
      return this;
    }
    /**
     * Sets iban's national check digit.
     *
     * @param nationalCheckDigit String
     * @return builder Builder
     */
    nationalCheckDigit(nationalCheckDigit) {
      this.nationalCheckDigitValue = nationalCheckDigit;
      return this;
    }
    /**
     * Sets iban's national check digit.
     *
     * @param nationalCheckDigit String
     * @return builder Builder
     */
    branchCheckDigit(branchCheckDigit) {
      this.branchCheckDigitValue = branchCheckDigit;
      return this;
    }
    /**
     * Sets iban's account type.
     *
     * @param accountType String
     * @return builder Builder
     */
    accountType(accountType) {
      this.accountTypeValue = accountType;
      return this;
    }
    /**
     * Sets iban's owner account type.
     *
     * @param ownerAccountType String
     * @return builder Builder
     */
    ownerAccountType(ownerAccountType) {
      this.ownerAccountTypeValue = ownerAccountType;
      return this;
    }
    /**
     * Sets iban's identification number.
     *
     * @param identificationNumber String
     * @return builder Builder
     */
    identificationNumber(identificationNumber) {
      this.identificationNumberValue = identificationNumber;
      return this;
    }
    /**
     * Builds new iban instance.
     *
     * @param validate boolean indicates if the generated IBAN needs to be
     *  validated after generation
     * @return new iban instance.
     * @exception IbanFormatException if values are not parsable by Iban Specification
     *  <a href="http://en.wikipedia.org/wiki/ISO_13616">ISO_13616</a>
     * @exception UnsupportedCountryException if country is not supported
     */
    build(fillRandom = true, validate3 = true) {
      if (fillRandom && this.countryCodeValue == null) {
        const countryCodes = BbanStructure.supportedCountries();
        this.countryCodeValue = countryCodes[randInt(countryCodes.length)];
      }
      const structure = BbanStructure.forCountry(this.countryCodeValue);
      if (structure === null) {
        throw new Error("shouldn't happen");
      }
      this.fillMissingFieldsRandomly(fillRandom);
      const formattedIban = this.formatIban();
      const checkDigit = calculateCheckDigit(formattedIban);
      const ibanValue = replaceCheckDigit(formattedIban, checkDigit);
      if (validate3) {
        validate(ibanValue);
      }
      return new IBAN(ibanValue);
    }
    /**
     * Returns formatted bban string.
     */
    formatBban() {
      const parts = [];
      const structure = BbanStructure.forCountry(this.countryCodeValue);
      if (structure === null) {
        throw new UnsupportedCountryException("Country code is not supported.", this.countryCodeValue);
      }
      for (const part of structure.getParts()) {
        switch (part.getPartType()) {
          case 0 /* BANK_CODE */:
            if (typeof this.bankCodeValue === "string") {
              parts.push(this.bankCodeValue);
            }
            break;
          case 1 /* BRANCH_CODE */:
            if (typeof this.branchCodeValue === "string") {
              parts.push(this.branchCodeValue);
            }
            break;
          case 3 /* BRANCH_CHECK_DIGIT */:
            if (typeof this.branchCheckDigitValue === "string") {
              parts.push(this.branchCheckDigitValue);
            }
            break;
          case 2 /* ACCOUNT_NUMBER */:
            if (typeof this.accountNumberValue === "string") {
              parts.push(this.accountNumberValue);
            }
            break;
          case 4 /* NATIONAL_CHECK_DIGIT */:
            if (typeof this.nationalCheckDigitValue === "string") {
              parts.push(this.nationalCheckDigitValue);
            }
            break;
          case 6 /* ACCOUNT_TYPE */:
            if (typeof this.accountTypeValue === "string") {
              parts.push(this.accountTypeValue);
            }
            break;
          case 7 /* OWNER_ACCOUNT_NUMBER */:
            if (typeof this.ownerAccountTypeValue === "string") {
              parts.push(this.ownerAccountTypeValue);
            }
            break;
          case 8 /* IDENTIFICATION_NUMBER */:
            if (typeof this.identificationNumberValue === "string") {
              parts.push(this.identificationNumberValue);
            }
            break;
        }
      }
      return parts.join("");
    }
    /**
     * Returns formatted iban string with default check digit.
     */
    formatIban() {
      return `${this.countryCodeValue}${DEFAULT_CHECK_DIGIT}${this.formatBban()}`;
    }
    fillMissingFieldsRandomly(fillRandom) {
      const structure = BbanStructure.forCountry(this.countryCodeValue);
      if (structure == null) {
        throw new UnsupportedCountryException("Country code is not supported.", this.countryCodeValue);
      }
      let needCheckDigit = false;
      for (const entry of structure.getParts()) {
        switch (entry.getPartType()) {
          case 0 /* BANK_CODE */:
            if (!this.bankCodeValue) {
              this.bankCodeValue = entry.generate("", structure);
            } else if (!fillRandom) {
              throw new FormatException(1 /* NOT_NULL */, "bankCode is required; it cannot be null");
            }
            break;
          case 1 /* BRANCH_CODE */:
            if (!this.branchCodeValue) {
              this.branchCodeValue = entry.generate("", structure);
            } else if (!fillRandom) {
              throw new FormatException(1 /* NOT_NULL */, "branchCode is required; it cannot be null");
            }
            break;
          case 3 /* BRANCH_CHECK_DIGIT */:
            if (!this.branchCheckDigitValue) {
              this.branchCheckDigitValue = entry.generate("", structure);
            } else if (!fillRandom) {
              throw new FormatException(1 /* NOT_NULL */, "branchCheckDigit is required; it cannot be null");
            }
            break;
          case 2 /* ACCOUNT_NUMBER */:
            if (!this.accountNumberValue) {
              this.accountNumberValue = entry.generate("", structure);
            } else if (!fillRandom) {
              throw new FormatException(1 /* NOT_NULL */, "accountNumber is required; it cannot be null");
            }
            break;
          case 4 /* NATIONAL_CHECK_DIGIT */:
            if (!this.nationalCheckDigitValue) {
              needCheckDigit = true;
              this.nationalCheckDigitValue = "".padStart(entry.getLength(), "0");
            }
            break;
          case 6 /* ACCOUNT_TYPE */:
            if (!this.accountTypeValue) {
              this.accountTypeValue = entry.generate("", structure);
            } else if (!fillRandom) {
              throw new FormatException(1 /* NOT_NULL */, "accountType is required; it cannot be null");
            }
            break;
          case 7 /* OWNER_ACCOUNT_NUMBER */:
            if (!this.ownerAccountTypeValue) {
              this.ownerAccountTypeValue = entry.generate("", structure);
            } else if (!fillRandom) {
              throw new FormatException(1 /* NOT_NULL */, "ownerAccountType is required; it cannot be null");
            }
            break;
          case 8 /* IDENTIFICATION_NUMBER */:
            if (!this.identificationNumberValue) {
              this.identificationNumberValue = entry.generate("", structure);
            } else if (!fillRandom) {
              throw new FormatException(1 /* NOT_NULL */, "indentificationNumber is required; it cannot be null");
            }
            break;
        }
      }
      if (needCheckDigit) {
        for (const entry of structure.getParts()) {
          if (entry.getPartType() === 4 /* NATIONAL_CHECK_DIGIT */) {
            const bban = this.formatBban();
            this.nationalCheckDigitValue = entry.generate(bban, structure);
          }
        }
      }
    }
  };

  // src/iban.ts
  var NON_ALPHANUM = /[^a-z0-9]/gi;
  var samples = {
    AD: "AD1200012030200359100100",
    AE: "AE070331234567890123456",
    AL: "AL47212110090000000235698741",
    AT: "AT611904300234573201",
    AZ: "AZ21NABZ00000000137010001944",
    BA: "BA391990440001200279",
    BE: "BE68539007547034",
    BG: "BG80BNBG96611020345678",
    BH: "BH67BMAG00001299123456",
    BR: "BR9700360305000010009795493P1",
    BY: "BY13NBRB3600900000002Z00AB00",
    CH: "CH9300762011623852957",
    CR: "CR05015202001026284066",
    CY: "CY17002001280000001200527600",
    CZ: "CZ6508000000192000145399",
    DE: "DE89370400440532013000",
    DK: "DK5000400440116243",
    DO: "DO28BAGR00000001212453611324",
    EE: "EE382200221020145685",
    ES: "ES9121000418450200051332",
    FI: "FI2112345600000785",
    FO: "FO6264600001631634",
    FR: "FR1420041010050500013M02606",
    GB: "GB29NWBK60161331926819",
    GE: "GE29NB0000000101904917",
    GI: "GI75NWBK000000007099453",
    GL: "GL8964710001000206",
    GR: "GR1601101250000000012300695",
    GT: "GT82TRAJ01020000001210029690",
    HR: "HR1210010051863000160",
    HU: "HU42117730161111101800000000",
    IE: "IE29AIBK93115212345678",
    IL: "IL620108000000099999999",
    IQ: "IQ98NBIQ850123456789012",
    IS: "IS140159260076545510730339",
    IT: "IT60X0542811101000000123456",
    JO: "JO94CBJO0010000000000131000302",
    KW: "KW81CBKU0000000000001234560101",
    KZ: "KZ86125KZT5004100100",
    LB: "LB62099900000001001901229114",
    LC: "LC07HEMM000100010012001200013015",
    LI: "LI21088100002324013AA",
    LT: "LT121000011101001000",
    LU: "LU280019400644750000",
    LV: "LV80BANK0000435195001",
    MC: "MC5811222000010123456789030",
    MD: "MD24AG000225100013104168",
    ME: "ME25505000012345678951",
    MK: "MK07250120000058984",
    MR: "MR1300020001010000123456753",
    MT: "MT84MALT011000012345MTLCAST001S",
    MU: "MU17BOMM0101101030300200000MUR",
    NL: "NL91ABNA0417164300",
    NO: "NO9386011117947",
    PK: "PK36SCBL0000001123456702",
    PL: "PL61109010140000071219812874",
    PS: "PS92PALS000000000400123456702",
    PT: "PT50000201231234567890154",
    QA: "QA58DOHB00001234567890ABCDEFG",
    RO: "RO49AAAA1B31007593840000",
    RS: "RS35260005601001611379",
    SA: "SA0380000000608010167519",
    SC: "SC18SSCB11010000000000001497USD",
    SE: "SE4550000000058398257466",
    SI: "SI56263300012039086",
    SK: "SK3112000000198742637541",
    SM: "SM86U0322509800000000270100",
    ST: "ST68000100010051845310112",
    SV: "SV62CENR00000000000000700025",
    TL: "TL380080012345678910157",
    TN: "TN5910006035183598478831",
    TR: "TR330006100519786457841326",
    UA: "UA213223130000026007233566001",
    VA: "VA59001123000012345678",
    VG: "VG96VPVG0000012345678901",
    XK: "XK051212012345678906",
    AO: "AO69123456789012345678901",
    BF: "BF2312345678901234567890123",
    BI: "BI41123456789012",
    BJ: "BJ11B00610100400271101192591",
    CF: "CF4220001000010120069700160",
    CI: "CI93CI0080111301134291200589",
    CM: "CM9012345678901234567890123",
    CV: "CV30123456789012345678901",
    DJ: "DJ2110002010010409943020008",
    DZ: "DZ8612345678901234567890",
    GQ: "GQ7050002001003715228190196",
    HN: "HN54PISA00000000000000123124",
    IR: "IR861234568790123456789012",
    MG: "MG1812345678901234567890123",
    ML: "ML15A12345678901234567890123",
    MZ: "MZ25123456789012345678901",
    SN: "SN52A12345678901234567890123",
    KM: "KM4600005000010010904400137",
    TD: "TD8960002000010271091600153",
    CG: "CG3930011000101013451300019",
    EG: "EG800002000156789012345180002",
    GA: "GA2140021010032001890020126",
    MA: "MA64011519000001205000534921",
    NI: "NI92BAMC000000000000000003123123",
    NE: "NE58NE0380100100130305000268",
    TG: "TG53TG0090604310346500400070",
  };
  var IBAN = class _IBAN {
    /**
     * Creates iban instance.
     *
     * @param iban the String to be parsed, any spaces are removed.
     * @throws FormatException if the String doesn't contain parsable Iban
     *         InvalidCheckDigitException if Iban has invalid check digit
     *         UnsupportedCountryException if Iban's Country is not supported.
     */
    constructor(iban) {
      const value = _IBAN.electronicFormat(iban);
      validate(value);
      this.value = value;
    }
    /**
     * Returns iban's country code.
     *
     * @return countryCode CountryCode
     */
    getCountryCode() {
      return countryByCode(getCountryCode(this.value));
    }
    /**
     * Returns iban's check digit.
     *
     * @return checkDigit String
     */
    getCheckDigit() {
      return getCheckDigit(this.value);
    }
    /**
     * Returns iban's account number.
     *
     * @return accountNumber String
     */
    getAccountNumber() {
      return getAccountNumber(this.value);
    }
    /**
     * Returns iban's bank code.
     *
     * @return bankCode String
     */
    getBankCode() {
      return getBankCode(this.value);
    }
    /**
     * Returns iban's branch code.
     *
     * @return branchCode String
     */
    getBranchCode() {
      return getBranchCode(this.value);
    }
    /**
     * Returns iban's national check digit.
     *
     * @return nationalCheckDigit String
     */
    getNationalCheckDigit() {
      return getNationalCheckDigit(this.value);
    }
    /**
     * Returns iban's national check digit.
     *
     * @return nationalCheckDigit String
     */
    getBranchCheckDigit() {
      return getBranchCheckDigit(this.value);
    }
    /**
     * Returns iban's currency type if encoded separate from account number
     *
     * @return nationalCheckDigit String
     */
    getCurrencyType() {
      return getCurrencyType(this.value);
    }
    /**
     * Returns iban's account type.
     *
     * @return accountType String
     */
    getAccountType() {
      return getAccountType(this.value);
    }
    /**
     * Returns iban's owner account type.
     *
     * @return ownerAccountType String
     */
    getOwnerAccountType() {
      return getOwnerAccountType(this.value);
    }
    /**
     * Returns iban's identification number.
     *
     * @return identificationNumber String
     */
    getIdentificationNumber() {
      return getIdentificationNumber(this.value);
    }
    /**
     * Returns iban's bban (Basic Bank Account Number).
     *
     * @return bban String
     */
    getBban() {
      return getBban(this.value);
    }
    /**
     * Returns an Iban object holding the value of the specified String.
     *
     * @param iban the String to be parsed.
     * @param format the format of the Iban.
     * @return an Iban object holding the value represented by the string argument.
     * @throws FormatException if the String doesn't contain parsable Iban
     *         InvalidCheckDigitException if Iban has invalid check digit
     *         UnsupportedCountryException if Iban's Country is not supported.
     *
     */
    toString() {
      return this.value;
    }
    /**
     * Returns formatted version of Iban.
     *
     * @return A string representing formatted Iban for printing.
     */
    toFormattedString() {
      return toFormattedString(this.value);
    }
    /**
     * IBAN Validation testing [iban-js API compatibility]
     *
     * @param {string} iban
     * @returns {boolean} true if the value is a valid IBAN
     */
    static isValid(iban) {
      try {
        validate(_IBAN.electronicFormat(iban));
      } catch {
        return false;
      }
      return true;
    }
    /**
     * Convert an IBAN to a formatted BBAN - with validation[iban-js API compatibility]
     *
     * @param {string} iban
     * @param {String} [separator] the separator to use between the blocks of the BBAN, defaults to ' '
     * @returns {string|*}
     */
    static toBBAN(iban, separator = " ") {
      const clean = _IBAN.electronicFormat(iban);
      validate(clean);
      return toFormattedStringBBAN(clean, separator);
    }
    /**
     * Convert the passed BBAN to an IBAN for this country specification.
     * Please note that <i>"generation of the IBAN shall be the exclusive responsibility
     * of the bank/branch servicing the account"</i>. * This method implements the
     * preferred algorithm described in
     * http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
     *
     * @param countryCode the country of the BBAN
     * @param bban the BBAN to convert to IBAN
     * @returns {string} the IBAN
     */
    static fromBBAN(countryCode, bban) {
      validateBban(countryCode, _IBAN.electronicFormat(bban));
      const iban = `${countryCode}00${bban}`;
      const checkDigit = calculateCheckDigit(iban);
      return replaceCheckDigit(iban, checkDigit);
    }
    /**
     * Check the validity of the passed BBAN. [iban-js API compatibility]
     *
     * @param countryCode the country of the BBAN
     * @param bban the BBAN to check the validity of
     */
    static isValidBBAN(countryCode, bban) {
      try {
        validateBban(countryCode, _IBAN.electronicFormat(bban));
      } catch {
        return false;
      }
      return true;
    }
    /**
     * Standard print format of an IBAN, no validation is performed [iban-js API compatibility]
     *
     * @param iban
     * @param separator optional (default ' ')
     * @returns {string}
     */
    static printFormat(iban, separator = " ") {
      return toFormattedString(iban, separator);
    }
    /**
     * Electronic format of the IBAN, no validation is performed. [iban-js API compatibility]
     *
     * @param iban
     * @param separator
     * @returns {string}
     */
    static electronicFormat(iban) {
      return iban.replace(NON_ALPHANUM, "").toUpperCase();
    }
    static random(cc) {
      if (cc !== void 0) {
        return new IBANBuilder().countryCode(cc).build();
      }
      return new IBANBuilder().build();
    }
    /**
     * Return the well known version of the IBAN for this country.  This is
     * the sample provided by the ISO documentation
     */
    static sample(cc) {
      const s = samples[cc];
      return s !== void 0 ? s : samples["DE" /* DE */];
    }
  };

  // src/bicUtil.ts
  var BIC8_LENGTH = 8;
  var BIC11_LENGTH = 11;
  var BANK_CODE_INDEX = 0;
  var BANK_CODE_LENGTH = 4;
  var COUNTRY_CODE_INDEX2 = BANK_CODE_INDEX + BANK_CODE_LENGTH;
  var COUNTRY_CODE_LENGTH2 = 2;
  var LOCATION_CODE_INDEX = COUNTRY_CODE_INDEX2 + COUNTRY_CODE_LENGTH2;
  var LOCATION_CODE_LENGTH = 2;
  var BRANCH_CODE_INDEX = LOCATION_CODE_INDEX + LOCATION_CODE_LENGTH;
  var BRANCH_CODE_LENGTH = 3;
  var ucRegex2 = /^[A-Z]+$/;
  var ucnumRegex = /^[A-Z0-9]+$/;
  function getBankCode2(bic) {
    return bic.substring(BANK_CODE_INDEX, BANK_CODE_INDEX + BANK_CODE_LENGTH);
  }
  function getCountryCode2(bic) {
    return bic.substring(COUNTRY_CODE_INDEX2, COUNTRY_CODE_INDEX2 + COUNTRY_CODE_LENGTH2);
  }
  function getLocationCode(bic) {
    return bic.substring(LOCATION_CODE_INDEX, LOCATION_CODE_INDEX + LOCATION_CODE_LENGTH);
  }
  function getBranchCode2(bic) {
    return bic.substring(BRANCH_CODE_INDEX, BRANCH_CODE_INDEX + BRANCH_CODE_LENGTH);
  }
  function hasBranchCode(bic) {
    return bic.length === BIC11_LENGTH;
  }
  function validateEmpty(bic) {
    if (bic == null) {
      throw new FormatException(1 /* NOT_NULL */, "Null can't be a valid Bic.");
    }
    if (bic.length === 0) {
      throw new FormatException(2 /* NOT_EMPTY */, "Empty string can't be a valid Bic.");
    }
  }
  function validateLength(bic) {
    if (bic.length !== BIC8_LENGTH && bic.length !== BIC11_LENGTH) {
      throw new FormatException(3 /* BIC_LENGTH_8_OR_11 */, `Bic length must be ${BIC8_LENGTH} or ${BIC11_LENGTH}`);
    }
  }
  function validateCase(bic) {
    if (bic !== bic.toUpperCase()) {
      throw new FormatException(4 /* BIC_ONLY_UPPER_CASE_LETTERS */, "Bic must contain only upper case letters.");
    }
  }
  function validateBankCode(bic) {
    const bankCode = getBankCode2(bic);
    if (!ucnumRegex.test(bankCode)) {
      throw new FormatException(
        7 /* BANK_CODE_ONLY_LETTERS */,
        "Bank code must contain only letters or digits.",
        bankCode,
      );
    }
  }
  function validateCountryCode2(bic) {
    const countryCode = getCountryCode2(bic).trim();
    if (
      countryCode.length < COUNTRY_CODE_LENGTH2 ||
      countryCode !== countryCode.toUpperCase() ||
      !ucRegex2.test(countryCode)
    ) {
      throw new FormatException(
        9 /* COUNTRY_CODE_ONLY_UPPER_CASE_LETTERS */,
        "Bic country code must contain upper case letters",
        countryCode,
      );
    }
    if (countryByCode(countryCode) == null) {
      throw new UnsupportedCountryException("Country code is not supported.", countryCode);
    }
  }
  function validateLocationCode(bic) {
    const locationCode = getLocationCode(bic);
    if (!ucnumRegex.test(locationCode)) {
      throw new FormatException(
        6 /* LOCATION_CODE_ONLY_LETTERS_OR_DIGITS */,
        "Location code must contain only letters or digits.",
        locationCode,
      );
    }
  }
  function validateBranchCode(bic) {
    const branchCode = getBranchCode2(bic);
    if (!ucnumRegex.test(branchCode)) {
      throw new FormatException(
        5 /* BRANCH_CODE_ONLY_LETTERS_OR_DIGITS */,
        "Branch code must contain only letters or digits.",
        branchCode,
      );
    }
  }
  function validate2(bic) {
    validateEmpty(bic);
    validateLength(bic);
    validateCase(bic);
    validateBankCode(bic);
    validateCountryCode2(bic);
    validateLocationCode(bic);
    if (hasBranchCode(bic)) {
      validateBranchCode(bic);
    }
  }

  // src/bic.ts
  var BIC = class {
    /**
     * Returns a Bic object holding the value of the specified String.
     *
     * @param bic the String to be parsed.
     * @return a Bic object holding the value represented by the string argument.
     * @throws BicFormatException if the String doesn't contain parsable Bic.
     *         UnsupportedCountryException if bic's country is not supported.
     */
    constructor(bic) {
      validate2(bic);
      this.value = bic;
    }
    /**
     * Returns the bank code from the Bic.
     *
     * @return string representation of Bic's institution code.
     */
    getBankCode() {
      return getBankCode2(this.value);
    }
    /**
     * Returns the country code from the Bic.
     *
     * @return CountryCode representation of Bic's country code.
     */
    getCountryCode() {
      return countryByCode(getCountryCode2(this.value));
    }
    /**
     * Returns the location code from the Bic.
     *
     * @return string representation of Bic's location code.
     */
    getLocationCode() {
      return getLocationCode(this.value);
    }
    /**
     * Returns the branch code from the Bic.
     *
     * @return string representation of Bic's branch code, null if Bic has no branch code.
     */
    getBranchCode() {
      if (hasBranchCode(this.value)) {
        return getBranchCode2(this.value);
      }
      return null;
    }
    /**
     * override for the String() method
     */
    toString() {
      return this.value;
    }
    /**
     * Check to see if a BIC is valid
     *
     * @param {string} bic code to check
     */
    static isValid(bic) {
      try {
        validate2(bic);
      } catch {
        return false;
      }
      return true;
    }
  };
  return __toCommonJS(index_exports);
})();
