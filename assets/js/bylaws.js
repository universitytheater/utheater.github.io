var testObj = {};
(function(testObj) {
  var all = document.getElementById("all-bylaws");
  let glob_ctr = 0;
  processNode(all);
  function processNode(node) {
    const nodeRegex = /\s((?:VI{1,3}|I?V|I{1,3})\.[A-Z](?:\.[a-zA-Z1-9\.]*[a-zA-Z1-9])?)/g;
    for (let [e, subnode] of node.childNodes.entries()) {
      if (subnode.nodeType == Node.TEXT_NODE) {
        if (nodeRegex.test(subnode.textContent)) {
          nodeRegex.lastIndex = 0;
          var re = nodeRegex,
              str = subnode.textContent,
              offs = 0;
          while ((match = re.exec(str)) != null) {
            innode = subnode.splitText(match.index + 1 - offs)
            subnode = innode.splitText(match[1].length)
            offs = match.index + match[0].length;
            // console.log(match[1]);
            ref_node = findNode(match[1]);
            rep_innode = document.createElement("a")
            rep_innode.textContent = match[1];
            if (ref_node == null) {
              rep_innode.classList.add("invalid-ref");
            } else {
              if (ref_node.firstElementChild && ref_node.firstElementChild.nodeName[0] == "H") {
                rep_innode.dataset.targetSection = ref_node.firstElementChild.textContent
              }
              rep_innode.classList.add("valid-ref");
              if (!ref_node.id) {
                ref_node.id = match[1].replaceAll(".", "-");
                ref_node.classList.add("anchor");
                glob_ctr = glob_ctr + 1;
              }
              rep_innode.href = "#" + ref_node.id;
            }
            innode.parentElement.replaceChild(rep_innode,innode);
          }
          // for (match of subnode.textContent.matchAll(nodeRegex)) {
            //   console.log(match[1]);
            //   console.log(findNode(match[1]));
            // }
          }
        } else {
          processNode(subnode);
        }
      }
    }

    testObj.findNode = findNode;
    function findNode(str) {
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
