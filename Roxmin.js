const utils = new Utils();
const sl = new Selecter("1234","70px","center");
const character = new Character();
const encDatabase = new EnchantDb();
const basicStatT = new Table("basic");
const advStatT = new Table("adv");
const equipmentT = new Table("eqip");
const row1 = new  TR("center");
const row2 = new  TR("center");
const row3 = new  TR("center");
const row4 = new  TR("center");
const row5 = new  TR("center");
const row6 = new  TR("center");

const tdNameStr = new TD(1,1,"Center");
const tdNameAgi = new TD(1,1,"Center");
const tdNameVit = new TD(1,1,"Center");
const tdNameInt = new TD(1,1,"Center");
const tdNameDex = new TD(1,1,"Center");
const tdNameLuk = new TD(1,1,"Center");

const tdValStr = new TD(1,1,"Center");
const tdValAgi = new TD(1,1,"Center");
const tdValVit = new TD(1,1,"Center");
const tdValInt = new TD(1,1,"Center");
const tdValDex = new TD(1,1,"Center");
const tdValLuk = new TD(1,1,"Center");

const tdNameTStr = new TD(1,1,"Center");
const tdNameTAgi = new TD(1,1,"Center");
const tdNameTVit = new TD(1,1,"Center");
const tdNameTInt = new TD(1,1,"Center");
const tdNameTDex = new TD(1,1,"Center");
const tdNameTLuk = new TD(1,1,"Center");

const tdValTStr = new TD(1,1,"Center");
const tdValTAgi = new TD(1,1,"Center");
const tdValTVit = new TD(1,1,"Center");
const tdValTInt = new TD(1,1,"Center");
const tdValTDex = new TD(1,1,"Center");
const tdValTLuk = new TD(1,1,"Center");

const tdNamePAtk = new TD(1,1,"Center");
const tdNameMAtk = new TD(1,1,"Center");
const tdNameASPD = new TD(1,1,"Center");
const tdNameFlee = new TD(1,1,"Center");
const tdNamePDef = new TD(1,1,"Center");
const tdNameMdef = new TD(1,1,"Center");
const tdNameHit = new TD(1,1,"Center");
const tdNameHaste = new TD(1,1,"Center");
const tdNameCrit = new TD(1,1,"Center");
const tdNameAntiCrit = new TD(1,1,"Center");

const tdValPAtk = new TD(1,1,"Center");
const tdValMAtk = new TD(1,1,"Center");
const tdValASPD = new TD(1,1,"Center");
const tdValFlee = new TD(1,1,"Center");
const tdValPDef = new TD(1,1,"Center");
const tdValMdef = new TD(1,1,"Center");
const tdValHit = new TD(1,1,"Center");
const tdValHaste = new TD(1,1,"Center");
const tdValCrit = new TD(1,1,"Center");
const tdValAntiCrit = new TD(1,1,"Center");

const encAttr = new EnchantAttribute("test","Decoration");

function EnchantDb()
{
    this.Prontera = 
    {
        Weapon:
        {
            Attribute:
            [
                "Str",
                "Agi",
                "Vit",
                "Int",
                "Dex",
                "Luk"
            ],
            Value:
            {
                Str:6,
                Agi:6,
                Vit:6,
                Int:6,
                Dex:6,
                Luk:6
            },
            Type:
            {
                Str:"unit",
                Agi:"unit",
                Vit:"unit",
                Int:"unit",
                Dex:"unit",
                Luk:"unit"
            },
        },
        Clothes:
        {
            Attribute:
            [
                "Str",
                "Agi",
                "Vit",
                "Int",
                "Dex",
                "Luk"
            ],
            Value:
            {
                Str:2,
                Agi:2,
                Vit:2,
                Int:2,
                Dex:2,
                Luk:2
            },
            Type:
            {
                Str:"unit",
                Agi:"unit",
                Vit:"unit",
                Int:"unit",
                Dex:"unit",
                Luk:"unit"
            },
        },
        Decoration:
        {
            Attribute:
            [
                "Str",
                "Agi",
                "Vit",
                "Int",
                "Dex",
                "Luk"
            ],
            Value:
            {
                Str:2,
                Agi:2,
                Vit:2,
                Int:2,
                Dex:2,
                Luk:2
            },
            Type:
            {
                Str:"unit",
                Agi:"unit",
                Vit:"unit",
                Int:"unit",
                Dex:"unit",
                Luk:"unit"
            },
        },
    };
    this.Moroc = 
    {
        Weapon:
        {
            Attribute:
            [
                "P_Atk",
                "M_Atk",
                "P_Pen",
                "M_Pen",
                "P_Dmg_Bonus",
                "M_Dmg_Bonus"
            ],
            Value:
            {
                P_Atk:54,
                M_Atk:54,
                P_Pen:54,
                M_Pen:54,
                P_Dmg_Bonus:162,
                M_Dmg_Bonus:162
            },
            Type:
            {
                P_Atk:"unit",
                M_Atk:"unit",
                P_Pen:"unit",
                M_Pen:"unit",
                P_Dmg_Bonus:"unit",
                M_Dmg_Bonus:"unit"
            },
        },
        Clothes:
        {
            Attribute:
            [
                "P_Def",
                "M_Def",
                "Max_HP",
                "Max_SP",
                "P_Dmg_Reduct",
                "M_Dmg_Reduct"
            ],
            Value:
            {
                P_Def:18,
                M_Def:18,
                Max_HP:1080,
                Max_SP:90,
                P_Dmg_Reduct:54,
                M_Dmg_Reduct:54
            },
            Type:
            {
                P_Def:"unit",
                M_Def:"unit",
                Max_HP:"unit",
                Max_SP:"unit",
                P_Dmg_Reduct:"unit",
                M_Dmg_Reduct:"unit"
            },
        },
        Decoration:
        {
            Attribute:
            [
                "ASPD",
                "Haste",
                "Hit",
                "Crit",
                "Flee",
                "Anti_Crit"
            ],
            Value:
            {
                ASPD:18,
                Haste:18,
                Hit:18,
                Crit:18,
                Flee:18,
                Anti_Crit:18
            },
            Type:
            {
                ASPD:"unit",
                Haste:"unit",
                Hit:"unit",
                Crit:"unit",
                Flee:"unit",
                Anti_Crit:"unit"
            },
        },
    };
    this.Izlude = 
    {
        Weapon:
        {
            Attribute:
            [
                "BonusDmgToAngle",
                "BonusDmgToDemon",
                "BonusDmgToFormless",
                "BonusDmgToInsect",
                "BonusDmgToFish",
                "BonusDmgToDemiHuman",
                "BonusDmgToUndead",
                "BonusDmgToDragon",
                "BonusDmgToPlant",
                "BonusDmgToBrute"
            ],
            Value:
            {
                BonusDmgToAngle:3,
                BonusDmgToDemon:3,
                BonusDmgToFormless:3,
                BonusDmgToInsect:3,
                BonusDmgToFish:3,
                BonusDmgToDemiHuman:3,
                BonusDmgToUndead:3,
                BonusDmgToDragon:3,
                BonusDmgToPlant:3,
                BonusDmgToBrute:3
            },
            Type:
            {
                BonusDmgToAngle:"%",
                BonusDmgToDemon:"%",
                BonusDmgToFormless:"%",
                BonusDmgToInsect:"%",
                BonusDmgToFish:"%",
                BonusDmgToDemiHuman:"%",
                BonusDmgToUndead:"%",
                BonusDmgToDragon:"%",
                BonusDmgToPlant:"%",
                BonusDmgToBrute:"%"
            },
        },
        Clothes:
        {
            Attribute:
            [
                "ReductDmgFromAngle",
                "ReductDmgFromDemon",
                "ReductDmgFromFormless",
                "ReductDmgFromInsect",
                "ReductDmgFromFish",
                "ReductDmgFromDemiHuman",
                "ReductDmgFromUndead",
                "ReductDmgFromDragon",
                "ReductDmgFromPlant",
                "ReductDmgFromBrute"
            ],
            Value:
            {
                ReductDmgFromAngle:1,
                ReductDmgFromDemon:1,
                ReductDmgFromFormless:1,
                ReductDmgFromInsect:1,
                ReductDmgFromFish:1,
                ReductDmgFromDemiHuman:1,
                ReductDmgFromUndead:1,
                ReductDmgFromDragon:1,
                ReductDmgFromPlant:1,
                ReductDmgFromBrute:1
            },
            Type:
            {
                ReductDmgFromAngle:"%",
                ReductDmgFromDemon:"%",
                ReductDmgFromFormless:"%",
                ReductDmgFromInsect:"%",
                ReductDmgFromFish:"%",
                ReductDmgFromDemiHuman:"%",
                ReductDmgFromUndead:"%",
                ReductDmgFromDragon:"%",
                ReductDmgFromPlant:"%",
                ReductDmgFromBrute:"%"
            },
        },
        Decoration:
        {
            Attribute:
            [
                "BonusDmgToLarge",
                "BonusDmgToMedium",
                "BonusDmgToSmall",
                "FireEnchant",
                "WaterEnchant",
                "WindEnchant",
                "EarthEnchant",
                "PoisonEnchant",
                "HolyEnchant",
                "GhostEnchant",
            ],
            Value:
            {
                BonusDmgToLarge:1,
                BonusDmgToMedium:1,
                BonusDmgToSmall:1,
                FireEnchant:1,
                WaterEnchant:1,
                WindEnchant:1,
                EarthEnchant:1,
                PoisonEnchant:1,
                HolyEnchant:1,
                GhostEnchant:1
            },
            Type:
            {
                BonusDmgToLarge:"%",
                BonusDmgToMedium:"%",
                BonusDmgToSmall:"%",
                FireEnchant:"%",
                WaterEnchant:"%",
                WindEnchant:"%",
                EarthEnchant:"%",
                PoisonEnchant:"%",
                HolyEnchant:"%",
                GhostEnchant:"%"
            },
        },
    };
    this.Alberta = 
    {
        Weapon:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
        Clothes:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
        Decoration:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
    };
    this.Payon = 
    {
        Weapon:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
        Clothes:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
        Decoration:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
    };
    this.Geffen = 
    {
        Weapon:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
        Clothes:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
        Decoration:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
    };
    this.GlastHiem = 
    {
        Weapon:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
        Clothes:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
        Decoration:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
    };
    this.Comodo = 
    {
        Weapon:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
        Clothes:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
        Decoration:
        {
            Attribute:
            [

            ],
            Value:
            {

            },
            Type:
            {

            },
        },
    };
}


function CalcuateDmg()
{
    this.Normal = "";
    this.Crit = "";
}

function Character()
{
    this.Stat = new CharacterStat();
    this.Basic = new Attribute("b","65px",true);
    this.Final = new Attribute("f","65px",true);
}

function CharacterStat()
{
    this.Point = new StatPoint("p","45px",false);
    this.Total = new StatPoint("t","65px",true);
}

function StatPoint(id,size,disable)
{
    this.STR = new TextBox("cstr"+id,size,"center",disable);
    this.AGI = new TextBox("cagi"+id,size,"center",disable);
    this.VIT = new TextBox("cvit"+id,size,"center",disable);
    this.INT = new TextBox("cint"+id,size,"center",disable);
    this.DEX = new TextBox("cdex"+id,size,"center",disable);
    this.LUK = new TextBox("cluk"+id,size,"center",disable);
}

function EnchantAttribute(id,equiptype)
{
    this.EquipType = equiptype;
    this.Town = new Selecter("eEntn"+id,"100px","center");
    this.Attribute = new Selecter("eEnAttr"+id,"180px","center");
    this.Lv = new Selecter("eEnlv"+id,"50px","center");
    this.Value = new TextBox("eEnVal"+id,"55px","center", true);
    this.Type = new TextBox("eEnType"+id,"55px","center", true);
    this.Town.AddList(["Prontera","Moroc","Izlude","Alberta","Payon","Geffen","GlastHiem","Comodo"]);
    this.Lv.AddList(["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]);
    this.Attribute.AddList(encDatabase["Prontera"]["Weapon"]["Attribute"]);
    this.Town["Element"].addEventListener("change",()=>
    {
        this.Attribute.ClearItem();
        this.Attribute.AddList(encDatabase[this.Town["Element"].value][this.EquipType]["Attribute"]);
        this.Value["Element"].value = encDatabase[this.Town["Element"].value][this.EquipType]["Value"][this.Attribute["Element"].value] * this.Lv["Element"].value;
        this.Type["Element"].value = encDatabase[this.Town["Element"].value][this.EquipType]["Type"][this.Attribute["Element"].value];
    });
    this.Attribute["Element"].addEventListener("change",()=>
    {
        this.Value["Element"].value = encDatabase[this.Town["Element"].value][this.EquipType]["Value"][this.Attribute["Element"].value] * this.Lv["Element"].value;
        this.Type["Element"].value = encDatabase[this.Town["Element"].value][this.EquipType]["Type"][this.Attribute["Element"].value];
    });
    this.Lv["Element"].addEventListener("change",()=>
    {
        this.Value["Element"].value = encDatabase[this.Town["Element"].value][this.EquipType]["Value"][this.Attribute["Element"].value] * this.Lv["Element"].value;
        this.Type["Element"].value = encDatabase[this.Town["Element"].value][this.EquipType]["Type"][this.Attribute["Element"].value];
    });
}

function RefineAttribute()
{
    this.Lv = new Selecter("eRflv"+id,"50px","center");
    this.Attr0Value = new TextBox("eRfAttr0Val"+id,"45px","center", false);
    this.Attr1Value = new TextBox("eRfAttr1Val"+id,"45px","center", false);
}

function UpgradeAttribute()
{
    this.Lv = new Selecter("eUpglv0"+id,"50px","center");
    this.Attr0Value = new TextBox("eUpgAttr0Val"+id,"45px","center", false);
    this.Attr1Value = new TextBox("eUpgAttr1Val"+id,"45px","center", false);
}

function Attribute(id,size,disable)
{
    this.P = new ATKDef(id+"p",size,disable);
    this.M = new ATKDef(id+"m",size,disable);
    this.ASPD = new TextBox(id+"Hit",size,"center",disable);
    this.FLEE = new TextBox(id+"Flee",size,"center",disable);
    this.HIT = new TextBox(id+"Hit",size,"center",disable);
    this.HASTE = new TextBox(id+"Haste",size,"center",disable);
    this.CRIT = new TextBox(id+"Crit",size,"center",disable);
    this.ANTICRIT = new TextBox(id+"AntiCrit",size,"center",disable);
}

function ATKDef(id,size,disable)
{
    this.ATK = new TextBox(id+"Atk",size,"center",disable);
    this.PEN = new TextBox(id+"Pen",size,"center",disable);
    this.DEF = new TextBox(id+"Def",size,"center",disable);
}

function TextBox(id,width,textAlign,disable)
{
  this.Element = document.createElement("input");
  this.Element.type = "text";
  this.Element.id = id;
  this.Element.disabled = disable;
  this.Element.style.width = width;
  this.Element.style.textAlign = textAlign;
}

function Option(value,textAlign)
{
    this.Element = document.createElement("option");
    this.Element.innerHTML = value;
    this.Element.style.textAlign = textAlign;
}

function Hidden(id)
{
    this.Element = document.createElement("input");
    this.Element.type = "hidden";
    this.Element.id = id;
}

function Selecter(id,width,textAlign)
{
    this.Element = document.createElement("select");
    this.Element.id = id;
    this.Element.style.width = width;
    this.Add = (value) =>
    {
        let item = new Option(value,textAlign);
        this.Element.appendChild(item.Element);
    };

    this.AddList = (list) =>
    {
        for(let i =0 ;i < list.length ;i ++)
        {
            this.Add(list[i]);
        }
    };

    this.ClearItem = () =>
    {
        this.Element.innerHTML = "";
    };
}

function Table(id,width,textAlign)
{
    this.Element = document.createElement("table");
    this.Element.id = id;
    this.Element.style.width = width;
    this.Element.style.textAlign = textAlign;
}

function TR(textAlign)
{
    this.Element = document.createElement("tr");
    this.Element.style.textAlign = textAlign;
}

function TD(colSpan,rowSpan,textAlign)
{
    this.Element = document.createElement("td");
    this.Element.style.textAlign = textAlign;
    this.Element.colSpan = colSpan;
    this.Element.rowSpan = rowSpan;
}

function Stat()
{
    this.CalBonus = (num, multuplier) =>
    {
        IsinStepRange = (val)=> val >=0 && num < 3000;
        StepBonus = (val) => ((Math.floor(val/100)/100)*10*multuplier) + (2 * multuplier);
        ConstanBonus = () =>   (3 * multuplier) +  (2 * multuplier);
        return IsinStepRange(num) ? StepBonus(num) : ConstanBonus();
    };
}

function AdvanceStat()
{
    this.CalFinal = (num,size) =>
    {
        let sum = 0;
        let upper = 0;
        let lower = 0;
        for(var i = 1; i<= 100 ; i++)
        {
            upper = (sum + i) * size;
            lower = ((sum) * size);
            if(num > upper)
            {
                sum += i;
                continue;
            }
            else
            {
                return ((num -lower) / (( size * i ) / 0.05)) + ((i - 1) * 0.05);
            }
        }
    };
}


function Utils()
{
    this.GetId = (name) =>{ return document.getElementById(name);};
    this.CalStatBonus = (num, multuplier) =>
    {
        IsinStepRange = (val)=> val >=0 && num < 3000;
        StepBonus = (val) => ((Math.floor(val/100)/100)*10*multuplier) + (2 * multuplier);
        ConstanBonus = () =>   (3 * multuplier) +  (2 * multuplier);
        return IsinStepRange(num) ? StepBonus(num) : ConstanBonus();
    };
    this.CalFinalAttr = (num,size) =>
    {
        let sum = 0;
        let upper = 0;
        let lower = 0;
        for(var i = 1; i<= 100 ; i++)
        {
            upper = (sum + i) * size;
            lower = ((sum) * size);
            if(num > upper)
            {
                sum += i;
                continue;
            }
            else
            {
                return ((num -lower) / (( size * i ) / 0.05)) + ((i - 1) * 0.05);
            }
        }
    };
}

function GenBasicStatTable()
{
    basicStatT["Element"].appendChild(row1["Element"]);
    basicStatT["Element"].appendChild(row2["Element"]);
    basicStatT["Element"].appendChild(row3["Element"]);
    basicStatT["Element"].appendChild(row4["Element"]);
    basicStatT["Element"].appendChild(row5["Element"]);
    basicStatT["Element"].appendChild(row6["Element"]);

    tdNameStr["Element"].innerHTML = "STR:";
    tdNameAgi["Element"].innerHTML = "AGI:";
    tdNameVit["Element"].innerHTML = "VIT:";
    tdNameInt["Element"].innerHTML = "INT:";
    tdNameDex["Element"].innerHTML = "DEX:";
    tdNameLuk["Element"].innerHTML = "LUK:";

    tdNameTStr["Element"].innerHTML = "Total:";
    tdNameTAgi["Element"].innerHTML = "Total:";
    tdNameTVit["Element"].innerHTML = "Total:";
    tdNameTInt["Element"].innerHTML = "Total:";
    tdNameTDex["Element"].innerHTML = "Total:";
    tdNameTLuk["Element"].innerHTML = "Total:";

    tdNamePAtk["Element"].innerHTML = "P.Atk:";
    tdNameMAtk["Element"].innerHTML = "M.Atk:";
    tdNameASPD["Element"].innerHTML = "ASPD:";
    tdNameFlee["Element"].innerHTML = "Flee:";
    tdNamePDef["Element"].innerHTML = "P.Def:";
    tdNameMdef["Element"].innerHTML = "M.Def:";
    tdNameHit["Element"].innerHTML = "Hit:";
    tdNameHaste["Element"].innerHTML = "Haste:";
    tdNameCrit["Element"].innerHTML = "Crit:";
    tdNameAntiCrit["Element"].innerHTML = "AntiCrit:";

    tdValStr["Element"].appendChild(character["Stat"]["Point"]["STR"]["Element"]);
    tdValAgi["Element"].appendChild(character["Stat"]["Point"]["AGI"]["Element"]);
    tdValVit["Element"].appendChild(character["Stat"]["Point"]["VIT"]["Element"]);
    tdValInt["Element"].appendChild(character["Stat"]["Point"]["INT"]["Element"]);
    tdValDex["Element"].appendChild(character["Stat"]["Point"]["DEX"]["Element"]);
    tdValLuk["Element"].appendChild(character["Stat"]["Point"]["LUK"]["Element"]);

    tdValTStr["Element"].appendChild(character["Stat"]["Total"]["STR"]["Element"]);
    tdValTAgi["Element"].appendChild(character["Stat"]["Total"]["AGI"]["Element"]);
    tdValTVit["Element"].appendChild(character["Stat"]["Total"]["VIT"]["Element"]);
    tdValTInt["Element"].appendChild(character["Stat"]["Total"]["INT"]["Element"]);
    tdValTDex["Element"].appendChild(character["Stat"]["Total"]["DEX"]["Element"]);
    tdValTLuk["Element"].appendChild(character["Stat"]["Total"]["LUK"]["Element"]);

    tdValPAtk["Element"].appendChild(character["Basic"]["P"]["ATK"]["Element"]);   
    tdValASPD["Element"].appendChild(character["Basic"]["ASPD"]["Element"]);
    tdValFlee["Element"].appendChild(character["Basic"]["FLEE"]["Element"]);
    tdValPDef["Element"].appendChild(character["Basic"]["P"]["DEF"]["Element"]);
    tdValMAtk["Element"].appendChild(character["Basic"]["M"]["ATK"]["Element"]);
    tdValMdef["Element"].appendChild(character["Basic"]["M"]["DEF"]["Element"]);
    tdValHit["Element"].appendChild(character["Basic"]["HIT"]["Element"]);
    tdValHaste["Element"].appendChild(character["Basic"]["HASTE"]["Element"]);
    tdValCrit["Element"].appendChild(character["Basic"]["CRIT"]["Element"]);
    tdValAntiCrit["Element"].appendChild(character["Basic"]["ANTICRIT"]["Element"]);

    row1["Element"].appendChild(tdNameStr["Element"]);
    row1["Element"].appendChild(tdValStr["Element"]);
    row1["Element"].appendChild(tdNameTStr["Element"]);
    row1["Element"].appendChild(tdValTStr["Element"]);
    row1["Element"].appendChild(tdNamePAtk["Element"]);
    row1["Element"].appendChild(tdValPAtk["Element"]);

    row2["Element"].appendChild(tdNameAgi["Element"]);
    row2["Element"].appendChild(tdValAgi["Element"]);
    row2["Element"].appendChild(tdNameTAgi["Element"]);
    row2["Element"].appendChild(tdValTAgi["Element"]);
    row2["Element"].appendChild(tdNameASPD["Element"]);
    row2["Element"].appendChild(tdValASPD["Element"]);
    row2["Element"].appendChild(tdNameFlee["Element"]);
    row2["Element"].appendChild(tdValFlee["Element"]);

    row3["Element"].appendChild(tdNameVit["Element"]);
    row3["Element"].appendChild(tdValVit["Element"]);
    row3["Element"].appendChild(tdNameTVit["Element"]);
    row3["Element"].appendChild(tdValTVit["Element"]);
    row3["Element"].appendChild(tdNamePDef["Element"]);
    row3["Element"].appendChild(tdValPDef["Element"]);


    row4["Element"].appendChild(tdNameInt["Element"]);
    row4["Element"].appendChild(tdValInt["Element"]);
    row4["Element"].appendChild(tdNameTInt["Element"]);
    row4["Element"].appendChild(tdValTInt["Element"]);
    row4["Element"].appendChild(tdNameMAtk["Element"]);
    row4["Element"].appendChild(tdValMAtk["Element"]);
    row4["Element"].appendChild(tdNameMdef["Element"]);
    row4["Element"].appendChild(tdValMdef["Element"]);


    row5["Element"].appendChild(tdNameDex["Element"]);
    row5["Element"].appendChild(tdValDex["Element"]);
    row5["Element"].appendChild(tdNameTDex["Element"]);
    row5["Element"].appendChild(tdValTDex["Element"]);
    row5["Element"].appendChild(tdNameHit["Element"]);
    row5["Element"].appendChild(tdValHit["Element"]);
    row5["Element"].appendChild(tdNameHaste["Element"]);
    row5["Element"].appendChild(tdValHaste["Element"]);

    row6["Element"].appendChild(tdNameLuk["Element"]);   
    row6["Element"].appendChild(tdValLuk["Element"]); 
    row6["Element"].appendChild(tdNameTLuk["Element"]);
    row6["Element"].appendChild(tdValTLuk["Element"]);
    row6["Element"].appendChild(tdNameCrit["Element"]);
    row6["Element"].appendChild(tdValCrit["Element"]);
    row6["Element"].appendChild(tdNameAntiCrit["Element"]);
    row6["Element"].appendChild(tdValAntiCrit["Element"]);
    return basicStatT;
}

function GenAdvStatTable()
{

    return advStatT;
}

function GenEquipStatTable()
{

    return equipmentT;
}

function Onload()
{
    const inputWidthS = "35px";
    const inputWidthL = "45px";
    document.write("<span id=\"main\"></span>");
    const main = utils.GetId("main");
    main.appendChild(GenBasicStatTable()["Element"]);
    main.appendChild(GenAdvStatTable()["Element"]);
    main.appendChild(GenEquipStatTable()["Element"]);
    main.appendChild(encAttr.Town["Element"]);
    main.appendChild(encAttr.Attribute["Element"]);
    main.appendChild(encAttr.Lv["Element"]);
    main.appendChild(encAttr.Value["Element"]);
    main.appendChild(encAttr.Type["Element"]);

}

