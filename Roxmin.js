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

const encWeaponAttr = new EnchantAttribute("test1","Weapon");
const encClothAttr = new EnchantAttribute("test2","Clothes");
const encDecAttr = new EnchantAttribute("test3","Decoration");

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
                Str:"point",
                Agi:"point",
                Vit:"point",
                Int:"point",
                Dex:"point",
                Luk:"point"
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
                Str:"point",
                Agi:"point",
                Vit:"point",
                Int:"point",
                Dex:"point",
                Luk:"point"
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
                Str:"point",
                Agi:"point",
                Vit:"point",
                Int:"point",
                Dex:"point",
                Luk:"point"
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
                P_Atk:"point",
                M_Atk:"point",
                P_Pen:"point",
                M_Pen:"point",
                P_Dmg_Bonus:"point",
                M_Dmg_Bonus:"point"
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
                P_Def:"point",
                M_Def:"point",
                Max_HP:"point",
                Max_SP:"point",
                P_Dmg_Reduct:"point",
                M_Dmg_Reduct:"point"
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
                ASPD:"point",
                Haste:"point",
                Hit:"point",
                Crit:"point",
                Flee:"point",
                Anti_Crit:"point"
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
                "BonusDmgToNeutral",
                "BonusDmgToFire",
                "BonusDmgToWater",
                "BonusDmgToWind",
                "BonusDmgToEarth",
                "BonusDmgToPoison",
                "BonusDmgToHoly",
                "BonusDmgToShadow",
                "BonusDmgToGhost",
                "BonusDmgToUndead"
            ],
            Value:
            {
                BonusDmgToNeutral:3,
                BonusDmgToFire:3,
                BonusDmgToWater:3,
                BonusDmgToWind:3,
                BonusDmgToEarth:3,
                BonusDmgToPoison:3,
                BonusDmgToHoly:3,
                BonusDmgToShadow:3,
                BonusDmgToGhost:3,
                BonusDmgToUndead:3
            },
            Type:
            {
                BonusDmgToNeutral:"%",
                BonusDmgToFire:"%",
                BonusDmgToWater:"%",
                BonusDmgToWind:"%",
                BonusDmgToEarth:"%",
                BonusDmgToPoison:"%",
                BonusDmgToHoly:"%",
                BonusDmgToShadow:"%",
                BonusDmgToGhost:"%",
                BonusDmgToUndead:"%"
            },
        },
        Clothes:
        {
            Attribute:
            [
                "ReductDmgFromNeutral",
                "ReductDmgFromFire",
                "ReductDmgFromWater",
                "ReductDmgFromWind",
                "ReductDmgFromEarth",
                "ReductDmgFromPoison",
                "ReductDmgFromHoly",
                "ReductDmgFromShadow",
                "ReductDmgFromGhost",
                "ReductDmgFromUndead"
            ],
            Value:
            {
                ReductDmgFromNeutral:1,
                ReductDmgFromFire:1,
                ReductDmgFromWater:1,
                ReductDmgFromWind:1,
                ReductDmgFromEarth:1,
                ReductDmgFromPoison:1,
                ReductDmgFromHoly:1,
                ReductDmgFromShadow:1,
                ReductDmgFromGhost:1,
                ReductDmgFromUndead:1
            },
            Type:
            {
                ReductDmgFromNeutral:"%",
                ReductDmgFromFire:"%",
                ReductDmgFromWater:"%",
                ReductDmgFromWind:"%",
                ReductDmgFromEarth:"%",
                ReductDmgFromPoison:"%",
                ReductDmgFromHoly:"%",
                ReductDmgFromShadow:"%",
                ReductDmgFromGhost:"%",
                ReductDmgFromUndead:"%"
            },
        },
        Decoration:
        {
            Attribute:
            [
                "P_Def",
                "M_Def",
                "ASPD",
                "Haste",
                "Hit",
                "Flee",
                "Crit",
                "Anti_Crit",
                "P_Pen",
                "M_Pen"
            ],
            Value:
            {
                P_Def:1.6,
                M_Def:1.6,
                ASPD:1.6,
                Haste:1.6,
                Hit:1.6,
                Flee:1.6,
                Crit:1.6,
                Anti_Crit:1.6,
                P_Pen:1.6,
                M_Pen:1.6
            },
            Type:
            {
                P_Def:"%",
                M_Def:"%",
                ASPD:"%",
                Haste:"%",
                Hit:"%",
                Flee:"%",
                Crit:"%",
                Anti_Crit:"%",
                P_Pen:"%",
                M_Pen:"%"
            },
        },
    };
    this.Payon = 
    {
        Weapon:
        {
            Attribute:
            [
                "Str",
                "Agi",
                "Int",
                "Dex",
                "P_Atk",
                "M_Atk",
                "P_Pen",
                "M_Pen",
                "PDmgBonus",
                "MDmgBonus"
            ],
            Value:
            {
                Str:15,
                Agi:15,
                Int:15,
                Dex:15,
                P_Atk:90,
                M_Atk:90,
                P_Pen:90,
                M_Pen:90,
                PDmgBonus:360,
                MDmgBonus:360
            },
            Type:
            {
                Str:"point",
                Agi:"point",
                Int:"point",
                Dex:"point",
                P_Atk:"point",
                M_Atk:"point",
                P_Pen:"point",
                M_Pen:"point",
                PDmgBonus:"point",
                MDmgBonus:"point"
            },
        },
        Clothes:
        {
            Attribute:
            [
                "Str",
                "Agi",
                "Int",
                "Dex",
                "P_Def",
                "M_Def",
                "Max_Hp",
                "Max_SP",
                "PDmgReduct",
                "MDmgReduct"
            ],
            Value:
            {
                Str:5,
                Agi:5,
                Int:5,
                Dex:5,
                P_Def:30,
                M_Def:30,
                MaxHp:2400,
                MaxSP:150,
                PDmgReduct:120,
                MDmgReduct:120
            },
            Type:
            {
                Str:"point",
                Agi:"point",
                Int:"point",
                Dex:"point",
                P_Def:"point",
                M_Def:"point",
                MaxHp:"point",
                MaxSP:"point",
                PDmgReduct:"point",
                MDmgReduct:"point"
            },
        },
        Decoration:
        {
            Attribute:
            [
                "Agi",
                "Vit",
                "Dex",
                "Luk",
                "ASPD",
                "Haste",
                "Hit",
                "Crit",
                "Flee",
                "Anti_Crit"
            ],
            Value:
            {
                Agi:5,
                Vit:5,
                Dex:5,
                Luk:5,
                ASPD:30,
                Haste:30,
                Hit:30,
                Crit:30,
                Flee:30,
                Anti_Crit:30
            },
            Type:
            {
                Agi:"point",
                Vit:"point",
                Dex:"point",
                Luk:"point",
                ASPD:"point",
                Haste:"point",
                Hit:"point",
                Crit:"point",
                Flee:"point",
                Anti_Crit:"point"
            },
        },
    };
    this.Geffen = 
    {
        Weapon:
        {
            Attribute:
            [
                "CritDmgBonus",
                "PLifeSteal",
                "HealBonus",
                "P_Atk",
                "M_Atk",
                "FnlPDmgBonus",
                "FnlMDmgBonus",
                "FnlPPen",
                "FnlMPen",
                "MLileSteal"
            ],
            Value:
            {
                CritDmgBonus:3.6,
                PLifeSteal:3.6,
                HealBonus:3.6,
                P_Atk:3.6,
                M_Atk:3.6,
                FnlPDmgBonus:3.6,
                FnlMDmgBonus:3.6,
                FnlPPen:3.6,
                FnlMPen:3.6,
                MLileSteal:3.6
            },
            Type:
            {
                CritDmgBonus:"%",
                PLifeSteal:"%",
                HealBonus:"%",
                P_Atk:"%",
                M_Atk:"%",
                FnlPDmgBonus:"%",
                FnlMDmgBonus:"%",
                FnlPPen:"%",
                FnlMPen:"%",
                MLileSteal:"%"
            },
        },
        Clothes:
        {
            Attribute:
            [
                "Max_Hp",
                "Max_Sp",
                "HealReceiveBonus",
                "FnlPDmgReduct",
                "FnlMDmgReduct",               
                "FnlPDef",
                "FnlMDef",
                "CritDmgReduct",
                "Hp5secRegen",
                "Sp5secRegen"
            ],
            Value:
            {
                Max_Hp:2.4,
                Max_Sp:2.4,
                HealReceiveBonus:1.2,
                FnlPDmgReduct:1.2,
                FnlMDmgReduct:1.2,               
                FnlPDef:1.2,
                FnlMDef:1.2,
                CritDmgReduct:1.2,
                Hp5secRegen:0.6,
                Sp5secRegen:0.6
            },
            Type:
            {
                Max_Hp:"%",
                Max_Sp:"%",
                HealReceiveBonus:"%",
                FnlPDmgReduct:"%",
                FnlMDmgReduct:"%",               
                FnlPDef:"%",
                FnlMDef:"%",
                CritDmgReduct:"%",
                Hp5secRegen:"%",
                Sp5secRegen:"%"
            },
        },
        Decoration:
        {
            Attribute:
            [
                "FnlASPD",
                "FnlHaste",
                "FnlCrit",
                "FnlFlee",
                "FnlAntiCrit",
                "PDmgReduct",
                "FnlHit",
                "MDmgReduct",
                "DebuffReduct",
                "DebuffResist"
            ],
            Value:
            {
                FnlASPD:6,
                FnlHaste:0.6,
                FnlCrit:1.2,
                FnlFlee:1.2,
                FnlAntiCrit:1.2,
                PDmgReduct:1.2,
                FnlHit:1.2,
                MDmgReduct:1.2,
                DebuffReduct:1.5,
                DebuffResist:1.5
            },
            Type:
            {
                FnlASPD:"%",
                FnlHaste:"%",
                FnlCrit:"%",
                FnlFlee:"%",
                FnlAntiCrit:"%",
                PDmgReduct:"%",
                FnlHit:"%",
                MDmgReduct:"%",
                DebuffReduct:"%",
                DebuffResist:"%"
            },
        },
    };
    this.GlastHiem = 
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
                "Luk",
                "PVP_PDmgBonus",
                "PVP_MDmgBonus",
                "PVP_FnlPDmgBonus",
                "PVP_FnlMDmgBonus"
            ],
            Value:
            {
                Str:1.68,
                Agi:1.68,
                Vit:1.68,
                Int:1.68,
                Dex:1.68,
                Luk:1.68,
                PVP_PDmgBonus:126,
                PVP_MDmgBonus:126,
                PVP_FnlPDmgBonus:2.10,
                PVP_FnlMDmgBonus:2.10
            },
            Type:
            {
                Str:"%",
                Agi:"%",
                Vit:"%",
                Int:"%",
                Dex:"%",
                Luk:"%",
                PVP_PDmgBonus:"point",
                PVP_MDmgBonus:"point",
                PVP_FnlPDmgBonus:"%",
                PVP_FnlMDmgBonus:"%"
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
                "Luk",
                "PVP_PDmgReduct",
                "PVP_MDmgReduct",
                "PVP_FnlPDmgReduct",
                "PVP_FnlMDmgReduct"
            ],
            Value:
            {
                Str:0.56,
                Agi:0.56,
                Vit:0.56,
                Int:0.56,
                Dex:0.56,
                Luk:0.56,
                PVP_PDmgReduct:42,
                PVP_MDmgReduct:42,
                PVP_FnlPDmgReduct:0.7,
                PVP_FnlMDmgReduct:0.7
            },
            Type:
            {
                Str:"%",
                Agi:"%",
                Vit:"%",
                Int:"%",
                Dex:"%",
                Luk:"%",
                PVP_PDmgReduct:"point",
                PVP_MDmgReduct:"point",
                PVP_FnlPDmgReduct:"%",
                PVP_FnlMDmgReduct:"%"
            },
        },
        Decoration:
        {
            Attribute:
            [
                "PVP_PDmgReduct",
                "PVP_MDmgReduct",
                "PVP_FnlPDmgReduct",
                "PVP_FnlMDmgReduct",
                "PVP_DebuffReduct",
                "PVP_DebuffResist",
                "PVP_PDmgBonus",
                "PVP_MDmgBonus",
                "PVP_FnlPDmgBonus",
                "PVP_FnlMDmgBonus"
            ],
            Value:
            {
                PVP_PDmgReduct:42,
                PVP_MDmgReduct:42,
                PVP_FnlPDmgReduct:0.7,
                PVP_FnlMDmgReduct:0.7,
                PVP_DebuffReduct:0.7,
                PVP_DebuffResist:0.7,
                PVP_PDmgBonus:42,
                PVP_MDmgBonus:42,
                PVP_FnlPDmgBonus:0.7,
                PVP_FnlMDmgBonus:0.7
            },
            Type:
            {
                PVP_PDmgReduct:"point",
                PVP_MDmgReduct:"point",
                PVP_FnlPDmgReduct:"%",
                PVP_FnlMDmgReduct:"%",
                PVP_DebuffReduct:"%",
                PVP_DebuffResist:"%",
                PVP_PDmgBonus:"point",
                PVP_MDmgBonus:"point",
                PVP_FnlPDmgBonus:"%",
                PVP_FnlMDmgBonus:"%"
            },
        },
    };
    this.Comodo = 
    {
        Weapon:
        {
            Attribute:
            [
                "Str",
                "Agi",
                "Int",
                "Dex",
                "CriDmgBonus",
                "FnlPPen",
                "FnlMPen",
                "PVP_PDmgBonus",
                "PVP_MDmgBonus",
                "PVP_FnlPDmgBonus",
                "PVP_FnlMDmgBonus"
            ],
            Value:
            {
                Str:24,
                Agi:24,
                Int:24,
                Dex:24,
                CriDmgBonus:9.6,
                FnlPPen:4.8,
                FnlMPen:4.8,
                PVP_PDmgBonus:144,
                PVP_MDmgBonus:144,
                PVP_FnlPDmgBonus:2.4,
                PVP_FnlMDmgBonus:2.4
            },
            Type:
            {
                Str:"point",
                Agi:"point",
                Int:"point",
                Dex:"point",
                CriDmgBonus:"%",
                FnlPPen:"%",
                FnlMPen:"%",
                PVP_PDmgBonus:"point",
                PVP_MDmgBonus:"point",
                PVP_FnlPDmgBonus:"%",
                PVP_FnlMDmgBonus:"%"
            },
        },
        Clothes:
        {
            Attribute:
            [
                "Str",
                "Vit",
                "Int",
                "Dex",
                "FnlPDef",
                "FnlMDef",
                "PVP_PDmgReduct",
                "PVP_MDmgReduct",
                "PVP_FnlPDmgReduct",
                "PVP_FnlMDmgReduct"
            ],
            Value:
            {
                Str:8,
                Vit:8,
                Int:8,
                Dex:8,
                FnlPDef:1.6,
                FnlMDef:1.6,
                PVP_PDmgReduct:48,
                PVP_MDmgReduct:48,
                PVP_FnlPDmgReduct:1.2,
                PVP_FnlMDmgReduct:1.2
            },
            Type:
            {
                Str:"point",
                Vit:"point",
                Int:"point",
                Dex:"point",
                FnlPDef:"%",
                FnlMDef:"%",
                PVP_PDmgReduct:"point",
                PVP_MDmgReduct:"point",
                PVP_FnlPDmgReduct:"%",
                PVP_FnlMDmgReduct:"%"
            },
        },
        Decoration:
        {
            Attribute:
            [
                "FireEnchant",
                "WaterEnchant",
                "WindEnchant",
                "EarthEnchant",
                "PoisonEnchant",
                "HolyEnchant",
                "GhostEnchant",
                "PVP_PDmgReduct",
                "PVP_MDmgReduct",
                "PVP_FnlPDmgReduct",
                "PVP_FnlMDmgReduct",
                "PVP_PDmgBonus",
                "PVP_MDmgBonus",
                "PVP_PFnlDmgBonus",
                "PVP_MFnlDmgBonus"
            ],
            Value:
            {
                FireEnchant:2,
                WaterEnchant:2,
                WindEnchant:2,
                EarthEnchant:2,
                PoisonEnchant:2,
                HolyEnchant:2,
                GhostEnchant:2,
                PVP_PDmgReduct:48,
                PVP_MDmgReduct:48,
                PVP_FnlPDmgReduct:1.2,
                PVP_FnlMDmgReduct:1.2,
                PVP_PDmgBonus:48,
                PVP_MDmgBonus:48,
                PVP_PFnlDmgBonus:0.8,
                PVP_MFnlDmgBonus:0.8
            },
            Type:
            {
                FireEnchant:"%",
                WaterEnchant:"%",
                WindEnchant:"%",
                EarthEnchant:"%",
                PoisonEnchant:"%",
                HolyEnchant:"%",
                GhostEnchant:"%",
                PVP_PDmgReduct:"point",
                PVP_MDmgReduct:"point",
                PVP_FnlPDmgReduct:"%",
                PVP_FnlMDmgReduct:"%",
                PVP_PDmgBonus:"point",
                PVP_MDmgBonus:"point",
                PVP_PFnlDmgBonus:"%",
                PVP_MFnlDmgBonus:"%"
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
    this.Total = new StatPoint("tp","65px",true);
}

function StatPoint(id,size,disable)
{
    this.Str = new TextBox("cstr"+id,size,"center",disable);
    this.Agi = new TextBox("cagi"+id,size,"center",disable);
    this.Vit = new TextBox("cvit"+id,size,"center",disable);
    this.Int = new TextBox("cint"+id,size,"center",disable);
    this.Dex = new TextBox("cdex"+id,size,"center",disable);
    this.Luk = new TextBox("cluk"+id,size,"center",disable);
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
    this.Attribute.AddList(encDatabase["Prontera"][this.EquipType]["Attribute"]);
    this.Town["Element"].addEventListener("change",()=>
    {
        this.Attribute.ClearItem();
        this.Attribute.AddList(encDatabase[this.Town["Element"].value][this.EquipType]["Attribute"]);
        this.Value["Element"].value = (encDatabase[this.Town["Element"].value][this.EquipType]["Value"][this.Attribute["Element"].value] * this.Lv["Element"].value).toFixed(2);
        this.Type["Element"].value = encDatabase[this.Town["Element"].value][this.EquipType]["Type"][this.Attribute["Element"].value];
    });
    this.Attribute["Element"].addEventListener("change",()=>
    {
        this.Value["Element"].value = (encDatabase[this.Town["Element"].value][this.EquipType]["Value"][this.Attribute["Element"].value] * this.Lv["Element"].value).toFixed(2);
        this.Type["Element"].value = encDatabase[this.Town["Element"].value][this.EquipType]["Type"][this.Attribute["Element"].value];
    });
    this.Lv["Element"].addEventListener("change",()=>
    {
        this.Value["Element"].value = (encDatabase[this.Town["Element"].value][this.EquipType]["Value"][this.Attribute["Element"].value] * this.Lv["Element"].value).toFixed(2);
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
    this.Flee = new TextBox(id+"Flee",size,"center",disable);
    this.Hit = new TextBox(id+"Hit",size,"center",disable);
    this.Haste = new TextBox(id+"Haste",size,"center",disable);
    this.Crit = new TextBox(id+"Crit",size,"center",disable);
    this.Anti_Crit = new TextBox(id+"AntiCrit",size,"center",disable);
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

function Span()
{
    this.Element = document.createElement("span");
}

function Span(id,textAlign)
{
    this.Element = document.createElement("span");
    this.Element.id = id;
    this.Element.style.textAlign = textAlign;
}

function Div()
{
    this.Element = document.createElement("div");
}

function Div(id,textAlign)
{
    this.Element = document.createElement("div");
    this.Element.id = id;
    this.Element.style.textAlign = textAlign;
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

    tdNameStr["Element"].innerHTML = "Str:";
    tdNameAgi["Element"].innerHTML = "Agi:";
    tdNameVit["Element"].innerHTML = "Vit:";
    tdNameInt["Element"].innerHTML = "Int:";
    tdNameDex["Element"].innerHTML = "Dex:";
    tdNameLuk["Element"].innerHTML = "Luk:";

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

    tdValStr["Element"].appendChild(character["Stat"]["Point"]["Str"]["Element"]);
    tdValAgi["Element"].appendChild(character["Stat"]["Point"]["Agi"]["Element"]);
    tdValVit["Element"].appendChild(character["Stat"]["Point"]["Vit"]["Element"]);
    tdValInt["Element"].appendChild(character["Stat"]["Point"]["Int"]["Element"]);
    tdValDex["Element"].appendChild(character["Stat"]["Point"]["Dex"]["Element"]);
    tdValLuk["Element"].appendChild(character["Stat"]["Point"]["Luk"]["Element"]);

    tdValTStr["Element"].appendChild(character["Stat"]["Total"]["Str"]["Element"]);
    tdValTAgi["Element"].appendChild(character["Stat"]["Total"]["Agi"]["Element"]);
    tdValTVit["Element"].appendChild(character["Stat"]["Total"]["Vit"]["Element"]);
    tdValTInt["Element"].appendChild(character["Stat"]["Total"]["Int"]["Element"]);
    tdValTDex["Element"].appendChild(character["Stat"]["Total"]["Dex"]["Element"]);
    tdValTLuk["Element"].appendChild(character["Stat"]["Total"]["Luk"]["Element"]);

    tdValPAtk["Element"].appendChild(character["Basic"]["P"]["ATK"]["Element"]);   
    tdValASPD["Element"].appendChild(character["Basic"]["ASPD"]["Element"]);
    tdValFlee["Element"].appendChild(character["Basic"]["Flee"]["Element"]);
    tdValPDef["Element"].appendChild(character["Basic"]["P"]["DEF"]["Element"]);
    tdValMAtk["Element"].appendChild(character["Basic"]["M"]["ATK"]["Element"]);
    tdValMdef["Element"].appendChild(character["Basic"]["M"]["DEF"]["Element"]);
    tdValHit["Element"].appendChild(character["Basic"]["Hit"]["Element"]);
    tdValHaste["Element"].appendChild(character["Basic"]["Haste"]["Element"]);
    tdValCrit["Element"].appendChild(character["Basic"]["Crit"]["Element"]);
    tdValAntiCrit["Element"].appendChild(character["Basic"]["Anti_Crit"]["Element"]);

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
    const dv1 = new Div("d1","center");
    const dv2 = new Div("d2","center");
    const dv3 = new Div("d3","center");

    main.appendChild(GenBasicStatTable()["Element"]);
    main.appendChild(GenAdvStatTable()["Element"]);
    main.appendChild(GenEquipStatTable()["Element"]);
    main.appendChild(dv1["Element"]);
    main.appendChild(dv2["Element"]);
    main.appendChild(dv3["Element"]);
    dv1["Element"].appendChild(encWeaponAttr.Town["Element"]);
    dv1["Element"].appendChild(encWeaponAttr.Attribute["Element"]);
    dv1["Element"].appendChild(encWeaponAttr.Lv["Element"]);
    dv1["Element"].appendChild(encWeaponAttr.Value["Element"]);
    dv1["Element"].appendChild(encWeaponAttr.Type["Element"]);

    dv2["Element"].appendChild(encClothAttr.Town["Element"]);
    dv2["Element"].appendChild(encClothAttr.Attribute["Element"]);
    dv2["Element"].appendChild(encClothAttr.Lv["Element"]);
    dv2["Element"].appendChild(encClothAttr.Value["Element"]);
    dv2["Element"].appendChild(encClothAttr.Type["Element"]);

    dv3["Element"].appendChild(encDecAttr.Town["Element"]);
    dv3["Element"].appendChild(encDecAttr.Attribute["Element"]);
    dv3["Element"].appendChild(encDecAttr.Lv["Element"]);
    dv3["Element"].appendChild(encDecAttr.Value["Element"]);
    dv3["Element"].appendChild(encDecAttr.Type["Element"]);
}

