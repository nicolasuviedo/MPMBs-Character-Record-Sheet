RaceList["something catlike"] = { //Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /^(?=.*something)(?=.*catlike).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "something" and "catlike" in it, disregarding capitalization). If this looks to complicated, just write: /something catlike/i
	
	name : "Something Catlike", //required; the name to use for the race
	
	sortname : "Catlike, Something", //optional; this is the name used to fill the drop-down boxes. If you don't include this, the 'name' will used instead
	
	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew.
	
	plural : "Somethings Catlike", //required; the name to use for the race when the plural form is used
	
	size : 3, //required;  the size of the race (Gargantuan = 0, Huge = 1, Large = 2, Medium = 3, Small = 4, Tiny = 5)
	
	speed : [30, 20], //required;  the speed of the race in feet. The first entry is the base speed, the second entry is the encumbered speed
	
	languages : ["Common", "Celestial"], //optional; the language(s) known by any of the race
	
	vision : "Darkvision 60 ft", //optional;  vision granted by the race. This text will be put in the "Senses" section on the sheet. This line can be deleted if you don't have anything to put here
	
	dmgres : ["necrotic", "radiant"], //optional; damage resistance(s) the race has. This line can be deleted if you don't have anything to put here
	
	savetxt : "Adv. vs. being charmed; Magic can't put me to sleep", //optional; damage resistance(s) the race has. This line can be deleted if you don't have anything to put here
	
	weaponprofs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]], //optoinal; Weapon proficiencies the race has. This line can be deleted if you don't have anything to put here //the 3 entries are for: ["simple", "martial", "other"]
	
	skills : ["Perception", "Deception"], //optional; Skill proficiencies the race has. This line can be deleted if you don't have anything to put here. If the race doesn't give fixed proficiencies, but instead gives a choice, delete this line and use the line below, "skillstxt"
	
	skillstxt : "Choose any two skills",  //optional; Skill proficiencies the race has. This line can be deleted if you don't have anything to put here. If the race only gives fixed skill proficiencies (no choices), then delete this line and only use "skills" above
	
	age : " reach adulthood in their late teens and live around 100 years", //optional; the age tooltip/mouseover text (will be displayed in combination with the "plural" entry)
	
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")", //optional; the height tooltip/mouseover text (will be displayed in combination with the "plural" entry)
	
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)", //optional; the weight tooltip/mouseover text (will be displayed in combination with the "plural" entry)
	
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)", //optional; the height tooltip/mouseover text (will be displayed in combination with the "plural" entry), when the metric system is chosen
	
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", //optional; the weight tooltip/mouseover text (will be displayed in combination with the "plural" entry), when the metric system is chosen
	
	improvements : "Something Catlike: +1 Dexterity, +2 Wisdom;", //required; the text that is displayed when listing all the ability score improvements
	
	scores : [0, 1, 0, 0, 2, 0], //required; the ability score improvements as used by the Ability Score dialog. The syntax is: [Str, Dex, Con, Int, Wis, Cha]
	
	trait : "Something Catlike (+1 Dexterity, +2 Wisdom)\nCelestial Legacy:\n   I know the Light cantrip.\n   Once I reach 3rd level, I can cast the Lesser Restoration spell once per long rest.\nBreath Weapon: Exhale destructive energy as an action with a size, shape, saving throw type, and damage type as found in the table. All in the area must make a saving throw with DC 8 + Wis modifier + prof bonus. It does 2d6 (+1d6 at level 6, 11, 16) damage, half as much damage on a successful save. I can use it again after a short rest.", //required; the racial trait as it will be put in the Racial Trait field on the second page (note that "\n" is a line break).
	
	abilitySave : 5,  //optional; the ability score to use for the Ability Saving Throws. Remove this line if your race has no Ability that requires Saving Throws. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)
	
	variants : ["something great catlike"], //optional; the names of the racial variants, using the exact names of the entry of the variants given in the RaceSubList (note the use of only lower case)
	
	spellcastingAbility : 6, //required for a spellcaster; the ability score to use for spellcasting. Remove this line if your race has no spellcasting. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)
	
	spellcastingBonus : { //optional; an object that adds something to the "Bonus Spells" section of the spell selection dialog //this object can have all the same attributes as the "spellcastingList" object as defined in the ClassList, but must also have a "name" defined" //the other things that can be defined in this that are not in the "spellcastingList" object, are the "selection", "times" and "prepared" values
	
		name : "Arcane Initiate", //required; this is used to identify the object, so must be an unique name
		
		class : "wizard", //Required; The name of the class from whose spell list the spells come from. This can be "any" if the spells are not limited by a spell list of just one class. The entry has to match the name of the class in the SpellsList
		
		school : ["Evoc", "Abjur"], //Optional; An array of abbreviations of spell school names (see SpellsList). These have to be in an array, even if it is just one value. Each entry has to match the name of the spell school in the SpellsList
		
		level : [0, 4], //Optional; The lower and upper limit of spell levels that the class has access to.
		
		ritual : false, //Optional; Donates if only ritual (true) or only non-ritual (false) spells should be included in the list
		
		spells : ["light", "mending"], //Optional; If a "spells" array is present, all other objects will be ignored and only this list of spells will populate the list of available spells. each entry has to match the name of the spell in the SpellsList
		
		selection : ["light"], //optional if "spells" is defined; this is the default selection for the array specified in "spells"
		
		times : 2, //optional; this is the number of times the bonus spells should be added. //This can also be an array of 20 values. That way the number of times are level-dependent
		
		prepared : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to automatically get a checked off checkbox in the first column, similar to domain spells for a cleric
		
		atwill : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "At Will" in the first column
		
		oncesr : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "1×SR" in the first column
		
		oncelr : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "1×LR" in the first column
	},
	
	features : { //optional; the racial features. Each works the same way, so only a couple of example are given. You can add as many as you want. If the race has no level-dependent or limited features, you can just delete the whole feature entry all together
	
		"lesser restoration" : { //note the use of lower case characters
		
			name : "Lesser Restoration", //required; the name of the racial feature
			minlevel : 3, //required; the level at which the feature is gained
			
			usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level
			
			recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you define either "long rest" or "short rest" (note the lower case), than the feature is also added to the limited features
			
			tooltip : " (Celestial Legacy)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gainged from Something Catlike (Celestial Legacy)"
			
			action : ["action", ""],
			
			spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
				name : "Celestial Legacy (level 3)",
				spells : ["lesser restoration"],
				selection : ["lesser restoration"],
				oncelr : true,
			},
		},
		
		"breath weapon" : {
			name : "Breath Weapon",
			minlevel : 1,
			usages : 1,
			additional : ["2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6", "5d6"],  //optional; text to display in the description field of the limited feature. This can be one value, but can also be an array of 20 values, one for each level.
			recovery : "short rest",
			tooltip : "",
			
			action : ["action", ""], //optional; adds the name of this choice to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
		},
	}
	
};

UpdateDropdown("race"); //Optional; This updates and resets all race dropdown fields (both on first page and first companion page)