// Please note that all comments on this code were written after the fact by someone who did not write the code and does not know js.
// I did my best to understand what was going on and the comments are a result of that. Do not take them as gospel. - Will

var testObj = {};
(function(testObj) {
  var all = document.getElementById("all-bylaws"); // create tree of all html(?) elements in the bylaw page
  let glob_ctr = 0; // this variable gets incremented but never used
  processNode(all); // call the following function on the structure of all elements

  function processNode(node) { // open processNode function definition
    // processNode recursively searches for any text matching the format of a section name and turns them into links to that section.
    const nodeRegex = /\s((?:VI{1,3}|I?V|I{1,3})\.[A-Z](?:\.[a-zA-Z1-9\.]*[a-zA-Z1-9])?)/g; // define regex for the structure of a section name (i.e. RomanNumeral.CapitalLetter.AlphaNumericCharacter.AlphaNumericCharacter or some subset of that)
    for (let [e, subnode] of node.childNodes.entries()) { // open loop through subnodes
      if (subnode.nodeType == Node.TEXT_NODE) {
        if (nodeRegex.test(subnode.textContent)) { // filter out everything except elements containing text matching the regex defined above
          nodeRegex.lastIndex = 0;
          var re = nodeRegex,
              str = subnode.textContent,
              offs = 0;
          while ((match = re.exec(str)) != null) { // loop through all instances where text matches the regex. var match is an array containing 
            innode = subnode.splitText(match.index + 1 - offs) // splits the node of the element into two, one before and one after the beginning of the matching text. var innode is the node including the matching text and any after it. 
            subnode = innode.splitText(match[1].length) // splits the newly created node into two, one of just the matching text and one of everything after it. var subnode is the node of the text after. This also seems to modify innode to only include the regex-matching section.
            offs = match.index + match[0].length; // set the offset so that it will work for future iterations
            // console.log(match[1]);
            ref_node = findNode(match[1]); // call a function defined below on the string that matches the regex. Return the node that the regex points to (the target section)
            rep_innode = document.createElement("a") // initialize a replacement node for the regex-matching node
            rep_innode.textContent = match[1]; 
            if (ref_node == null) { // if the regex-matching text does not correspond to a real section, make it an invalid ref 
              rep_innode.classList.add("invalid-ref");
            } else {
              if (ref_node.firstElementChild && ref_node.firstElementChild.nodeName[0] == "H") { // if targeted section has a title, add that title to the target id
                rep_innode.dataset.targetSection = ref_node.firstElementChild.textContent
              }
              rep_innode.classList.add("valid-ref"); // give the replacement node the css class "valid-ref"
              if (!ref_node.id) { // assign the target section an id and give it the "anchor" class
                ref_node.id = match[1].replaceAll(".", "-");
                glob_ctr = glob_ctr + 1; // increment mystery variable
              }
              rep_innode.href = "#" + ref_node.id; // assign the replacement node an href to the target node
            }
            innode.parentElement.replaceChild(rep_innode,innode); // replace innode (the regex-matching text) with rep_innode (the regex-matching text, plus the link to the target and other relevant meta info)
          }
          }
        } else { // if the node was not of type TEXT_NODE, run processNode on it and its subnodes
          processNode(subnode);
        }
      } // close loop through subnodes
    } // close processNode function definition

    testObj.findNode = findNode;
    function findNode(str) { // open findNode function definition
      // findNode returns the node with id matching the string passed to the function
      var segments = str.split(".");
      var lv2 = segments.shift();
      var lv3 = segments.shift();
      var in_h2_range = false;
      for (bylaw_section of document.getElementsByClassName("bylaws")) {
        child = bylaw_section.getElementsByTagName("h2")[0];
        if (child.textContent.trim().split(".")[0] == lv2) {
          for (bylaw_subsection of bylaw_section.getElementsByTagName("h3")) {
            if (bylaw_subsection.textContent.trim().split(".")[0] == lv3) {
              var list_ele = bylaw_subsection.nextElementSibling;
              while (list_ele.nodeName != "OL" && list_ele.nodeName != "UL") {
                list_ele = list_ele.nextElementSibling;
              }
              var invalid = false;
              var li = list_ele;
              // console.log("liste elel = ", list_ele);
              // console.log("list ele style = ", window.getComputedStyle(list_ele).getPropertyValue("list-style-type"))
              // console.log("Remaining segments: ", segments);
              while (segments.length > 0) {
                var nextseg = segments.shift();
                var nextsegi;
                // console.log("Geting segi from ", nextseg);
                switch (window.getComputedStyle(list_ele).getPropertyValue("list-style-type")) {
                  case 'lower-roman':
                  if (!nextseg.match(/^[xiv]+$/)) {
                    invalid = true;
                    // console.log("invalid lower rome");
                  } else {
                    nextsegi = roman_to_Int(nextseg.toUpperCase());
                  }
                  break;
                  case 'upper-roman':
                  if (!nextseg.match(/^[XIV]+$/)) {
                    invalid = true;
                    // console.log("invalid upper rome")
                  } else {
                    nextsegi = roman_to_Int(nextseg);
                  }
                  break;
                  case 'lower-alpha':
                  if (!nextseg.match(/^[a-z]+$/)) {
                    invalid = true;
                    // console.log("invalid lower alph")
                  } else {
                    nextsegi = nextseg.charCodeAt(0) - 97 + 1;
                  }
                  break;
                  case 'upper-alpha':
                  if (!nextseg.match(/^[A-Z]+$/)) {
                    invalid = true;
                    // console.log("invalid upper alp")
                  } else {
                    nextsegi = nextseg.charCodeAt(0) - 65 + 1;
                  }
                  break;
                  case 'decimal':
                  if (!nextseg.match(/^[0-9]+$/)) {
                    invalid = true;
                    // console.log("Invalid deci");
                  } else {
                    nextsegi = +nextseg;
                  }
                  break;
                  default:
                  // console.log("invalid wtf")
                  invalid = true;
                }
                // console.log("Got seg ", nextsegi, " (invalid = ", invalid, ")")
                if (invalid) {
                  break;
                }
                var ctr = 1;
                li = undefined;
                // console.log("searching list_ele ", list_ele)
                for (child_node of list_ele.childNodes.entries()) {
                  child_node = child_node[1];
                  if (child_node.nodeName == "LI") {
                    // console.log("found li ", ctr, " ", child_node)
                    if (ctr == nextsegi) {
                      // console.log("aaaay gottems ", child_node);
                      li = child_node;
                      break;
                    }
                    ctr++;
                  } else {
                    // console.log("Nope, ", child_node);
                  }
                }
                if (nextsegi < 0 || li == undefined) {
                  // console.log("not long enough ", li);
                  invalid = true;
                  break;
                }
                if (segments.length > 0) {
                  // console.log("old list: ", list_ele);
                  // console.log("li: ", li)
                  list_ele = li.firstChild;
                  if (list_ele == null) {
                    invalid = true;
                    break;
                  }
                  while (list_ele.nodeName != "OL" && list_ele.nodeName != "UL") {
                    list_ele = list_ele.nextElementSibling;
                    if (list_ele === null) {
                      invalid = true;
                      break;
                    }
                  }
                  // console.log("new list: ", list_ele)
                  if (invalid) {
                    break;
                  }
                }
              }
              return invalid ? null : li;
            }
          }
        }
      }
    }

    /* https://www.w3resource.com/javascript-exercises/javascript-math-exercise-22.php */
    function roman_to_Int(str1) {
      function char_to_int(c){
        switch (c){
          case 'I': return 1;
          case 'V': return 5;
          case 'X': return 10;
          case 'L': return 50;
          case 'C': return 100;
          case 'D': return 500;
          case 'M': return 1000;
          default: return -1;
        }
      }
      if(str1 == null) return NaN;
      var num = char_to_int(str1.charAt(0));
      var pre, curr;

      for(var i = 1; i < str1.length; i++){
        curr = char_to_int(str1.charAt(i));
        pre = char_to_int(str1.charAt(i-1));
        if(curr <= pre){
          num += curr;
        } else {
          num = num - pre*2 + curr;
        }
      }

      return num;
    }


    /* https://stackoverflow.com/a/41358305/4948732 */
    function convertToRoman(num) {
      var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      var str = '';

      for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
      }

      return str;
    }

})(testObj);
