const utils = new Utils();
const sl = new Selecter("1234","70px","center");
const character = new Character();
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

const tdNameTStr = new TD(1,1,"Center");
const tdNameTAgi = new TD(1,1,"Center");
const tdNameTVit = new TD(1,1,"Center");
const tdNameTInt = new TD(1,1,"Center");
const tdNameTDex = new TD(1,1,"Center");
const tdNameTLuk = new TD(1,1,"Center");

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
    this.Point = new StatPoint("p","35px",false);
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

function GenBasicStatTable(main)
{
    main.appendChild(basicStatT["Element"]);
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
    row1["Element"].appendChild(character["Stat"]["Point"]["STR"]["Element"]);
    row1["Element"].appendChild(tdNameTStr["Element"]);
    row1["Element"].appendChild(character["Stat"]["Total"]["STR"]["Element"]);
    row1["Element"].appendChild(tdNamePAtk["Element"]);
    row1["Element"].appendChild(tdValPAtk["Element"]);

    row2["Element"].appendChild(tdNameAgi["Element"]);
    row2["Element"].appendChild(character["Stat"]["Point"]["AGI"]["Element"]);
    row2["Element"].appendChild(tdNameTAgi["Element"]);
    row2["Element"].appendChild(character["Stat"]["Total"]["AGI"]["Element"]);
    row2["Element"].appendChild(tdNameASPD["Element"]);
    row2["Element"].appendChild(tdValASPD["Element"]);
    row2["Element"].appendChild(tdNameFlee["Element"]);
    row2["Element"].appendChild(tdValFlee["Element"]);

    row3["Element"].appendChild(tdNameVit["Element"]);
    row3["Element"].appendChild(character["Stat"]["Point"]["VIT"]["Element"]);
    row3["Element"].appendChild(tdNameTVit["Element"]);
    row3["Element"].appendChild(character["Stat"]["Total"]["VIT"]["Element"]);
    row3["Element"].appendChild(tdNamePDef["Element"]);
    row3["Element"].appendChild(tdValPDef["Element"]);


    row4["Element"].appendChild(tdNameInt["Element"]);
    row4["Element"].appendChild(character["Stat"]["Point"]["INT"]["Element"]);
    row4["Element"].appendChild(tdNameTInt["Element"]);
    row4["Element"].appendChild(character["Stat"]["Total"]["INT"]["Element"]);
    row4["Element"].appendChild(tdNameMAtk["Element"]);
    row4["Element"].appendChild(tdValMAtk["Element"]);
    row4["Element"].appendChild(tdNameMdef["Element"]);
    row4["Element"].appendChild(tdValMdef["Element"]);


    row5["Element"].appendChild(tdNameDex["Element"]);
    row5["Element"].appendChild(character["Stat"]["Point"]["DEX"]["Element"]);
    row5["Element"].appendChild(tdNameTDex["Element"]);
    row5["Element"].appendChild(character["Stat"]["Total"]["DEX"]["Element"]);
    row5["Element"].appendChild(tdNameHit["Element"]);
    row5["Element"].appendChild(tdValHit["Element"]);
    row5["Element"].appendChild(tdNameHaste["Element"]);
    row5["Element"].appendChild(tdValHaste["Element"]);

    row6["Element"].appendChild(tdNameLuk["Element"]);   
    row6["Element"].appendChild(character["Stat"]["Point"]["LUK"]["Element"]);
    row6["Element"].appendChild(tdNameTLuk["Element"]);
    row6["Element"].appendChild(character["Stat"]["Total"]["LUK"]["Element"]);
    row6["Element"].appendChild(tdNameCrit["Element"]);
    row6["Element"].appendChild(tdValCrit["Element"]);
    row6["Element"].appendChild(tdNameAntiCrit["Element"]);
    row6["Element"].appendChild(tdValAntiCrit["Element"]);
  
}

function GenAdvStatTable(main)
{
    main.appendChild(advStatT["Element"]);
}

function GenEquipStatTable(main)
{
    main.appendChild(equipmentT["Element"]);
}

function Onload()
{
    const inputWidthS = "35px";
    const inputWidthL = "45px";
    document.write("<span id=\"main\"></span>");
    const main = utils.GetId("main");
    GenBasicStatTable(main);
    GenAdvStatTable(main);
    GenEquipStatTable(main);
}

