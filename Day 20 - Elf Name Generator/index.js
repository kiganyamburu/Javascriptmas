const elfFirstNames = [
    "Aurora", "Blitzen", "Crispin", "Dazzle", "Evergreen", "Frost", "Glimmer",
    "Holly", "Icicle", "Joyful", "Kringle", "Luna", "Merry", "Nutmeg",
    "Olwen", "Pine", "Quill", "Razzle", "Sparkle", "Tinsel", "Umbra",
    "Vixen", "Whisk", "Xylo", "Yule", "Zippy"
  ];
  
  const elfLastNames = [
    "Applecheeks", "Bells", "Candycane", "Dazzlebright", "Everbright", "Frostwhisk",
    "Gingersnap", "Hollyberry", "Icestorm", "Jovial", "Kindleflame", "Lightwhisper",
    "Merrysprout", "Nutcracker", "Oakenleaf", "Peppermint", "Quicksilver", "Raindrop",
    "Snowdust", "Twinkletoes", "Underwood", "Velvet", "Winterberry", "Xylospark",
    "Yuletide", "Zestwind"
  ];
  
  
  /*
   * 🎅 Task:
   * - Generate an elf first and last name that matches the user’s first and last name initials, then display it on the screen.
   * - Example: if the user’s name is "John Doe," the elf name could be "Joyful Dazzle."
   * - Display the generated elf names in the "Registered Employees" list.
   */
  function generateElfName(firstNameInitial, lastNameInitial) {
    const matchingFirstNames = elfFirstNames.filter(name => name.startsWith(firstNameInitial));
    const matchingLastNames = elfLastNames.filter(name => name.startsWith(lastNameInitial));
  
    if (matchingFirstNames.length === 0 || matchingLastNames.length === 0) {
      return "No matching elf names found.";
    }
  
    const randomFirstNameIndex = Math.floor(Math.random() * matchingFirstNames.length);
    const randomLastNameIndex = Math.floor(Math.random() * matchingLastNames.length);
  
    return `${matchingFirstNames[randomFirstNameIndex]} ${matchingLastNames[randomLastNameIndex]}`;
  }
  
  // Get user's name initials
  const userName = "John Doe"; // Replace with actual user input
  const firstNameInitial = userName.charAt(0).toUpperCase();
  const lastNameInitial = userName.charAt(userName.indexOf(" ") + 1).toUpperCase();
  
  // Generate elf name
  const elfName = generateElfName(firstNameInitial, lastNameInitial);
  
  // Display elf name
  console.log("Generated Elf Name:", elfName); 
  
  // Display in "Registered Employees" list (example)
  const registeredEmployeesList = document.getElementById("registeredEmployees"); 
  const listItem = document.createElement("li");
  listItem.textContent = elfName;
  registeredEmployeesList.appendChild(listItem); 
  /*
   * 🌟 Stretch Goals:
   * - Generate the elf names using an LLM API (like HuggingFace). 
   * - Don't save the same name twice. (not necessary for the normal task)
   * - Make sure to use Scrimba's environment variables feature so you don't expose your API key 
   */ 
  