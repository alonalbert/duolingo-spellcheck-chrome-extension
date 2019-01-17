var observer = new WebKitMutationObserver(
    function(mutations) {
        waitForTextarea();
    }
);

observer.observe(document, {
    subtree: true,
    attributes: true
});

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// Samples:
// <input type="text" data-test="challenge-name-input" value="" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" class="_2Wa8I _1py6s _1e69E _3_NyK _1Juqt _3WbPm" dir="ltr" placeholder="Type in Spanish">
function waitForTextarea() {
    textarea = getElementByXpath("//textarea[@spellcheck=\"false\"] | //input[@spellcheck=\"false\"]")
    if (textarea != null) {
        textarea.setAttribute("spellcheck", "true")
         console.log("Enabled spellcheck");
//    } else {
//         console.log("No text area");
    }
}
